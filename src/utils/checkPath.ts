export function checkPath(
  path: string,
  navigateTo: string,
  color: string
): string {
  return path === navigateTo ? `font-bold ${color}` : "";
}
