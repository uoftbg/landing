/**
 * Checks if the current device is a mobile device.
 * @returns A boolean indicating whether the current device is a mobile device.
 */
export function isMobile(): boolean {
  return typeof window !== "undefined" && window.innerWidth < 768;
}
