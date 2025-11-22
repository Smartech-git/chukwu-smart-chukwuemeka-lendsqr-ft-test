import { Icon } from "@/components/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/drop-down";

interface Props {
  perPage?: number;
}
export default function UsersTablePerPage({ perPage = 20 }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger variant='flat' endContent={<Icon name='icon-arrow-down' width={14} height={14} />} asChild>
        {perPage}
      </DropdownMenuTrigger>
      <DropdownMenuContent side='bottom'>
        <DropdownMenuItem key={20}>
          <span>20</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>50</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>100</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
