import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReactDocsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">React</h1>
        <p className="text-lg text-muted-foreground">Learn how to use MeloSpot Icons in your React applications.</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Installation</h2>
        <p>Install the MeloSpot Icons React package using npm, yarn, or pnpm:</p>

        <Tabs defaultValue="npm">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          </TabsList>
          <TabsContent value="npm">
            <div className="rounded-md bg-gray-900 p-4">
              <pre className="text-sm text-white">
                <code>npm install @melospot/icons-react</code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="yarn">
            <div className="rounded-md bg-gray-900 p-4">
              <pre className="text-sm text-white">
                <code>yarn add @melospot/icons-react</code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="pnpm">
            <div className="rounded-md bg-gray-900 p-4">
              <pre className="text-sm text-white">
                <code>pnpm add @melospot/icons-react</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Usage</h2>
        <p>Import and use icons in your React components:</p>

        <div className="rounded-md bg-gray-900 p-4">
          <pre className="text-sm text-white">
            <code>{`import { Home, Settings, User } from '@melospot/icons-react'

export default function App() {
  return (
    <div>
      <Home className="h-6 w-6" />
      <Settings className="h-6 w-6" />
      <User className="h-6 w-6" />
    </div>
  )
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Props</h2>
        <p>
          MeloSpot Icons for React accept all the props that you can pass to a standard SVG element, plus the following:
        </p>

        <div className="rounded-md border">
          <div className="grid grid-cols-5 border-b p-4 font-medium">
            <div className="col-span-1">Prop</div>
            <div className="col-span-1">Type</div>
            <div className="col-span-2">Description</div>
            <div className="col-span-1">Default</div>
          </div>
          <div className="grid grid-cols-5 border-b p-4">
            <div className="col-span-1">size</div>
            <div className="col-span-1">number | string</div>
            <div className="col-span-2">The size of the icon</div>
            <div className="col-span-1">24</div>
          </div>
          <div className="grid grid-cols-5 border-b p-4">
            <div className="col-span-1">color</div>
            <div className="col-span-1">string</div>
            <div className="col-span-2">The color of the icon</div>
            <div className="col-span-1">currentColor</div>
          </div>
          <div className="grid grid-cols-5 p-4">
            <div className="col-span-1">strokeWidth</div>
            <div className="col-span-1">number</div>
            <div className="col-span-2">The stroke width of the icon</div>
            <div className="col-span-1">2</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Next.js Usage</h2>
        <p>MeloSpot Icons work seamlessly with Next.js:</p>

        <div className="rounded-md bg-gray-900 p-4">
          <pre className="text-sm text-white">
            <code>{`'use client'

import { Home, Settings } from '@melospot/icons-react'

export default function Dashboard() {
  return (
    <div className="flex gap-4">
      <Home className="h-6 w-6" />
      <Settings className="h-6 w-6" />
    </div>
  )
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Tree Shaking</h2>
        <p>
          The package is fully tree-shakeable, meaning only the icons you use will be included in your final bundle.
          This helps keep your application size small and efficient.
        </p>
      </div>
    </div>
  )
}
