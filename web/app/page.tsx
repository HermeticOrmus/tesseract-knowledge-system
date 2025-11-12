import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Zap, Shield, TrendingUp, RefreshCw, BookOpen, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Tesseract</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/pricing">
              <Button variant="ghost">Pricing</Button>
            </Link>
            <Link href="/knowledge-base">
              <Button variant="ghost">Knowledge Base</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline">Sign In</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              🚀 Launch Special: 50% off first month
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Master Claude Code
            <span className="block text-primary mt-2">On Autopilot</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Your self-updating knowledge system that fetches the latest Claude Code updates,
            best practices, and innovations—so you stay ahead without the overwhelm.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button size="lg" className="text-lg px-8">
                Start Learning Now
              </Button>
            </Link>
            <Link href="/knowledge-base">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Explore Knowledge Base
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Stop Drowning in Updates</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Information overload is killing productivity. Tesseract filters the noise and delivers only what matters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <RefreshCw className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Auto-Fetch Updates</CardTitle>
                <CardDescription>
                  Automatically downloads the latest Claude Code docs, features, and best practices
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Smart Filtering</CardTitle>
                <CardDescription>
                  Intelligent curation that shows only what's relevant to your workflow
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Guided Implementation</CardTitle>
                <CardDescription>
                  Step-by-step guides to apply improvements to your setup instantly
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Track Progress</CardTitle>
                <CardDescription>
                  Monitor what you've adopted and measure your workflow improvements
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Living Knowledge Base</CardTitle>
                <CardDescription>
                  Searchable, organized documentation that grows and evolves with Claude Code
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Sparkles className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Community Insights</CardTitle>
                <CardDescription>
                  Discover hidden gems from expert users and community discussions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Start Free, Scale When Ready</h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your learning style
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Tier */}
            <Card>
              <CardHeader>
                <CardTitle>Learner</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    10 document views/month
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Basic best practices
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Monthly digest emails
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Community access
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/pricing" className="w-full">
                  <Button variant="outline" className="w-full">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Pro Tier */}
            <Card className="border-primary shadow-lg scale-105">
              <CardHeader>
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold w-fit mb-2">
                  MOST POPULAR
                </div>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For serious Claude Code users</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Unlimited access
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Auto-sync updates
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Custom slash commands
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Export capabilities
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Email support
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/pricing" className="w-full">
                  <Button className="w-full">Start Pro Trial</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Team Tier */}
            <Card>
              <CardHeader>
                <CardTitle>Team</CardTitle>
                <CardDescription>For teams and power users</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Everything in Pro
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Up to 5 team members
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Shared knowledge base
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    API access
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/pricing" className="w-full">
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Stop Chasing Updates. Start Mastering Claude Code.
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join developers who are staying ahead with automated knowledge curation
          </p>
          <Link href="/pricing">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-bold">Tesseract</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Knowledge in service of wisdom. Built with intention, curated with care.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/knowledge-base">Knowledge Base</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/docs">Documentation</Link></li>
                <li><Link href="/philosophy">Philosophy</Link></li>
                <li><Link href="/changelog">Changelog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>Built by Ormus, a student of Hermetica. © 2025 Tesseract Knowledge System. MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
