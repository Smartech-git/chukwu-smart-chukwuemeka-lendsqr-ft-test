import React from "react";

import { Icon } from "@/components/icons";
import Button from "@/components/ui/button";

export default function Notification() {
  return (
    <Button variant='flat'>
      <Icon name='icon-notification' width={26} height={26} />
    </Button>
  );
}
