import '../styles/globals.css'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { trackPageView } from '../utils/analytics'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  // Track page views
  useEffect(() => {
    const handleRouteChange = (url) => {
      trackPageView(url)
    }
    
    // Track initial page load
    trackPageView(router.asPath)
    
    // Track route changes
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.asPath, router.events])
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TRCTMJXD');
          `,
        }}
      />
      
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2JJFX16V47"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2JJFX16V47');
        `}
      </Script>
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
