import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Thanks() {
  const router = useRouter();

  // Track purchase event for Google Tag Manager
  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      // Get transaction ID from URL if available
      const urlParams = new URLSearchParams(window.location.search);
      const sessionId = urlParams.get('session_id') || new Date().getTime().toString();
      
      window.dataLayer.push({
        'event': 'purchase',
        'ecommerce': {
          'transaction_id': sessionId,
          'value': 99,
          'currency': 'USD',
          'items': [{
            'item_name': 'Self Cast Content Package',
            'price': 99,
            'item_id': 'selfcast-content-package'
          }]
        }
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Thank You | Self Cast Studios</title>
        <meta
          name="description"
          content="Thank you for your purchase. We'll be in touch soon to schedule your 20-minute call."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-secondary text-primary font-sans min-h-screen">
        {/* Header */}
        <header className="py-4 px-6 bg-white shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="font-montserrat font-bold text-xl">Self Cast Studios</div>
            <nav>
              <a href="https://selfcaststudios.com" className="text-sm font-medium hover:text-accent transition">Main Site</a>
            </nav>
          </div>
        </header>

        {/* Thank You Content */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">Thank You for Your Purchase!</h1>
            <p className="text-lg mb-6">
              We're excited to help you create amazing content. Here's what happens next:
            </p>
            <div className="space-y-4 text-left mb-8">
              <div className="flex items-start">
                <span className="text-accent font-bold mr-2">1.</span>
                <p>Check your email for scheduling instructions for your 20-minute call.</p>
              </div>
              <div className="flex items-start">
                <span className="text-accent font-bold mr-2">2.</span>
                <p>Complete your call with our content specialist.</p>
              </div>
              <div className="flex items-start">
                <span className="text-accent font-bold mr-2">3.</span>
                <p>Receive your content package within 3-5 business days.</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="https://selfcaststudios.com"
                className="inline-block bg-primary text-white font-montserrat font-semibold px-8 py-4 rounded-lg hover:bg-gray-800 transition"
              >
                Return to Homepage
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white py-8 px-6 mt-auto">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm">© {new Date().getFullYear()} Self Cast Studios. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
