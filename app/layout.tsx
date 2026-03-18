import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://neeraj1909.github.io"),
  title: "Neeraj Kumar Singh | AI Engineer",
  description:
    "AI engineer portfolio with selected projects, research focus, and contact links.",
  applicationName: "Neeraj Portfolio",
  keywords: ["AI Engineer", "LLM", "GenAI", "Machine Learning", "Neeraj Kumar Singh"],
  openGraph: {
    title: "Neeraj Kumar Singh | AI Engineer",
    description:
      "AI engineer portfolio with selected projects, research focus, and contact links.",
    url: "https://neeraj1909.github.io",
    siteName: "Neeraj Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Neeraj Kumar Singh | AI Engineer",
    description:
      "AI engineer portfolio with selected projects, research focus, and contact links.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaId}', { page_path: window.location.pathname });

                document.addEventListener('click', function (event) {
                  const target = event.target;
                  if (!(target instanceof Element)) return;
                  const trackedLink = target.closest('a[data-track-label]');
                  if (!trackedLink) return;
                  const label = trackedLink.getAttribute('data-track-label') || 'outbound_click';
                  const destination = trackedLink.getAttribute('href') || '';
                  gtag('event', 'outbound_click', {
                    event_category: 'engagement',
                    event_label: label,
                    destination: destination,
                  });
                });
              `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
