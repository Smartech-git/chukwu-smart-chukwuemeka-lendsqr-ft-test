import { useCallback } from "react";
import { SWRInfiniteConfiguration, SWRInfiniteKeyLoader } from "swr/infinite";
import useSWRInfinite from "swr/infinite";

import { request } from "@/lib/api/request";

interface UseInfiniteAPIOptions extends FetcherOptions, Omit<SWRInfiniteConfiguration, "fetcher"> {
  limit?: number | undefined;
  paginationType?: "cursor" | "page";
  customFetcher?: (url: string, options: FetcherOptions) => Promise<any>;
}

interface BaseResponse<T> {
  data?: T[];
}

export interface PagePaginatedResponse<T> extends BaseResponse<T> {
  pagination: {
    currentPage: number;
    totalItems: number;
    totalPages: number;
  };
}

export function useInfiniteAPI<T>(endpoint: string | null, options: UseInfiniteAPIOptions = {}) {
  const { limit = undefined, method, data, customHeaders, useAuthBaseUrl, fetchOptions, useAuth, paginationType = "page", customFetcher, cookiesKey, ...swrOptions } = options;

  const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
    if (pageIndex === 0) {
      return `${endpoint}?page=1${limit ? `&limit=${limit}` : ""}`;
    }
    if (previousPageData) {
      const pageData = previousPageData as PagePaginatedResponse<T>;
      if (pageData?.pagination?.currentPage === (pageData?.pagination?.totalPages || pageData?.pagination?.totalPages)) return null;
      return `${endpoint}?page=${pageData?.pagination?.currentPage + 1}${limit ? `&limit=${limit}` : ""}`;
    }
    return null;
  };

  const fetcherOptions = {
    method,
    data,
    customHeaders,
    useAuthBaseUrl,
    fetchOptions,
    useAuth,
    cookiesKey,
  };

  const {
    data: pages,
    error,
    size,
    setSize,
    isLoading,
    isValidating,
    mutate,
  } = useSWRInfinite<PagePaginatedResponse<T>>(getKey, endpoint ? (url) => (customFetcher || request)(url, fetcherOptions) : null, {
    revalidateFirstPage: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    ...swrOptions,
  });

  const items = pages ? pages.flatMap((page) => page?.data || []) : [];
  const isEmpty = pages?.[0]?.data?.length === 0;

  const isReachingEnd =
    isEmpty ||
    (pages &&
      (() => {
        const lastPage = pages[pages.length - 1];
        return (lastPage as PagePaginatedResponse<T>)?.pagination?.currentPage === (lastPage as PagePaginatedResponse<T>)?.pagination?.totalPages;
      })());

  const isLoadingMore = isLoading || (size > 0 && pages && typeof pages[size - 1] === "undefined");
  const total = pages?.[0]?.pagination?.totalPages ?? 0;

  const currentPage = paginationType === "page" ? (pages?.[pages?.length - 1] as PagePaginatedResponse<T>)?.pagination?.currentPage ?? 1 : size;

  const currentPageData = pages && pages.length > 0 ? pages[size - 1]?.data ?? [] : [];

  const revalidateFirstPage = async () => {
    try {
      const firstPageUrl = getKey(0, null);
      const newFirstPage = await (customFetcher || request)(firstPageUrl as string, fetcherOptions);

      mutate((currentPages) => {
        if (!currentPages) return currentPages;
        return [newFirstPage, ...currentPages.slice(1)];
      }, false);
    } catch (error) {
      console.error("Error revalidating first page:", error);
    }
  };

  const addItem = (newItem: T, shouldMutate: boolean = false) => {
    mutate((pages) => {
      if (!pages) return pages;
      const updatedPages = [...pages];
      const arrayKey = "data";
      updatedPages[0] = {
        ...updatedPages[0],
        [arrayKey]: [newItem, ...(updatedPages[0]?.[arrayKey] || [])],
        pagination: {
          ...updatedPages[0]?.pagination,
          totalItems: updatedPages[0]?.pagination.totalItems + 1,
        },
      };
      return updatedPages;
    }, shouldMutate);
  };

  const removeItem = (itemToRemove: T, identifierKey: keyof T, keyValue?: any) => {
    mutate((pages) => {
      if (!pages) return pages;
      const updatedPages = pages.map((page) => {
        const arrayKey = "data";
        return {
          ...page,
          [arrayKey]: (page?.[arrayKey] || []).filter((item) => item[identifierKey] !== (itemToRemove?.[identifierKey] || keyValue)),
          pagination: {
            ...page?.pagination,
            totalItems: page?.pagination?.totalItems - 1,
          },
        };
      });
      return updatedPages;
    }, false);
  };

  const loadMore = useCallback(() => {
    if (!isReachingEnd && !isLoadingMore) setSize(size + 1);
  }, [isReachingEnd, isLoadingMore, setSize, size]);

  return {
    items,
    currentPageData,
    error,
    isLoading,
    isLoadingMore,
    isReachingEnd,
    isEmpty,
    total,
    size,
    setSize,
    mutate,
    isValidating,
    currentPage,
    revalidateFirstPage,
    loadMore,
    removeItem,
    addItem,
  };
}
