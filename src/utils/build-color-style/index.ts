import { ColorVariant, ElementColor } from "@/types/colors";

const variants: ColorVariant[] = [
  "base",
  "light",
  "lighter",
  "lightest",
  "dark",
  "darker",
  "darkest",
];

export default function (element: string, color: ElementColor) {
  const style: string[] = [];

  for (const variant of variants) {
    style.push(
      `--${element}-${variant}: var(--color-${color}-${variant}); --${element}-${variant}-text: var(--color-${color}-${variant}-text)`
    );
  }

  return style.join("; ");
}
