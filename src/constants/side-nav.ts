import { IconName } from "@/components/icons";

type Navs = {
  path: string;
  label: string;
  icon: IconName;
};

export type SideNav = {
  title?: string | undefined;
  navs: Navs[];
};

export const sideNavs: SideNav[] = [
  {
    title: undefined,
    navs: [
      {
        path: "dashboard",
        label: "Dashboard",
        icon: "icon-home",
      },
    ],
  },

  {
    title: "Customers",
    navs: [
      {
        path: "users",
        label: "Users",
        icon: "icon-users",
      },
      {
        path: "guarantors",
        label: "Guarantors",
        icon: "icon-users-01",
      },
      {
        path: "loans",
        label: "Loans",
        icon: "icon-sack-01",
      },
      {
        path: "decision-models",
        label: "Decision models",
        icon: "icon-handshake",
      },
      {
        path: "savings",
        label: "Savings",
        icon: "icon-piggy-bank-01",
      },
      {
        path: "loan-requests",
        label: "Loan request",
        icon: "icon-loan",
      },
      {
        path: "whitelist",
        label: "Whitelist",
        icon: "icon-user-check-01",
      },
      {
        path: "karma",
        label: "Karma",
        icon: "icon-user-times-01",
      },
    ],
  },

  {
    title: "Business",
    navs: [
      {
        path: "organization",
        label: "Organization",
        icon: "icon-briefcase",
      },
      {
        path: "loan-products",
        label: "Loan products",
        icon: "icon-loan",
      },
      {
        path: "savings-products",
        label: "Savings Products",
        icon: "icon-bank-savings",
      },
      {
        path: "fees-charges",
        label: "Fees and Charges",
        icon: "icon-coins-solid",
      },
      {
        path: "transactions",
        label: "Transactions",
        icon: "icon-transaction",
      },
      {
        path: "services",
        label: "Services",
        icon: "icon-galaxy-01",
      },
      {
        path: "service-account",
        label: "Service Account",
        icon: "icon-user-cog-01",
      },
      {
        path: "settlements",
        label: "Settlements",
        icon: "icon-settlements",
      },
      {
        path: "reports",
        label: "Reports",
        icon: "icon-chart-bar-02",
      },
    ],
  },

  {
    title: "Settings",
    navs: [
      {
        path: "preferences",
        label: "Preferences",
        icon: "icon-sliders-h-01",
      },
      {
        path: "fees-pricing",
        label: "Fees and Pricing",
        icon: "icon-badge-percent-01",
      },
      {
        path: "audit-logs",
        label: "Audit Logs",
        icon: "icon-clipboard-list-01",
      },
      {
        path: "systems-messages",
        label: "Systems Messages",
        icon: "icon-tire",
      },
    ],
  },
];
