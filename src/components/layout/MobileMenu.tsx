/**
 * Mobile Menu Component
 * Mobile navigation with slide-in menu
 */

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu, ChevronRight } from "lucide-react";

interface UseCase {
  href: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MobileMenuProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  useCases: UseCase[];
}

export function MobileMenu({ isOpen, onOpenChange, useCases }: MobileMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menü öffnen</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4">
          {/* Main Links */}
          <Link href="/" onClick={() => onOpenChange(false)}>
            <Button variant="ghost" className="w-full justify-start">
              Hintergrund entfernen
            </Button>
          </Link>

          {/* Use Cases Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="use-cases" border={false}>
              <AccordionTrigger className="px-4 py-2 hover:no-underline">
                Anwendungsfälle
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-1 pl-4">
                  {useCases.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => onOpenChange(false)}
                      className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-muted text-sm"
                    >
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link href="/tipps" onClick={() => onOpenChange(false)}>
            <Button variant="ghost" className="w-full justify-start">
              Tipps & Tricks
            </Button>
          </Link>

          <Link href="/ueber-uns" onClick={() => onOpenChange(false)}>
            <Button variant="ghost" className="w-full justify-start">
              Über uns
            </Button>
          </Link>

          <div className="mt-4 pt-4 border-t">
            <Link href="/" onClick={() => onOpenChange(false)}>
              <Button className="w-full bg-brand-primary hover:bg-brand-primary/90">
                Jetzt starten
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
