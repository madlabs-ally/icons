import Link from "next/link"
import { ArrowRight, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import { IconBrowser } from "@/components/icon-browser"
import { FrameworkCard } from "@/components/framework-card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">MeloSpot Icons</h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Beautiful, consistent, and accessible open source icons for your next project. Available for
                    multiple frameworks including React, Vue, Svelte, and more.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#packages">
                    <Button className="px-8">
                      Browse Packages
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/docs">
                    <Button variant="outline" className="px-8">
                      Documentation
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-700 rounded-md shadow-sm"
                    >
                      <div className="w-6 h-6 bg-gray-300 dark:bg-gray-500 rounded-sm" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  MeloSpot Icons is designed with developers and designers in mind.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Framework Agnostic</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Use MeloSpot Icons with React, Vue, Svelte, or any other framework of your choice.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
                  <svg
                    className="h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2H2v10h10V2z" />
                    <path d="M12 12H2v10h10V12z" />
                    <path d="M22 2h-10v20h10V2z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Consistent Design</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    All icons follow consistent design principles for a cohesive look and feel.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
                  <svg
                    className="h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Easy Integration</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Simple installation and usage with detailed documentation for each framework.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Icon Browser Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Browse Icons</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore our collection of beautiful, hand-crafted icons.
                </p>
              </div>
            </div>
            <div className="mx-auto py-8">
              <IconBrowser />
            </div>
          </div>
        </section>

        {/* Framework Packages Section */}
        <section id="packages" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Framework Packages</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the perfect package for your framework.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <FrameworkCard
                title="React"
                description="Optimized for React and Next.js applications"
                packageName="@melospot/icons-react"
                docsLink="/docs/react"
                iconUrl="/placeholder.svg?height=40&width=40"
              />
              <FrameworkCard
                title="Vue"
                description="Seamless integration with Vue.js applications"
                packageName="@melospot/icons-vue"
                docsLink="/docs/vue"
                iconUrl="/logo.png?height=40&width=40"
              />
              <FrameworkCard
                title="Svelte"
                description="Native Svelte components for your projects"
                packageName="@melospot/icons-svelte"
                docsLink="/docs/svelte"
                iconUrl="/placeholder.svg?height=40&width=40"
              />
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-6 lg:grid-cols-3">
              <FrameworkCard
                title="Angular"
                description="Angular components with TypeScript support"
                packageName="@melospot/icons-angular"
                docsLink="/docs/angular"
                iconUrl="/placeholder.svg?height=40&width=40"
              />
              <FrameworkCard
                title="Web Components"
                description="Framework-agnostic web components"
                packageName="@melospot/icons-webcomponents"
                docsLink="/docs/web-components"
                iconUrl="/placeholder.svg?height=40&width=40"
              />
              <FrameworkCard
                title="Figma"
                description="Figma plugin for designers"
                packageName="@melospot/icons-figma"
                docsLink="/docs/figma"
                iconUrl="/placeholder.svg?height=40&width=40"
              />
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Quick Start</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Get started with MeloSpot Icons in your project.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Install with npm</h3>
                <div className="rounded-md bg-gray-900 p-4">
                  <pre className="text-sm text-white">
                    <code>npm install @melospot/icons-react</code>
                  </pre>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Usage with React</h3>
                <div className="rounded-md bg-gray-900 p-4">
                  <pre className="text-sm text-white">
                    <code>{`import { Home, Settings } from '@melospot/icons-react'

export default function App() {
  return (
    <div>
      <Home className="h-6 w-6" />
      <Settings className="h-6 w-6" />
    </div>
  )
}`}</code>
                  </pre>
                </div>
              </div>
              <div className="flex justify-center pt-4">
                <Link href="/docs">
                  <Button>
                    View Full Documentation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
