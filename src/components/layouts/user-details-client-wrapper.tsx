"use client";

import { useEffect } from "react";

import GeneralDetails from "@/components/content/users/general-details";
import UserDetialsProfile from "@/components/content/users/user-details-profile";
import { Icon } from "@/components/icons";
import { useUserDetails } from "@/hooks/use-user-details";
import { saveUserDetails } from "@/indexedDB/user-details-cache";
import { UserDetailsData } from "@/requests/get-user";

interface Props {
  userId: string;
  initialData: UserDetailsData;
  showProfile?: boolean;
  showGeneralDetails?: boolean;
}

export default function UserDetailsClientWrapper({ userId, initialData, showProfile = false, showGeneralDetails = false }: Props) {
  const { data } = useUserDetails(userId, initialData);

  useEffect(() => {
    const cacheData = async () => {
      try {
        await saveUserDetails(userId, initialData);
      } catch (error) {
        console.warn("Failed to cache user details:", error);
      }
    };

    if (initialData?.id) {
      cacheData();
    }
  }, [userId, initialData]);

  if (!data) {
    return (
      <div className='user-details-loading'>
        <Icon name='icon-spinner' className='animate-spin' width={48} height={48} />
      </div>
    );
  }

  return (
    <>
      {showProfile && <UserDetialsProfile userProfile={data?.profile} />}
      {showGeneralDetails && <GeneralDetails generalDetails={data.generalDetails} />}
    </>
  );
}
