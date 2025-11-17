import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function SideNavWrapper({ children }: Props) {
  return <div className='side-nav-wrapper'>{children}</div>;
}
