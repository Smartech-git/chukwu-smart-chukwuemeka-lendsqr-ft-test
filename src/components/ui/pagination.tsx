import ReactPaginate from "react-paginate";

import { Icon } from "@/components/icons";
import Button from "@/components/ui/button";

interface Props {
  total: number;
  pageRangeDisplayed?: number;
  initialPage?: number;
  onChange: (page: number) => void;
}

export default function Pagination({ total, onChange, pageRangeDisplayed = 3 }: Props) {
  return (
    <ReactPaginate
      breakLabel='...'
      previousLabel={
        <Button variant='flat'>
          <Icon name='icon-arrow-left' width={14} height={14} />
        </Button>
      }
      nextLabel={
        <Button variant='flat'>
          <Icon name='icon-arrow-right' width={14} height={14} />
        </Button>
      }
      onPageChange={(e) => onChange(e.selected)}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={3}
      pageCount={total}
      pageClassName='page-item'
      pageLinkClassName='page-link'
      previousClassName='page-item'
      previousLinkClassName='page-link'
      nextClassName='page-item'
      nextLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName='pagination'
      activeClassName='active'
      disabledClassName='disabled'
      // renderOnZeroPageCount={null}
    />
  );
}
