export { default as SvgSprite } from "./sprite";
export { default as Icon } from "@/components/icons/icon";

export const ICON_IDS = {
  add: "icon-add",
  arrowDown: "icon-arrow-down",
  arrowLeft: "icon-arrow-left",
  arrowRight: "icon-arrow-right",
  arrowUp: "icon-arrow-up",
  spinner: "icon-spinner",
  checkMark: "icon-check-mark",
  calender: "icon-calender",
} as const;

export type IconName = (typeof ICON_IDS)[keyof typeof ICON_IDS];
