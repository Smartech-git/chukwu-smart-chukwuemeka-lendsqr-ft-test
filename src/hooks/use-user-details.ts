"use client";

import { useState, useEffect } from "react";

import { getUserDetails } from "@/indexedDB/user-details-cache";
import { UserDetailsData } from "@/requests/get-user";

export function useUserDetails(userId: string, initialData?: UserDetailsData) {
  const [data, setData] = useState<UserDetailsData | undefined>(initialData);
  const [isLoading, setIsLoading] = useState(!initialData);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUserDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const cachedData = await getUserDetails(userId.toString());
        if (cachedData) {
          console.info("Loaded user details from offline cache");
          setData(cachedData.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error("Failed to fetch user details"));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (!initialData) {
      fetchUserDetails();
    }

    return () => {
      isMounted = false;
    };
  }, [userId, initialData]);

  return { data, isLoading, error };
}
