import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function GettingStartedPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Getting Started</h1>
        <p className="text-lg text-muted-foreground">Learn the basics of using MeloSpot Icons in your projects.</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Introduction</h2>
        <p>
          MeloSpot Icons is a comprehensive icon library designed to work with multiple frameworks and platforms. Our
          icons are designed with consistency, accessibility, and flexibility in mind.
        </p>
        <p>
          Whether you're building a React, Vue, Svelte, or Angular application, MeloSpot Icons provides optimized
          packages for your specific framework.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Features</h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Framework-specific packages for optimal integration</li>
          <li>Consistent design language across all icons</li>
          <li>Fully customizable (size, color, stroke width)</li>
          <li>Tree-shakeable for optimal bundle size</li>
          <li>TypeScript support</li>
          <li>Accessible by default</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Available Packages</h2>
        <p>MeloSpot Icons is available for the following frameworks and platforms:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <Link href="/docs/react" className="text-primary hover:underline">
              React (@melospot/icons-react)
            </Link>
          </li>
          <li>
            <Link href="/docs/vue" className="text-primary hover:underline">
              Vue (@melospot/icons-vue)
            </Link>
          </li>
          <li>
            <Link href="/docs/svelte" className="text-primary hover:underline">
              Svelte (@melospot/icons-svelte)
            </Link>
          </li>
          <li>
            <Link href="/docs/angular" className="text-primary hover:underline">
              Angular (@melospot/icons-angular)
            </Link>
          </li>
          <li>
            <Link href="/docs/web-components" className="text-primary hover:underline">
              Web Components (@melospot/icons-webcomponents)
            </Link>
          </li>
          <li>
            <Link href="/docs/figma" className="text-primary hover:underline">
              Figma Plugin (@melospot/icons-figma)
            </Link>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Quick Start</h2>
        <p>Choose your framework below to get started with MeloSpot Icons:</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/docs/react">
            <Button variant="outline" className="w-full justify-between">
              React
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs/vue">
            <Button variant="outline" className="w-full justify-between">
              Vue
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs/svelte">
            <Button variant="outline" className="w-full justify-between">
              Svelte
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
