"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <span className="text-xl font-bold">Portfolio</span>
        <div className="flex gap-6">
          <Button variant="ghost" asChild>
            <a href="#about">About</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#skills">Skills</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#projects">Projects</a>
          </Button>
          <Button variant="default" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </nav>
  )
}

