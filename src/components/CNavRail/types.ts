export type NavRailItem = {
  label: string;
  icon?: string;
  href?: string;
  action?: () => void;
  children?: NavRailItem[];
};
