import { ChipStatus } from "@/components/ui/chip";

export type TableUser = {
  id: string | number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: ChipStatus;
};
