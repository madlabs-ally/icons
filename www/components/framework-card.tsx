import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface FrameworkCardProps {
  title: string
  description: string
  packageName: string
  docsLink: string
  iconUrl: string
}

export function FrameworkCard({ title, description, packageName, docsLink, iconUrl }: FrameworkCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex h-12 w-12 items-center justify-center">
          <Image src={iconUrl || "/placeholder.svg"} alt={title} width={40} height={40} />
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Package</span>
            <span className="font-mono text-xs">{packageName}</span>
          </div>
          <div className="rounded-md bg-gray-100 dark:bg-gray-800 p-2">
            <pre className="text-xs">
              <code>npm install {packageName}</code>
            </pre>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={docsLink} className="w-full">
          <Button className="w-full" variant="outline">
            View Documentation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
