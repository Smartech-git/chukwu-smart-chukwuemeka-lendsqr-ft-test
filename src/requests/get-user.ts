import { BaseResponse, request } from "@/lib/api/request";

export type UserDetailsBlock = {
  title: string;
  value: string | number;
};

export type UserDetailsSection = {
  title: string;
  blocks: UserDetailsBlock[];
};

export type Profile = {
  fullName: string;
  userId: string;
  userTier: number;
  accountBalance: number;
  accountNumber: string;
  bankName: string;
};

export type UserDetailsData =
  | {
      id: string;
      profile: Profile;
      generalDetails: UserDetailsSection[];
    }
  | undefined;

export const getUser = async (id: string): Promise<UserDetailsData> => {
  const response = await request<UserDetailsData & BaseResponse>(`user-details/${id}`, {});
  if (response.profile) {
    return response;
  }
  return undefined;
};
