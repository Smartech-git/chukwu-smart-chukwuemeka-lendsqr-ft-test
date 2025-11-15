import React from "react";

import { IconName } from "@/components/icons";
import { cn } from "@/lib/utils";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

export const Icon = ({ name, color, className, style, ...props }: IconProps) => (
  <svg aria-hidden='true' color='#131313' width={24} height={24} className={className} style={color ? { color, ...style } : style} {...props}>
    <use href={`#${name}`} />
  </svg>
);

export default Icon;
