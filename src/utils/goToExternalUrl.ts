/**
 * Opens the provided URL in a new tab or the current tab.
 * @param url - The URL to navigate to.
 * @param openInNewTab - Optional. Specifies whether to open the URL in a new tab. Default is true.
 */
export function goToExternalUrl(
  url: string,
  openInNewTab: boolean = true
): string | Window | null {
  if (openInNewTab) {
    return window.open(url, "_blank");
  }
  return (window.location.href = url);
}
