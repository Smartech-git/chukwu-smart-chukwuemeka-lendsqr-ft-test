import React from "react";

import { Icon } from "@/components/icons";

export default function LogOut() {
  return (
    <div className='side-nav'>
      <Icon name='icon-sign-out' width={18} height={18} />
      <p>Logout</p>
    </div>
  );
}
