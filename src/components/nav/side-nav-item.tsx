"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icon, IconName } from "@/components/icons";
import { cn } from "@/lib/utils";

interface SideNavItemProps {
  icon: IconName;
  label: string;
  path: string;
}

export default function SideNavItem({ icon, label, path }: SideNavItemProps) {
  const pathname = usePathname();
  const [, , ...childPaths] = pathname.split("/");

  const subPath = childPaths.join("/") || "/";

  const active = subPath.startsWith(path);

  return (
    <Link href={`/app/${path}`}>
      <div className={cn("side-nav side-nav-link", active && "active")}>
        <Icon name={icon} width={18} height={18} />
        <p>{label}</p>
      </div>
    </Link>
  );
}
