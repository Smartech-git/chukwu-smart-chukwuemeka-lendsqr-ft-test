import { useState } from "react";
import ReactPaginate from "react-paginate";

import { Icon } from "../icons";

import Button from "./button";

interface Props {
  total: number;
  pageRangeDisplayed?: number;
  intialPage?: number;
  onChange: (page: number) => void;
}

export default function Pagination({ total, onChange, pageRangeDisplayed = 3, intialPage = 1 }: Props) {
  const [disabled, setDisabled] = useState(false);

  return (
    <ReactPaginate
      breakLabel='...'
      initialPage={intialPage}
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
      renderOnZeroPageCount={null}
    />
  );
}
