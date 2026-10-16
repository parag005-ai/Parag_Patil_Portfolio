"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const GA_MEASUREMENT_ID = "G-VXQSQ1ZY4D";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    __portfolioLastTrackedPath?: string;
  }
}

function PageViewTracker({ ready }: { ready: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  useEffect(() => {
    if (!ready || !window.gtag || !pathname) return;

    const pagePath = query ? `${pathname}?${query}` : pathname;
    if (window.__portfolioLastTrackedPath === pagePath) return;

    window.__portfolioLastTrackedPath = pagePath;
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, query, ready]);

  return null;
}

export function GoogleAnalytics() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        onReady={() => setReady(true)}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);};
          window.gtag('js', new Date());
          window.gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <PageViewTracker ready={ready} />
      </Suspense>
    </>
  );
}
