"use client"

import Script from 'next/script'

export default function Analytics() {
  // Reemplaza 'GA_MEASUREMENT_ID' con tu ID real de Google Analytics
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-Z9BK29284G'

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
}