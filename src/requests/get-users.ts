import { request } from "@/lib/api/request";
import { TableUser } from "@/requests/types";

export interface GetUsersResponse {
  data: TableUser[];
  pagination: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
  };
}

export const getUsers: FetchFunction = async (url, options): Promise<GetUsersResponse> => {
  const response = await request<TableUser[]>(url, options);

  let currentPage = 1;
  try {
    const queryString = url.split("?")[1] || "";
    const params = new URLSearchParams(queryString);
    currentPage = parseInt(params.get("page") || "1", 10);
    if (isNaN(currentPage)) currentPage = 1;
  } catch (e) {
    currentPage = 1;
  }

  return {
    data: response,
    pagination: {
      totalPages: 5,
      totalItems: 100,
      currentPage,
    },
  };
};
