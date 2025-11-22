import { IconName } from "@/components/icons";
import { ChipStatus } from "@/components/ui/chip";
import { Column } from "@/components/ui/table";

export type UserMetrics = {
  icon: IconName;
  title: string;
  value: number;
};

export const usersMetrics: UserMetrics[] = [
  {
    icon: "icon-users-outline",
    title: "Users",
    value: 2453,
  },
  {
    icon: "icon-users-outline-01",
    title: "Active Users",
    value: 2453,
  },
  {
    icon: "icon-np-loan",
    title: "Users with Loans",
    value: 2453,
  },
  {
    icon: "icon-np-money",
    title: "Users with Savings",
    value: 2453,
  },
];

export const usersTableCol: Column[] = [
  {
    key: "organization",
    label: "Organization",
    sortable: true,
  },
  {
    key: "username",
    label: "Username",
    sortable: true,
    hiddenOnMobile: true,
  },
  {
    key: "email",
    label: "Email",
    sortable: true,
  },
  {
    key: "phoneNumber",
    label: "Phone number",
    sortable: true,
  },
  {
    key: "dateJoined",
    label: "Date joined",
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
  },
  {
    key: "action",
    label: "Action",
    hidden: true,
  },
];

export type UsersData = {
  id: string | number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: ChipStatus;
  action?: any;
};

export type ColumeKey = keyof UsersData;

export const organization: Options = [
  {
    label: "Globex Corp.",
    value: "Globex Corp.",
  },
  {
    label: "Wayne Enterprises",
    value: "Wayne Enterprises",
  },
  {
    label: "Techtronix",
    value: "Techtronix",
  },
  {
    label: "Black Mesa",
    value: "Black Mesa",
  },
  {
    label: "Acme Inc.",
    value: "Acme Inc.",
  },
];

export const status: Options = [
  {
    label: "Active",
    value: "Active",
  },
  {
    label: "Inactive",
    value: "Inactive",
  },
  {
    label: "Pending",
    value: "Pending",
  },
  {
    label: "Blacklisted",
    value: "Blacklisted",
  },
];



