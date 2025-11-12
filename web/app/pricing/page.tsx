import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Sparkles, ArrowLeft } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Tesseract</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline">Sign In</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Pricing Header */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            🎉 Launch Special: 50% off first month with code LAUNCH50
          </div>
          <h1 className="text-5xl font-bold mb-4">Choose Your Learning Path</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade anytime. All plans include our core knowledge curation system.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {/* Free Tier */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">Learner</CardTitle>
              <CardDescription>Perfect for exploring Claude Code</CardDescription>
              <div className="mt-6">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-muted-foreground text-lg">/month</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>10 document views</strong> per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Access to <strong>basic best practices</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Monthly digest</strong> emails with top updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Community forum access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Basic search functionality</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard" className="w-full">
                <Button variant="outline" className="w-full" size="lg">
                  Get Started Free
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Pro Tier */}
          <Card className="flex flex-col border-primary shadow-2xl scale-105 relative">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Pro</CardTitle>
              <CardDescription>For serious Claude Code practitioners</CardDescription>
              <div className="mt-6">
                <span className="text-5xl font-bold">$19</span>
                <span className="text-muted-foreground text-lg">/month</span>
                <div className="text-sm text-muted-foreground mt-2">
                  or $190/year (save $38)
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Unlimited</strong> knowledge base access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Auto-sync</strong> with latest Claude Code updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Custom slash commands</strong> library</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Advanced search</strong> with filters</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Export</strong> to markdown, PDF, Notion</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Email support</strong> (48hr response)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Early access</strong> to new features</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Everything in Learner</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard" className="w-full">
                <Button className="w-full" size="lg">
                  Start 14-Day Free Trial
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Team Tier */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">Team</CardTitle>
              <CardDescription>For teams and power users</CardDescription>
              <div className="mt-6">
                <span className="text-5xl font-bold">$49</span>
                <span className="text-muted-foreground text-lg">/month</span>
                <div className="text-sm text-muted-foreground mt-2">
                  or $490/year (save $98)
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Up to 5 team members</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Shared knowledge base</strong> with annotations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Team collaboration</strong> features</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Priority support</strong> (24hr response)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>API access</strong> for integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Custom onboarding</strong> session</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Usage analytics</strong> dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Everything in Pro</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard" className="w-full">
                <Button variant="outline" className="w-full" size="lg">
                  Contact Sales
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">How does the free trial work?</h3>
              <p className="text-muted-foreground">
                Pro plan includes a 14-day free trial. No credit card required to start.
                You can cancel anytime before the trial ends.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I upgrade or downgrade anytime?</h3>
              <p className="text-muted-foreground">
                Yes! You can change your plan at any time. Upgrades are prorated, and you'll only pay
                the difference for the remainder of your billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards (Visa, Mastercard, Amex) via Stripe.
                Annual plans can also be paid via invoice.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">How often is the knowledge base updated?</h3>
              <p className="text-muted-foreground">
                Pro and Team plans sync automatically daily. Free tier receives monthly updates.
                Breaking changes and critical updates are pushed to all tiers immediately.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-muted-foreground">
                Yes, we offer a 30-day money-back guarantee. If you're not satisfied,
                contact support for a full refund, no questions asked.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I use this offline?</h3>
              <p className="text-muted-foreground">
                Pro and Team plans support exporting the knowledge base for offline use.
                You can export to markdown, PDF, or sync to your Notion workspace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Master Claude Code?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of developers staying ahead of the curve
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="text-lg px-8">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Tesseract Knowledge System. Built with intention, curated with care.</p>
        </div>
      </footer>
    </div>
  )
}
