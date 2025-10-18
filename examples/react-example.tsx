import React from 'react'
import { Home, Settings, User, Icon } from '@melospot/icons-react'
import { useIconSearch, useIconsByCategory } from '@melospot/icons-react'

// Example 1: Individual icon components with different variants
function BasicExample() {
  return (
    <div className="flex gap-4 p-4">
      {/* Outline style (default) */}
      <Home size={32} />
      
      {/* Filled style */}
      <Settings variant="filled" size={32} color="#F7931E" />
      
      {/* Duotone style */}
      <User variant="duotone" size={32} strokeWidth={1.5} />
      
      {/* Micro style for small sizes */}
      <Home variant="micro" size={16} />
    </div>
  )
}

// Example 2: Dynamic icon component
function DynamicExample() {
  return (
    <div className="flex gap-4 p-4">
      <Icon name="home" variant="outline" size={24} />
      <Icon name="settings" variant="filled" size={24} />
      <Icon name="user" variant="duotone" size={24} />
    </div>
  )
}

// Example 3: Icon search and discovery
function SearchExample() {
  const [query, setQuery] = React.useState('')
  const searchResults = useIconSearch(query)
  const essentialIcons = useIconsByCategory('essential')
  
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search icons..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 mb-4"
      />
      
      <div className="grid grid-cols-8 gap-4">
        {(query ? searchResults : essentialIcons).map((icon) => (
          <div key={icon.name} className="flex flex-col items-center p-2">
            <Icon name={icon.name} size={32} />
            <span className="text-xs mt-1">{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Example 4: Accessibility features
function AccessibilityExample() {
  return (
    <div className="flex gap-4 p-4">
      {/* Automatic aria-label */}
      <Home size={24} />
      
      {/* Custom aria-label */}
      <Settings size={24} aria-label="Open application settings" />
      
      {/* Decorative icon (hidden from screen readers) */}
      <User size={24} aria-hidden />
    </div>
  )
}

// Example 5: Customization and theming
function CustomizationExample() {
  return (
    <div className="flex gap-4 p-4">
      {/* Custom colors */}
      <Home size={32} color="#3B82F6" />
      <Settings size={32} color="#EF4444" />
      
      {/* Custom stroke width */}
      <User size={32} strokeWidth={1} />
      <Home size={32} strokeWidth={3} />
      
      {/* CSS classes for animations */}
      <Settings 
        size={32} 
        className="hover:scale-110 transition-transform cursor-pointer" 
      />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">MeloSpot Icons - Modern Examples</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
        <BasicExample />
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Dynamic Icons</h2>
        <DynamicExample />
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Search & Discovery</h2>
        <SearchExample />
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Accessibility</h2>
        <AccessibilityExample />
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Customization</h2>
        <CustomizationExample />
      </section>
    </div>
  )
}