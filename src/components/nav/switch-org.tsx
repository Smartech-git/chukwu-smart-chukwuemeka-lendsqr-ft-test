import React from "react";

import { Icon } from "@/components/icons";

export default function SwitchOrg() {
  return (
    <div className='side-nav switch-org'>
      <Icon name='icon-briefcase' width={16} height={16} />
      <p>Switch Organization</p>
      <Icon name='icon-arrow-down' width={14} widths={14} />
    </div>
  );
}
