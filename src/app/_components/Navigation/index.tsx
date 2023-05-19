'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/src/utils/cn'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/shadui/navigation-menu'

import { routes } from '@/src/utils/constants'
import { NavAccordion } from './nav-accordion'

export function Navigation() {
  return (
    <>
      <NavAccordion />
      <NavigationMenu className="invisible md:visible">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Counseling</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="tex grid gap-3 p-6 sm:w-[200px] md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b p-2 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="mb-2 text-lg font-medium">
                        Peninsula BCM
                      </div>
                      <p className="text-muted-foreground text-sm ">
                        Read more about counseling at PBCM
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/biblical-counseling" title="Introduction">
                  is a Christ-centered, church-based, all-inclusive, and
                  empathetic, personal evangelistic, one-another ministry,
                  culturally-informed Biblical Worldview approach that depends
                  on the power of the Holy Spirit, prayer, and the sufficiency,
                  inerrancy, immutability, and the authority of the Holy
                  Scripture (Sola Scriptura) as the lens by which Christians
                  must assess all other truth claims.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[800px] ">
                {routes.about.map((link) => (
                  <ListItem key={link.name} title={link.name} href={link.href}>
                    {link.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Equipping</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[800px] ">
                {routes.equipping.map((link) => (
                  <ListItem key={link.name} title={link.name} href={link.href}>
                    {link.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Forms</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[800px] ">
                {routes.forms.map((link) => (
                  <li key={link.name}>
                    <NavigationMenuLink>
                      <a
                        className={cn(
                          'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors'
                        )}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="text-sm font-medium leading-none">
                          {link.name}
                        </div>
                        <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
                          {link.description}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>PBCM Reframing</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[800px] ">
                {routes.reframing.map((link) => (
                  <ListItem key={link.name} title={link.name} href={link.href}>
                    {link.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/donate" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Donate
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
