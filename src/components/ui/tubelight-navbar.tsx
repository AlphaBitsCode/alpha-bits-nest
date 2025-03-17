
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { LucideIcon, Server, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  dropdown?: boolean
  items?: {
    name: string
    url: string
  }[]
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleMouseEnter = (name: string) => {
    if (!isMobile) {
      setExpandedItem(name)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setExpandedItem(null)
    }
  }

  // Update the products menu items with categories
  const updatedItems = items.map(item => {
    if (item.name === "Products") {
      return {
        ...item,
        dropdown: true,
        items: [
          { name: "Commercial IoT Solutions", url: "/products#commercial-iot-solutions" },
          { name: "Education Products", url: "/products#education-products" }
        ]
      }
    }
    return item
  })

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6 w-full max-w-screen-xl px-4",
        className,
      )}
    >
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="flex items-center mr-6">
          <img src="/images/AB_Logo_icon.png" alt="Alpha Bits Logo" className="h-10" />
        </Link>
        
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg md:gap-3">
          {updatedItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
            const isExpanded = expandedItem === item.name

            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-3 py-2 rounded-full transition-colors flex items-center md:px-6",
                    "text-foreground/80 hover:text-primary",
                    isActive && "bg-muted text-primary",
                  )}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                        <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </Link>

                {item.dropdown && item.items && isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg overflow-hidden z-50"
                  >
                    <div className="py-2">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.url}
                          className="block px-4 py-3 text-sm text-gray-700 hover:text-brand-teal hover:bg-gray-50 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
