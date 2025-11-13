import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  // If not logged in, redirect to login page
  const session = await auth.api.getSession({
    headers: await headers()
  });
  if (!session) {
    return redirect('/login');
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
          Welcome to Your
          <span className="text-primary"> Dashboard</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Hello, {session.user?.email}! You&apos;re successfully logged in to your Next.js boilerplate application.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/profile">View Profile</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">🎨 Modern Design</h3>
          <p className="text-muted-foreground">
            Built with Tailwind CSS and shadcn/ui components for a beautiful, responsive design.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">🔐 Authentication</h3>
          <p className="text-muted-foreground">
            Secure authentication system with Better Auth and Prisma database integration.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">⚡ Performance</h3>
          <p className="text-muted-foreground">
            Next.js App Router with TypeScript for optimal performance and developer experience.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button asChild variant="outline" className="h-auto py-4 flex-col space-y-2">
            <Link href="/settings">
              <span className="text-2xl">⚙️</span>
              <span>Settings</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-4 flex-col space-y-2">
            <Link href="/analytics">
              <span className="text-2xl">📊</span>
              <span>Analytics</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-4 flex-col space-y-2">
            <Link href="/docs">
              <span className="text-2xl">📚</span>
              <span>Documentation</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-4 flex-col space-y-2">
            <Link href="/support">
              <span className="text-2xl">💬</span>
              <span>Support</span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
