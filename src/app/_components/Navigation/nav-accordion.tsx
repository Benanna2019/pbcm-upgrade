import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shadui/accordion'
import Link from 'next/link'
import { routes } from '@/src/utils/constants'

export function NavAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <Link href="/biblical-counseling">Counseling</Link>
        </AccordionTrigger>
        <AccordionContent>
          Visit our{' '}
          <Link
            href="/bliblical-counseling"
            className="text-blue-500 hover:underline"
          >
            Counseling page
          </Link>{' '}
          to read more about Peninsula Biblical Counseling Ministries
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>About</AccordionTrigger>
        <AccordionContent>
          <ul className="grid w-full grid-cols-2 gap-3">
            {routes.about.map((link) => (
              <Link
                key={link.name}
                title={link.name}
                href={link.href}
                className="hover:text-blue-500 hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Equipping</AccordionTrigger>
        <AccordionContent>
          <ul className="grid w-full grid-cols-2 gap-3">
            {routes.equipping.map((link) => (
              <Link
                key={link.name}
                title={link.name}
                href={link.href}
                className="hover:text-blue-500 hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Forms</AccordionTrigger>
        <AccordionContent>
          <ul className="grid w-full grid-cols-2 gap-3">
            {routes.forms.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 hover:underline"
              >
                {link.name}
              </a>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>PBCM ReFraming</AccordionTrigger>
        <AccordionContent>
          <ul className="grid w-full grid-cols-2 gap-3">
            {routes.reframing.map((link) => (
              <Link
                key={link.name}
                title={link.name}
                href={link.href}
                className="hover:text-blue-500 hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          <Link href="/biblical-counseling">Contact</Link>
        </AccordionTrigger>
        <AccordionContent>
          Fill out{' '}
          <Link href="/contact" className="text-blue-500 hover:underline">
            our contact form
          </Link>{' '}
          to get more information on PBCM events and services
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>
          <Link href="/donate">Donate</Link>
        </AccordionTrigger>
        <AccordionContent>
          Make a{' '}
          <Link
            href="/bliblical-counseling"
            className="text-blue-500 hover:underline"
          >
            doantion
          </Link>{' '}
          to support the ongoing work of PBCM and lives changed by the Gospel
          and God&apos;s word through biblical counseling
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
