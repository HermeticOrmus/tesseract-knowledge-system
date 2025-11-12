# 🚀 Deployment Guide - Tesseract Web Platform

Complete guide to deploy your Tesseract Knowledge System website and start generating revenue.

## 📋 Pre-Deployment Checklist

### Accounts Needed (All Free Tiers Available)

- [ ] GitHub account (for code hosting)
- [ ] Vercel account (for hosting - [vercel.com](https://vercel.com))
- [ ] Clerk account (for auth - [clerk.com](https://clerk.com))
- [ ] Stripe account (for payments - [stripe.com](https://stripe.com))
- [ ] Supabase account (for database - [supabase.com](https://supabase.com))

---

## 🎯 Step-by-Step Deployment

### Step 1: Set Up Clerk Authentication (10 minutes)

1. **Create Clerk Application:**
   - Go to [https://dashboard.clerk.com](https://dashboard.clerk.com)
   - Click "Add application"
   - Name: "Tesseract Knowledge System"
   - Enable: Email, Google, GitHub (your choice)

2. **Get API Keys:**
   - Copy `Publishable key` → `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - Copy `Secret key` → `CLERK_SECRET_KEY`

3. **Configure Paths:**
   - Go to "Paths" in Clerk dashboard
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - After sign in: `/dashboard`
   - After sign up: `/dashboard`

### Step 2: Set Up Stripe Payments (15 minutes)

1. **Create Stripe Account:**
   - Go to [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register)
   - Complete business details
   - **Start in TEST MODE** (toggle in top right)

2. **Get API Keys:**
   - Go to Developers → API Keys
   - Copy `Publishable key` → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - Copy `Secret key` → `STRIPE_SECRET_KEY`

3. **Create Products:**

   Go to Products → Add Product, create these:

   **Product 1: Tesseract Pro**
   - Name: "Tesseract Pro"
   - Description: "Unlimited access to Claude Code knowledge base"
   - Pricing:
     - Price 1: $19/month recurring
       - Save Price ID → `NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID`
     - Price 2: $190/year recurring
       - Save Price ID → `NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID`

   **Product 2: Tesseract Team**
   - Name: "Tesseract Team"
   - Description: "For teams up to 5 members"
   - Pricing:
     - Price 1: $49/month recurring
       - Save Price ID → `NEXT_PUBLIC_STRIPE_TEAM_MONTHLY_PRICE_ID`
     - Price 2: $490/year recurring
       - Save Price ID → `NEXT_PUBLIC_STRIPE_TEAM_YEARLY_PRICE_ID`

4. **Enable Test Mode Payment:**
   - Stripe test mode allows testing without real money
   - Use test card: `4242 4242 4242 4242`
   - Any future expiry date, any CVC

### Step 3: Set Up Supabase Database (10 minutes)

1. **Create Project:**
   - Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
   - "New Project"
   - Name: "tesseract-knowledge"
   - Database Password: (save this securely)
   - Region: Choose closest to your users

2. **Get API Keys:**
   - Go to Settings → API
   - Copy `URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - Copy `anon/public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Copy `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`
   - Copy `Connection string` → `DATABASE_URL`

3. **Run Database Schema:**
   - Go to SQL Editor in Supabase dashboard
   - Open `database/schema.sql` from this repo
   - Copy and paste entire contents
   - Click "Run"
   - Verify: Tables should appear in Table Editor

### Step 4: Deploy to Vercel (5 minutes)

1. **Push Code to GitHub:**
   ```bash
   cd web
   git init
   git add .
   git commit -m "Initial Tesseract web platform"
   git branch -M main
   git remote add origin https://github.com/yourusername/tesseract-web.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [https://vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./web` (if repo root contains multiple folders)

3. **Add Environment Variables:**

   In Vercel project settings → Environment Variables, add ALL of these:

   ```env
   # App
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app

   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

   # Stripe
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID=price_...
   NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID=price_...
   NEXT_PUBLIC_STRIPE_TEAM_MONTHLY_PRICE_ID=price_...
   NEXT_PUBLIC_STRIPE_TEAM_YEARLY_PRICE_ID=price_...

   # Database
   DATABASE_URL=postgresql://...
   NEXT_PUBLIC_SUPABASE_URL=https://...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   SUPABASE_SERVICE_ROLE_KEY=...
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

### Step 5: Configure Stripe Webhook (10 minutes)

**Important:** Only needed for production. Skip for testing.

1. **Get Vercel URL:**
   - Copy your Vercel deployment URL
   - Example: `https://tesseract-web.vercel.app`

2. **Create Webhook:**
   - Stripe Dashboard → Developers → Webhooks
   - Click "Add endpoint"
   - Endpoint URL: `https://your-domain.vercel.app/api/webhooks/stripe`
   - Description: "Tesseract Subscription Events"

3. **Select Events:**
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`

4. **Get Signing Secret:**
   - Click on your new webhook
   - "Signing secret" → Click to reveal
   - Copy → `STRIPE_WEBHOOK_SECRET`
   - Add this to Vercel environment variables
   - Redeploy: Vercel → Deployments → ... → Redeploy

### Step 6: Update Clerk with Production Domain

1. **Add Domain to Clerk:**
   - Clerk Dashboard → your app
   - "Domains" → Add your Vercel domain
   - Add both:
     - `https://tesseract-web.vercel.app`
     - `https://yourdomain.com` (if using custom domain)

2. **Update Allowed Origins:**
   - Settings → Advanced → Allowed origins
   - Add your production URL

---

## ✅ Testing Your Deployment

### Test Flow:

1. **Visit your site:**
   ```
   https://your-domain.vercel.app
   ```

2. **Test sign-up:**
   - Click "Get Started" or "Sign In"
   - Create account with test email
   - Should redirect to `/dashboard`

3. **Test subscription:**
   - Go to Pricing page
   - Click "Start Pro Trial"
   - Use test card: `4242 4242 4242 4242`
   - Check Stripe Dashboard → Customers (should see new customer)

4. **Test webhook:**
   - Complete a test payment
   - Check Vercel → Functions → Logs
   - Should see webhook event logged

---

## 🔧 Custom Domain (Optional)

### Add Your Own Domain:

1. **Purchase domain:**
   - Namecheap, GoDaddy, Google Domains, etc.

2. **Add to Vercel:**
   - Vercel → Settings → Domains
   - Add your domain
   - Follow DNS instructions

3. **Update environment variables:**
   - Change `NEXT_PUBLIC_APP_URL` to your domain
   - Update Clerk allowed origins
   - Update Stripe webhook URL

---

## 💸 Going Live (Moving to Real Payments)

### When ready to accept real money:

1. **Complete Stripe Onboarding:**
   - Stripe Dashboard → Complete business verification
   - Add bank account for payouts

2. **Switch to Live Mode:**
   - Toggle from "Test mode" to "Live mode" in Stripe
   - Get new API keys (live keys start with `pk_live_` and `sk_live_`)
   - Update Vercel environment variables with LIVE keys

3. **Recreate Products in Live Mode:**
   - Products created in test mode don't carry over
   - Create same products/prices in live mode
   - Update price IDs in Vercel

4. **Update Webhook:**
   - Create new webhook in live mode
   - Same URL and events
   - Update `STRIPE_WEBHOOK_SECRET` with live secret

5. **Test with Real Card:**
   - Make a small purchase yourself
   - Verify it appears in Stripe dashboard
   - Cancel immediately if needed

---

## 📊 Monitoring & Maintenance

### Essential Monitoring:

1. **Vercel Analytics:**
   - Vercel Dashboard → Analytics (free tier)
   - Monitor traffic and performance

2. **Stripe Dashboard:**
   - Monitor daily for new subscriptions
   - Check for failed payments
   - Review MRR (Monthly Recurring Revenue)

3. **Supabase Logs:**
   - Monitor database performance
   - Check for errors

### Weekly Tasks:
- Check Stripe for new subscribers
- Review failed payments
- Monitor Vercel function logs
- Check user feedback/support emails

---

## 🐛 Troubleshooting

### Common Issues:

**Build fails on Vercel:**
- Check build logs
- Ensure all dependencies in package.json
- Verify TypeScript has no errors locally

**Clerk authentication not working:**
- Verify all Clerk env vars are set
- Check domain is added in Clerk dashboard
- Clear browser cache and cookies

**Stripe checkout fails:**
- Verify Stripe keys are correct
- Check you're in test mode for testing
- Ensure price IDs are correct

**Webhook not receiving events:**
- Check webhook URL is correct
- Verify endpoint is deployed
- Check Stripe webhook logs for errors

---

## 🎉 Launch Checklist

Before announcing your launch:

### Legal & Content:
- [ ] Privacy Policy page added
- [ ] Terms of Service page added
- [ ] About page
- [ ] Contact/Support email set up

### Technical:
- [ ] All tests passing
- [ ] Stripe in live mode
- [ ] Webhooks working
- [ ] Custom domain configured
- [ ] SSL certificate active

### Marketing:
- [ ] Social media accounts created
- [ ] Launch announcement ready
- [ ] Demo video recorded
- [ ] First blog post written

---

## 📈 Next Steps After Launch

### Week 1:
- Monitor for bugs and user issues
- Respond to all support emails within 24h
- Post on Reddit/HN/Twitter
- Email your network

### Week 2-4:
- Write 2-3 blog posts
- Create video tutorials
- Engage with users
- Implement feedback

### Month 2+:
- Add requested features
- Optimize conversion funnel
- Create affiliate program
- Scale marketing

---

## 💪 You're Ready!

You now have everything needed to deploy and monetize your Tesseract Knowledge System.

**Questions?** Check README.md or create an issue on GitHub.

**Good luck with your launch! 🚀**

---

*Built with intention. Curated with care. In service of genuine wisdom.*
