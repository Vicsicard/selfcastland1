import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import DashboardMockup from "../components/DashboardMockup";
import ContentExamples from "../components/ContentExamples";
import SimpleHero from "../components/SimpleHero";
import { useAnalytics } from "../utils/analytics";

export default function GetStarted() {
  // Get analytics functions
  const { trackCheckout } = useAnalytics();
  
  // Function to track button clicks
  const trackCheckoutClick = () => {
    trackCheckout(99);
  };

  return (
    <>
      <Head>
        <title>Self Cast Studios | Get Started for $99</title>
        <meta
          name="description"
          content="Turn a 20-minute call into your month of content. Bio, 4 blogs, and 4 social posts for $99."
        />
        <meta property="og:title" content="Self Cast Studios | Get Started for $99" />
        <meta property="og:description" content="Turn a 20-minute call into your month of content. Bio, 4 blogs, and 4 social posts for $99." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://selfcaststudios.com/get-started" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-secondary text-primary font-sans">
        {/* Header */}
        <header className="py-4 px-6 bg-white shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="font-montserrat font-bold text-xl">Self Cast Studios</div>
            <nav>
              <a href="https://selfcaststudios.com" className="text-sm font-medium hover:text-accent transition">Main Site</a>
            </nav>
          </div>
        </header>

        {/* Enhanced Hero */}
        <SimpleHero onCtaClick={trackCheckoutClick} />

        {/* Trust / Social Proof */}
        <section className="bg-white py-12 px-6 text-center">
          <div className="max-w-6xl mx-auto">
            <p className="font-montserrat text-xl md:text-2xl font-semibold">
              Trusted by busy professionals, entrepreneurs, and creators
            </p>
            <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-secondary p-6 rounded-lg shadow">
                <blockquote className="italic text-dark">
                  "I never had time to blog. After a quick call, I had 4 posts ready to go. Game changer."
                </blockquote>
                <p className="mt-4 font-semibold">— Sarah Johnson, Marketing Consultant</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow">
                <blockquote className="italic text-dark">
                  "The dashboard makes it easy to keep my site fresh without hiring a web guy."
                </blockquote>
                <p className="mt-4 font-semibold">— Michael Chen, Financial Advisor</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="font-montserrat font-semibold text-3xl md:text-4xl text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-montserrat font-bold text-2xl">1</span>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">Talk for 20 Minutes</h3>
              <p className="text-dark">We guide the conversation and capture your authentic voice and expertise.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-montserrat font-bold text-2xl">2</span>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">We Create Your Package</h3>
              <p className="text-dark">Bio/About + 4 Blogs + 4 Social Posts written in your authentic voice.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-montserrat font-bold text-2xl">3</span>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">Edit & Publish</h3>
              <p className="text-dark">Use your dashboard to review, tweak, and share your content.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="https://buy.stripe.com/eVq28r1LKdkBcSM70ycwg14"
              onClick={trackCheckoutClick}
              className="btn-primary"
              data-testid="how-it-works-cta"
            >
              Start for $99
            </a>
          </div>
        </section>

        {/* Deliverables */}
        <section className="bg-white py-20 px-6 text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat font-semibold text-3xl md:text-4xl mb-12">What You Get</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-secondary p-8 rounded-lg shadow-md text-left">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">✅</span>
                  <div>
                    <h3 className="font-montserrat font-semibold text-xl mb-2">Fresh Bio/About Page Copy</h3>
                    <p className="text-dark">Professional, engaging copy that captures your unique value proposition.</p>
                  </div>
                </div>
              </div>
              <div className="bg-secondary p-8 rounded-lg shadow-md text-left">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">✅</span>
                  <div>
                    <h3 className="font-montserrat font-semibold text-xl mb-2">4 Blog Posts (SEO-ready)</h3>
                    <p className="text-dark">Professionally written, keyword-optimized content that showcases your expertise.</p>
                  </div>
                </div>
              </div>
              <div className="bg-secondary p-8 rounded-lg shadow-md text-left">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">✅</span>
                  <div>
                    <h3 className="font-montserrat font-semibold text-xl mb-2">4 Social Media Posts</h3>
                    <p className="text-dark">Engaging posts for LinkedIn, Twitter/X, Facebook, and Instagram.</p>
                  </div>
                </div>
              </div>
              <div className="bg-secondary p-8 rounded-lg shadow-md text-left">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">✅</span>
                  <div>
                    <h3 className="font-montserrat font-semibold text-xl mb-2">Access to Editing Dashboard</h3>
                    <p className="text-dark">User-friendly platform to review, edit, and publish your content.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 max-w-4xl mx-auto">
              <h3 className="font-montserrat font-semibold text-xl mb-6 text-center">Examples of What You'll Get</h3>
              <ContentExamples />
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="font-montserrat font-semibold text-3xl md:text-4xl text-center mb-12">
            Why This Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat font-semibold text-xl mb-3">Saves Time</h3>
              <p className="text-dark">Turn a 20-minute call into a month's worth of content. No more staring at blank pages.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat font-semibold text-xl mb-3">Authentic Voice</h3>
              <p className="text-dark">Content that sounds like you wrote it—because it's based on your actual words.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat font-semibold text-xl mb-3">Stress-Free Content</h3>
              <p className="text-dark">No long-term contracts. Start with $99 and see the results before deciding more.</p>
            </div>
          </div>
        </section>

        {/* Pricing Callout */}
        <section className="bg-white py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto bg-secondary p-8 md:p-12 rounded-xl shadow-lg">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Only $99</h2>
            <p className="text-xl mb-8">No contracts, cancel anytime.</p>
            <a
              href="https://buy.stripe.com/eVq28r1LKdkBcSM70ycwg14"
              onClick={trackCheckoutClick}
              className="btn-primary text-lg"
              data-testid="pricing-cta"
            >
              Start for $99
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="font-montserrat font-semibold text-3xl md:text-4xl text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-montserrat font-semibold text-xl cursor-pointer">
                Do I have to get on video?
              </summary>
              <p className="mt-4 text-dark">
                No — just a phone call. We find talking is more natural and leads to better content than staring at a camera.
              </p>
            </details>
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-montserrat font-semibold text-xl cursor-pointer">
                Do I own the content?
              </summary>
              <p className="mt-4 text-dark">
                Yes, 100%. Everything we create for you is yours to use however you want, forever.
              </p>
            </details>
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-montserrat font-semibold text-xl cursor-pointer">
                Can I post it to my own site?
              </summary>
              <p className="mt-4 text-dark">
                Absolutely. You can copy/paste to any platform or use our dashboard to publish directly.
              </p>
            </details>
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-montserrat font-semibold text-xl cursor-pointer">
                Can I add my own content?
              </summary>
              <p className="mt-4 text-dark">
                Yes — edit and upload anytime. The dashboard is yours to use however you need.
              </p>
            </details>
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-montserrat font-semibold text-xl cursor-pointer">
                Do I need tech skills?
              </summary>
              <p className="mt-4 text-dark">
                Nope. Everything is designed for one-click edits. If you can use email, you can use our dashboard.
              </p>
            </details>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-white text-center py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
              Ready to stop staring at blank pages?
            </h2>
            <p className="mb-8 text-lg md:text-xl">Join Self Cast Studios today and turn a 20-minute call into a month of content.</p>
            <a
              href="https://buy.stripe.com/eVq28r1LKdkBcSM70ycwg14"
              onClick={trackCheckoutClick}
              className="btn-primary text-lg"
              data-testid="final-cta"
            >
              Start for $99
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white py-8 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm">© {new Date().getFullYear()} Self Cast Studios. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
