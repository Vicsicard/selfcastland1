# Self Cast Studios Landing Page

A dedicated landing page for Self Cast Studios that drives conversions from Google Ads traffic. The page presents the $99 offer, provides trust and clarity, and integrates with Google Tag Manager (GTM) for conversion tracking.

## Features

- Mobile-first responsive design
- Google Tag Manager integration for conversion tracking
- Stripe payment link integration
- SEO-optimized content
- Modern UI with TailwindCSS

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Vicsicard/selfcastland1.git
cd selfcastland1
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

### Google Tag Manager

1. The GTM container ID (GTM-TRCTMJXD) is already configured in `_app.js` and `_document.js`.
2. Ensure the following events are set up in your GTM container:
   - `begin_checkout` (click on "Start for $99" button)
   - `purchase` (page view of /thanks after Stripe redirect)

### Stripe Payment Link

1. The Stripe payment link (https://buy.stripe.com/eVq28r1LKdkBcSM70ycwg14) is already configured in the landing page.
2. Ensure your Stripe payment link redirects to `/thanks` after successful payment.

## Deployment

This is a Next.js project that can be deployed on Vercel or Cloudflare Pages:

```bash
npm run build
# or
yarn build
```

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Google Tag Manager](https://tagmanager.google.com/) - Tag management system
- [Stripe](https://stripe.com/) - Payment processing platform
