import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, BookOpen, TrendingUp, Settings, LogOut } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

export default async function DashboardPage() {
  const { userId } = await auth()
  const user = await currentUser()

  if (!userId) {
    redirect('/sign-in')
  }

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
            <Link href="/knowledge-base">
              <Button variant="ghost">Knowledge Base</Button>
            </Link>
            <Link href="/dashboard/settings">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <section className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">
              Welcome back, {user?.firstName || 'there'}!
            </h1>
            <p className="text-xl text-muted-foreground">
              Here's what's new in your Claude Code knowledge base
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Current Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Free</div>
                <p className="text-xs text-muted-foreground mt-1">
                  5 of 10 views remaining this month
                </p>
                <Link href="/pricing">
                  <Button className="mt-4" size="sm">Upgrade to Pro</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Articles Read
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground mt-1">
                  +3 this week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Practices Adopted
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Last adoption: 2 days ago
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Updates */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Latest Updates</h2>
              <Link href="/knowledge-base">
                <Button variant="outline">View All</Button>
              </Link>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>New MCP Servers Available</CardTitle>
                      <CardDescription>
                        5 new Model Context Protocol servers added to the registry
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                      2 days ago
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link href="/knowledge-base/updates/mcp-servers">
                    <Button variant="ghost" size="sm">Read More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Claude Code 2.0 Release Notes</CardTitle>
                      <CardDescription>
                        Major update with improved agent capabilities
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                      5 days ago
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link href="/knowledge-base/updates/release-2-0">
                    <Button variant="ghost" size="sm">Read More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recommended */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Recommended for You</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Advanced Agent Patterns</CardTitle>
                  <CardDescription>
                    Learn how to create specialized agents for complex workflows
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/knowledge-base/best-practices/agents">
                    <Button>Start Learning</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Performance Optimization</CardTitle>
                  <CardDescription>
                    Speed up your Claude Code workflow with these proven techniques
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/knowledge-base/best-practices/performance">
                    <Button>Start Learning</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Tesseract Knowledge System</p>
        </div>
      </footer>
    </div>
  )
}
