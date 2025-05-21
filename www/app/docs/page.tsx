import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="text-lg text-muted-foreground">Learn how to use MeloSpot Icons in your projects.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Learn the basics of using MeloSpot Icons</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Installation guides, basic usage, and core concepts.</p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/getting-started" className="w-full">
              <Button variant="outline" className="w-full">
                Read Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Framework Guides</CardTitle>
            <CardDescription>Framework-specific documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Detailed guides for React, Vue, Svelte, and more.</p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/react" className="w-full">
              <Button variant="outline" className="w-full">
                View Guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Reference</CardTitle>
            <CardDescription>Detailed API documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Complete API reference for all packages.</p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/api" className="w-full">
              <Button variant="outline" className="w-full">
                View Reference
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Popular Guides</h2>
        <ul className="grid gap-2 md:grid-cols-2">
          <li>
            <Link
              href="/docs/react"
              className="flex items-center p-3 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <div className="flex-1">React Integration Guide</div>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </li>
          <li>
            <Link
              href="/docs/vue"
              className="flex items-center p-3 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <div className="flex-1">Vue.js Integration Guide</div>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </li>
          <li>
            <Link
              href="/docs/customization"
              className="flex items-center p-3 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <div className="flex-1">Customizing Icons</div>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </li>
          <li>
            <Link
              href="/docs/contributing"
              className="flex items-center p-3 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <div className="flex-1">Contributing to MeloSpot Icons</div>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
