"use client";

import { format } from "date-fns";
import { useCallback } from "react";

import { ColumeKey, UsersData, usersTableCol } from "@/app/app/users/variables";
import UsersTableActions from "@/components/content/users/users-table-actions";
import UsersTableFilter from "@/components/content/users/users-table-filter";
import UsersTablePerPage from "@/components/content/users/users-table-per-page";
import Chip from "@/components/ui/chip";
import Pagination from "@/components/ui/pagination";
import Table, { Column } from "@/components/ui/table";
import { useInfiniteAPI } from "@/hooks/use-infinite-API";
import { cn } from "@/lib/utils";
import { getUsers } from "@/requests/get-users";
import { TableUser } from "@/requests/types";

export default function UsersTable() {
  const { isLoadingMore, currentPage, total, setSize, currentPageData } = useInfiniteAPI<TableUser>("users", {
    customFetcher: getUsers,
    limit: 20,
  });

  const renderColumn = useCallback((column: Column) => {
    return <UsersTableFilter label={column.label} className={cn(column.hidden && "hidden")} />;
  }, []);

  const renderCell = useCallback((item: UsersData, columnKey: string) => {
    switch (columnKey as ColumeKey) {
      case "organization":
        return <span>{item.organization}</span>;
      case "username":
        return <span>{item.username}</span>;
      case "email":
        return <span>{item.email}</span>;
      case "phoneNumber":
        return <span>{item.phoneNumber}</span>;
      case "dateJoined":
        return <span className='text-nowrap'>{format(item.dateJoined, "PP p")}</span>;
      case "status":
        return <Chip status={item.status} />;
      case "action":
        return <UsersTableActions userId={1} />;
      default:
        return null;
    }
  }, []);

  return <Table loading={isLoadingMore} data={currentPageData} renderCell={renderCell} columns={usersTableCol} renderColumn={renderColumn} bottomContent={<UsersTableBottomContent initialPage={currentPage} total={total} setSize={setSize} />} />;
}

interface Props {
  total: number;
  initialPage: number;
  setSize: (size: number) => void;
}
const UsersTableBottomContent = ({ total, initialPage, setSize }: Props) => {
  const handleOnPageSelect = (page: number) => {
    setSize(page);
  };

  return (
    <div className='users-table-bottom-content'>
      <div className='users-table-bottom-content-per-page'>
        <span>Showing</span>
        <UsersTablePerPage />
        <span>{`out of 100`}</span>
      </div>
      <Pagination total={total} initialPage={initialPage} onChange={handleOnPageSelect} />
    </div>
  );
};
