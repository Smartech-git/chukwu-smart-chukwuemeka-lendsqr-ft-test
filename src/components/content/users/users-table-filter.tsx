"use client";

import { Icon } from "@/components/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/drop-down";
import Input from "@/components/ui/input";
import { Select } from "@/components/ui/select";

interface Props {
  label: string;
  className?: string;
}
export default function UsersTableFilter({ label, className }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className} endContent={<Icon width={16} height={16} name='icon-filter' />} variant='flat' asChild>
        {label}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Input animatePlaceholder={false} placeholder='Username' />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
