'use client'
import { usePathname } from 'next/navigation'
import {
  AcademicCapIcon,
  GlobeAltIcon,
  HeartIcon,
  BookOpenIcon,
  //@ts-ignore
} from '@heroicons/react/outline'
import { Sidebar } from '../Sidebar'
import { WritingIcon } from '../Icon'

export default function TrainingNav({ children }: any) {
  const pathname = usePathname()

  const sections = [
    {
      label: 'Equipping Links',
      items: [
        {
          label: 'Equipping',
          href: '/equipping',
          trailingAccessory: null,
          isActive: pathname === '/equipping',
          icon: AcademicCapIcon,
          isExternal: false,
        },
        {
          label: 'PBCM 2022 Vision',
          href: '/pbcm-vision',
          trailingAccessory: null,
          isActive: pathname === '/pbcm-vision',
          icon: GlobeAltIcon,
          isExternal: false,
        },
        {
          label: 'Cancer Care Ministry',
          href: '/cancer-care',
          trailingAccessory: null,
          isActive: pathname === '/cancer-care',
          icon: HeartIcon,
          isExternal: false,
        },
        {
          label: "Women's Ministry",
          href: '/titus-2',
          trailingAccessory: null,
          isActive: pathname === '/titus-2',
          icon: BookOpenIcon,
          isExternal: false,
        },
        {
          label: 'Blog',
          href: '/blog',
          trailingAccessory: null,
          isActive: pathname === '/blog',
          icon: WritingIcon,
          isExternal: false,
        },
      ],
    },
  ]

  return (
    <div className="bg-warm-gray-100 flex h-screen overflow-hidden">
      <Sidebar sections={sections} />
      <div className="flex w-0 flex-1 flex-col overflow-hidden">
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              {/* Need to make this component the 'sidebar' on
                  layout page */}
              {/* /End replace */}
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
