'use client'
//@ts-nocheck
import { usePathname } from 'next/navigation'
import {
  AcademicCapIcon,
  UserGroupIcon,
  GlobeIcon,
  BookOpenIcon,
  SpeakerphoneIcon,
} from '@heroicons/react/outline'
import { Sidebar } from '../Sidebar'
import { CalendarIcon } from '@heroicons/react/solid'

export default function AboutNav({ children }: any) {
  const pathname = usePathname()

  const sections = [
    {
      label: 'About PBCM',
      items: [
        {
          label: 'Who We Are',
          href: '/about',
          trailingAccessory: null,
          isActive: pathname === '/about',
          icon: BookOpenIcon,
          isExternal: false,
        },
        {
          label: 'President & Founder',
          href: '/founder',
          trailingAccessory: null,
          isActive: pathname === '/founder',
          icon: AcademicCapIcon,
          isExternal: false,
        },
        {
          label: 'Board of Directors',
          href: '/board',
          trailingAccessory: null,
          isActive: pathname === '/board',
          icon: UserGroupIcon,
          isExternal: false,
        },
        {
          label: 'Our Mission & Beliefs',
          href: '/mission',
          trailingAccessory: null,
          isActive: pathname === '/mission',
          icon: GlobeIcon,
          isExternal: false,
        },
        {
          label: 'Calendar',
          href: '/calendar',
          trailingAccessory: null,
          isActive: pathname === '/calendar',
          icon: CalendarIcon,
          isExternal: false,
        },
        {
          label: 'Events',
          href: '/events',
          trailingAccessory: null,
          isActive: pathname === '/events',
          icon: SpeakerphoneIcon,
        },
      ],
    },
  ]

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar sections={sections} />
      <div className="flex w-0 flex-1 flex-col overflow-hidden">
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
