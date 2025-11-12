# Tesseract Web Platform 🚀

The web interface for the Tesseract Knowledge System - your self-updating Claude Code mastery platform.

## 🎯 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Clerk account (free tier available)
- Stripe account (test mode is fine)
- Vercel account (optional, for deployment)

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

   Fill in your credentials (see setup guide below)

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Setup Guide

### 1. Clerk Authentication Setup

1. Go to [https://dashboard.clerk.com](https://dashboard.clerk.com)
2. Create a new application
3. Copy your API keys to `.env.local`:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
4. Configure redirect URLs in Clerk dashboard:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - After sign-in: `/dashboard`
   - After sign-up: `/dashboard`

### 2. Stripe Payment Setup

1. Go to [https://dashboard.stripe.com](https://dashboard.stripe.com)
2. Get your API keys (use test mode for development):
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

3. **Create Products & Prices:**

   In Stripe Dashboard → Products, create:

   **Pro Plan:**
   - Monthly: $19/month (copy Price ID)
   - Yearly: $190/year (copy Price ID)

   **Team Plan:**
   - Monthly: $49/month (copy Price ID)
   - Yearly: $490/year (copy Price ID)

4. **Set up Webhook (for production):**
   - Stripe Dashboard → Developers → Webhooks
   - Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
   - Select events:
     - `checkout.session.completed`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
   - Copy webhook signing secret to `STRIPE_WEBHOOK_SECRET`

### 3. Database Setup (Optional - for full features)

For user data and subscription management:

1. Go to [https://supabase.com](https://supabase.com)
2. Create a new project
3. Copy credentials to `.env.local`
4. Run SQL schema (see `database/schema.sql`)

## 📦 Deployment to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/tesseract-knowledge-system/tree/main/web)

### Manual Deployment

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Set environment variables:**
   ```bash
   vercel env add CLERK_SECRET_KEY
   vercel env add STRIPE_SECRET_KEY
   # ... add all other env vars
   ```

4. **Deploy to production:**
   ```bash
   vercel --prod
   ```

### Environment Variables Checklist

Make sure these are set in Vercel:

- ✅ `NEXT_PUBLIC_APP_URL` (your domain)
- ✅ `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- ✅ `CLERK_SECRET_KEY`
- ✅ `STRIPE_SECRET_KEY`
- ✅ `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- ✅ `STRIPE_WEBHOOK_SECRET`
- ✅ All `NEXT_PUBLIC_STRIPE_*_PRICE_ID` variables

## 🎨 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Authentication:** Clerk
- **Payments:** Stripe
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **Language:** TypeScript

## 📁 Project Structure

```
web/
├── app/                      # Next.js App Router pages
│   ├── api/                  # API routes
│   │   ├── create-checkout-session/
│   │   └── webhooks/stripe/
│   ├── dashboard/            # Protected dashboard
│   ├── knowledge-base/       # Public knowledge base
│   ├── pricing/              # Pricing page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Landing page
│   └── globals.css           # Global styles
├── components/               # React components
│   ├── ui/                   # shadcn/ui components
│   └── theme-provider.tsx
├── lib/                      # Utilities
│   └── utils.ts
└── middleware.ts             # Clerk auth middleware
```

## 💰 Revenue Features

### Implemented:
- ✅ Three-tier pricing (Free, Pro, Team)
- ✅ Stripe Checkout integration
- ✅ Subscription management webhooks
- ✅ Protected dashboard routes
- ✅ Landing page with pricing
- ✅ Knowledge base preview

### Coming Soon:
- 🔄 Usage limits enforcement (Free: 10 views/month)
- 🔄 Subscription status in dashboard
- 🔄 Customer portal for subscription management
- 🔄 Team management for Team plan
- 🔄 Export functionality (Pro/Team)
- 🔄 Analytics dashboard

## 🚀 Launch Checklist

Before going live:

### Legal & Business
- [ ] Add Privacy Policy page
- [ ] Add Terms of Service page
- [ ] Set up business Stripe account (move from test mode)
- [ ] Configure tax collection in Stripe

### Technical
- [ ] Test full checkout flow
- [ ] Verify webhook handling
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Configure analytics (Plausible, PostHog, etc.)
- [ ] Set up domain and SSL
- [ ] Test email notifications

### Marketing
- [ ] Create demo video
- [ ] Prepare launch announcement
- [ ] Set up social media profiles
- [ ] Create initial blog content
- [ ] Prepare FAQ responses

## 📊 Monitoring & Analytics

### Recommended Tools

1. **Error Tracking:** Sentry
2. **Analytics:** Plausible or PostHog
3. **Uptime:** Uptime Robot
4. **Performance:** Vercel Analytics

## 🤝 Support

For issues or questions:
- Email: ormus@hermetic.dev
- GitHub Issues: [Your Repo URL]

## 📄 License

MIT License - see LICENSE file for details

---

**Built with intention. Curated with care. In service of genuine wisdom.**
