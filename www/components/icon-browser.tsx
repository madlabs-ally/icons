"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample icon data - in a real implementation, this would come from your packages
const sampleIcons = [
  { id: 1, name: "Home", category: "essential", component: "Home" },
  { id: 2, name: "Settings", category: "essential", component: "Settings" },
  { id: 3, name: "User", category: "essential", component: "User" },
  { id: 4, name: "Calendar", category: "essential", component: "Calendar" },
  { id: 5, name: "Mail", category: "essential", component: "Mail" },
  { id: 6, name: "Chart", category: "pro", component: "BarChart" },
  { id: 7, name: "Analytics", category: "pro", component: "LineChart" },
  { id: 8, name: "Dashboard", category: "pro", component: "Layout" },
  { id: 9, name: "Document", category: "outline", component: "File" },
  { id: 10, name: "Image", category: "outline", component: "Image" },
  { id: 11, name: "Video", category: "outline", component: "Video" },
  { id: 12, name: "Audio", category: "outline", component: "Music" },
  { id: 13, name: "Bookmark", category: "essential", component: "Bookmark" },
  { id: 14, name: "Heart", category: "essential", component: "Heart" },
  { id: 15, name: "Star", category: "essential", component: "Star" },
  { id: 16, name: "Flag", category: "essential", component: "Flag" },
]

export function IconBrowser() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [copiedIcon, setCopiedIcon] = useState<number | null>(null)

  const filteredIcons = sampleIcons.filter(
    (icon) =>
      icon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeTab === "all" || icon.category === activeTab),
  )

  const copyToClipboard = (iconId: number, iconName: string) => {
    navigator.clipboard.writeText(`<${iconName} className="h-6 w-6" />`)
    setCopiedIcon(iconId)
    setTimeout(() => setCopiedIcon(null), 2000)
  }

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Input
          placeholder="Search icons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="sm:max-w-xs"
        />
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="essential">Essential</TabsTrigger>
            <TabsTrigger value="pro">Pro</TabsTrigger>
            <TabsTrigger value="outline">Outline</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {filteredIcons.map((icon) => (
          <div
            key={icon.id}
            className="flex flex-col items-center justify-center rounded-lg border p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <div className="flex h-12 w-12 items-center justify-center">
              <div className="h-6 w-6 bg-gray-300 dark:bg-gray-600 rounded-sm" />
            </div>
            <div className="mt-2 text-center text-sm">{icon.name}</div>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 h-8 w-8 p-0"
              onClick={() => copyToClipboard(icon.id, icon.component)}
            >
              {copiedIcon === icon.id ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              <span className="sr-only">Copy {icon.name} icon</span>
            </Button>
          </div>
        ))}
      </div>

      {filteredIcons.length === 0 && (
        <div className="flex h-32 items-center justify-center rounded-lg border">
          <p className="text-muted-foreground">No icons found</p>
        </div>
      )}
    </div>
  )
}
