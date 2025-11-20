import { ReactNode } from "react";

import Header from "@/components/nav/header";
import SideNav from "@/components/nav/side-nav";
import { sideNavs } from "@/constants/side-nav";

interface Props {
  children: ReactNode;
}
export default function AppLayout({ children }: Props) {
  return (
    <div className='app-layout'>
      <Header />
      <div className='app-layout-content'>
        <div className='side-nav-wrapper hide-scrollbar'>
          <SideNav navs={sideNavs} />
        </div>
        <div className='page-wrapper'>
          <div className='page-wrapper-content'>{children}</div>
        </div>
      </div>
    </div>
  );
}
