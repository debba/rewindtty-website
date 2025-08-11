'use client'

import Script from 'next/script'

export default function MatomoAnalytics() {
  const matomoSiteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID
  const matomoUrl = process.env.NEXT_PUBLIC_MATOMO_URL

  if (!matomoSiteId || !matomoUrl) {
    return null
  }

  return (
    <>
      <Script
        id="matomo-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="${matomoUrl}";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '${matomoSiteId}']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `,
        }}
      />
    </>
  )
}