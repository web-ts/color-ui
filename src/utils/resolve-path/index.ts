export default function resolvePath<T extends Record<string, any>>(
  object: T,
  path: string
): any {
  return path.split(".").reduce((o, p) => (o ? o[p] : undefined), object);
}
