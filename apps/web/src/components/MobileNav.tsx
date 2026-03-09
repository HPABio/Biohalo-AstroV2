"use client"

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@workspace/ui/components/sheet"
import { Button } from "@workspace/ui/components/button"
import { MenuIcon } from "lucide-react"
import { useState } from "react"

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#technology", label: "Technology" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#team", label: "Team" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" className="md:hidden" />}
      >
        <MenuIcon />
        <span className="sr-only">Menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 border-t border-border pt-4">
            <a href="#contact">
              <Button className="w-full" onClick={() => setOpen(false)}>
                Get in Touch
              </Button>
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
