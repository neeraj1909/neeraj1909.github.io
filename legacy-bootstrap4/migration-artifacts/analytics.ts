export function trackOutboundClick(label: string, href: string): void {
  if (typeof window === "undefined") {
    return;
  }

  const gtag = (window as Window & {
    gtag?: (...args: unknown[]) => void;
  }).gtag;

  if (!gtag) {
    return;
  }

  gtag("event", "outbound_click", {
    event_category: "engagement",
    event_label: label,
    destination: href,
  });
}
