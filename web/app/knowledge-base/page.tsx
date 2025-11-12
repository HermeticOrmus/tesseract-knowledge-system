import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, ArrowLeft, BookOpen, TrendingUp, Zap, Users } from 'lucide-react'

export default function KnowledgeBasePage() {
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
            <Link href="/pricing">
              <Button variant="ghost">Pricing</Button>
            </Link>
            <Link href="/dashboard">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Living Knowledge Base</h1>
          <p className="text-xl text-muted-foreground">
            Continuously updated documentation, best practices, and insights for Claude Code mastery
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Link href="/knowledge-base/best-practices">
            <Card className="hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Best Practices</CardTitle>
                <CardDescription>
                  Curated workflows and optimization strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">12 articles</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/knowledge-base/updates">
            <Card className="hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Latest Updates</CardTitle>
                <CardDescription>
                  Recent Claude Code features and releases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">8 articles</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/knowledge-base/examples">
            <Card className="hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Examples</CardTitle>
                <CardDescription>
                  Real-world usage patterns and integrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">15 articles</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/knowledge-base/community">
            <Card className="hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  Insights and tips from expert users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">20 articles</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Recent Articles Preview */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">
                      Claude Code Best Practices 2025
                    </CardTitle>
                    <CardDescription>
                      Comprehensive guide to optimizing your Claude Code workflow
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">Oct 12, 2025</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                    Best Practices
                  </span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                    Workflow
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">
                      MCP Protocol Overview
                    </CardTitle>
                    <CardDescription>
                      Understanding the Model Context Protocol for advanced integrations
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">Oct 12, 2025</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                    Integration
                  </span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                    Advanced
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">
                      Getting Started with Custom Agents
                    </CardTitle>
                    <CardDescription>
                      Build specialized agents for your unique workflows
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">Oct 10, 2025</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                    Tutorial
                  </span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                    Agents
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">
                Unlock the Full Knowledge Base
              </CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Get unlimited access to all articles, auto-sync updates, and exclusive content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/pricing">
                <Button size="lg" variant="secondary">
                  Upgrade to Pro
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Tesseract Knowledge System. Built with intention, curated with care.</p>
        </div>
      </footer>
    </div>
  )
}
