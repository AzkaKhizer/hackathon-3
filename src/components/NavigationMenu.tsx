"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "New Arrivals",
    href: "/products",
  },
  {
    title: "Top Selling",
    href: "/products/sell",
  },
  {
    title: "Casual",
    href: "/casual",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="max-w-screen-2xl mx-auto">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <h2 className="text-[16px] md:text-[18px] font-semibold">Shop</h2>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white text-black">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <li key={component.title}>
                  <Link href={component.href} passHref>
                    <ListItem title={component.title} />
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors bg-white text-black hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        {children && (
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        )}
      </a>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";
