import { ElementColor } from "@/types/colors";
import { ElementSize } from "@/types/sizes";
import { JSX } from "solid-js";

export type ButtonProps = {
  children?: JSX.Element | JSX.Element[];
  size?: ElementSize;
  color?: ElementColor;
  variant?: "solid" | "outline" | "text";
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  target?: string;
  replace?: boolean;
  routerLink?: boolean;
  noScroll?: boolean;
  state?: unknown;
  inactiveClass?: string;
  activeClass?: string;
  end?: boolean;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;
