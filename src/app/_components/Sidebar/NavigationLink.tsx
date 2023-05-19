import Link from 'next/link'
import * as React from 'react'

import { GlobalNavigationContext } from '../Providers'

interface NavLink {
  link: {
    href: any
    label: any
    icon: any
    trailingAccessory: any
    trailingAction: any
    isActive?: boolean
    isExternal: any
  }
}

export function NavigationLink({
  link: {
    href,
    label,
    icon: Icon,
    trailingAccessory: Accessory,
    trailingAction: Action,
    isActive,
    isExternal,
  },
}: NavLink) {
  const { setIsOpen } = React.useContext(GlobalNavigationContext)
  return (
    <li
      className="flex items-stretch space-x-1"
      onClick={() => setIsOpen(false)}
    >
      {isExternal ? (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={`flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium  ${
            isActive
              ? 'bg-black text-white hover:bg-black hover:text-white  '
              : 'text-gray-700 sm:hover:bg-gray-200 sm:hover:text-gray-900 '
          }`}
        >
          <span className="flex w-4 items-center justify-center">
            <Icon />
          </span>
          <span className="flex-1">{label}</span>
          {Accessory && (
            <span className="flex w-4 items-center justify-center text-black text-opacity-40 dark:text-white">
              <Accessory />
            </span>
          )}
        </a>
      ) : (
        <Link
          href={href}
          className={`flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium  ${
            isActive
              ? 'bg-black text-white hover:bg-black hover:text-white  '
              : 'text-gray-700 sm:hover:bg-gray-200 sm:hover:text-gray-900 '
          }`}
        >
          <span className="flex w-4 items-center justify-center">
            <Icon />
          </span>
          <span className="flex-1">{label}</span>
          {Accessory && (
            <span className="flex w-4 items-center justify-center text-black text-opacity-40 dark:text-white">
              <Accessory />
            </span>
          )}
        </Link>
      )}

      {Action && <Action />}
    </li>
  )
}
