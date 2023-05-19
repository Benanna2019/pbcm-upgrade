'use client'
/* This example requires Tailwind CSS v2.0+ */
import image from '/public/PBCM_Purple.png'
// import cross from "/public/Cross.png";
import PBCM_Logo from '/public/CrossWithSameFontPBCMLogo.png'
import Link from 'next/link'
import Image from 'next/image'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
// @ts-ignore
import { Navigation } from '../Navigation'
import { Separator } from '@/shadui/separator'
import { useViewport } from '@/src/utils/use-viewport'

export default function Header() {
  const { width } = useViewport()
  const short_width = width <= 620

  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6  md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Image className="h-24 w-auto" src={PBCM_Logo} alt="" />
            </Link>
          </div>
          <div className="-my-2 -mr-2 ">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-14 w-auto"
                    src={image}
                    alt="PBCM Cross Logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav
                  className={`flex h-96 justify-start ${
                    !short_width && 'space-x-12'
                  }`}
                >
                  <div
                    className={`flex flex-col justify-around space-y-8 ${
                      short_width ? 'w-11/12' : ''
                    }`}
                  >
                    <Navigation />
                  </div>
                  {width > 620 && (
                    <Separator orientation="vertical" className="h-auto " />
                  )}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
