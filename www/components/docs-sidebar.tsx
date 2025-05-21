"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-full">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Documentation</h2>
          <div className="space-y-1">
            <Link
              href="/docs"
              className={cn(
                "flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800",
                pathname === "/docs" ? "bg-gray-100 dark:bg-gray-800" : "transparent",
              )}
            >
              Overview
            </Link>
            <Link
              href="/docs/getting-started"
              className={cn(
                "flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800",
                pathname === "/docs/getting-started" ? "bg-gray-100 dark:bg-gray-800" : "transparent",
              )}
            >
              Getting Started
            </Link>
            <Link
              href="/docs/installation"
              className={cn(
                "flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800",
                pathname === "/docs/installation" ? "bg-gray-100 dark:bg-gray-800" : "transparent",
              )}
            >
              Installation
            </Link>
          </div>
        </div>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="frameworks">
            <AccordionTrigger className="px-4 text-sm">Frameworks</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-1 pl-1">
                <Link
                  href="/docs/react"
                  className={cn(
                    "flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800",
                    pathname === "/docs/react" ? "bg-gray-100 dark:bg-gray-800" : "transparent",
                  )}
                >
                  React
                </Link>
                <Link
                  href="/docs/vue"
                  className={cn(
                    "flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800",
                    pathname === "/docs/vue" ? "bg-gray-100 dark:bg-gray-800" : "transparent",
                  )}
                >
                  Vue
                </Link>
                <Link
                  href="/docs/svelte"
                  className={cn(
                    "flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800",
                    pathname === "/docs/svelte" ? "bg-gray-100 dark:bg-gray-800" : "transparent",
                  )}
                >
                  Svelte
                </Link>
                <Link
                  href="/docs/angular"
                  className={cn(
                    "flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800",
                    pathname === "/docs/angular" ? "bg-gray-100 dark:bg-gray-800" : "transparent",
                  )}
                >
                  Angular
                </Link>
                <Link
                  href="/docs/web-components"
                  className={cn(
                    "flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800",
                    pathname === "/docs/web-components" ? "bg-gray-100 dark:bg-gray-800" : "transparent",
                  )}
                >
                  Web Components
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="advanced">
            <AccordionTrigger className="px-4 text-sm">Advanced</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-1 pl-1">
                <Link
                  href="/docs/customization"
                  className={cn(
                    "flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800",
                    pathname === "/docs/customization" ? "bg-gray-100 dark:bg-gray-800" : "transparent",
                  )}
                >
                  Customization
                </Link>
                <Link
                  href="/docs/api"
                  className={cn(
                    "flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800",
                    pathname === "/docs/api" ? "bg-gray-100 dark:bg-gray-800" : "transparent",
                  )}
                >
                  API Reference
                </Link>
                <Link
                  href="/docs/contributing"
                  className={cn(
                    "flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800",
                    pathname === "/docs/contributing" ? "bg-gray-100 dark:bg-gray-800" : "transparent",
                  )}
                >
                  Contributing
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
