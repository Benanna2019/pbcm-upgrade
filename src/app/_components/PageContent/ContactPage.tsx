'use client'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
//@ts-ignore
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ContactPage() {
  const [contactFormState, handleSubmit] = useForm(
    `${process.env.NEXT_PUBLIC_CONTACT_FORM_ID}`
  )

  if (contactFormState.errors.length > 0) {
    toast.error('Sorry, there were errors submitting your form 😧')
  }

  if (contactFormState.succeeded) {
    toast.success('Congrats 🎉 Your form has been submitted')
  }

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer position="bottom-right" />
      <main className="overflow-hidden">
        {/* Header */}
        <div className="bg-warm-gray-50 ">
          <div className="py-24 lg:py-32">
            <div className="relative mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-warm-gray-900 text-3xl font-bold tracking-tight sm:text-5xl lg:text-5xl">
                We Would Love to Connect With You!
              </h1>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <section
          className="relative bg-white"
          aria-labelledby="contact-heading"
        >
          <div
            className="bg-warm-gray-50 absolute h-1/2 w-full"
            aria-hidden="true"
          />
          {/* Decorative dot pattern */}
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <svg
              className="absolute top-0 right-0 z-0 -translate-y-16 translate-x-1/2 transform sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-warm-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <h2 id="contact-heading" className="sr-only">
                Contact us
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                <div className="from-tyrianPurple-300 to-tyrianPurple-500 relative overflow-hidden bg-gradient-to-b py-10 px-6 sm:px-10 xl:p-12">
                  {/* Decorative angle backgrounds */}
                  <div
                    className="pointer-events-none absolute inset-0 sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    Contact information
                  </h3>
                  <p className="mt-6 max-w-3xl text-base text-teal-50">
                    <span className="font-bold">Mailing Address:</span>
                  </p>
                  <p className="mt-4 max-w-3xl text-base text-teal-50">
                    P.O. Box 21505, Charleston, SC 29413
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-teal-50">
                      <PhoneIcon
                        className="h-6 w-6 flex-shrink-0 text-teal-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3">(843) 822-9988</span>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-teal-50">
                      <MailIcon
                        className="h-6 w-6 flex-shrink-0 text-teal-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3">info@peninsulabcm.org</span>
                    </dd>
                  </dl>
                  <ul role="list" className="mt-8 flex space-x-12">
                    <li>
                      <a
                        className="text-teal-300 hover:text-teal-100"
                        href="https://www.facebook.com/peninsulabiblicalcounselingministries"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="sr-only">Facebook</span>
                        <svg
                          className="h-7 w-7"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact form */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-warm-gray-900 text-lg font-medium">
                    Send us a message
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="first-name"
                        className="text-warm-gray-900 block text-sm font-medium"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          autoComplete="given-name"
                          className="text-warm-gray-900 border-warm-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                        />
                        <ValidationError
                          prefix="First Name"
                          field="first_name"
                          errors={contactFormState.errors}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="text-warm-gray-900 block text-sm font-medium"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          autoComplete="family-name"
                          className="text-warm-gray-900 border-warm-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                        />
                        <ValidationError
                          prefix="Last Name"
                          field="last"
                          errors={contactFormState.errors}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-warm-gray-900 block text-sm font-medium"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="text-warm-gray-900 border-warm-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={contactFormState.errors}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="phone"
                          className="text-warm-gray-900 block text-sm font-medium"
                        >
                          Phone
                        </label>
                        <span
                          id="phone-optional"
                          className="text-warm-gray-500 text-sm"
                        >
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="text-warm-gray-900 border-warm-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                          aria-describedby="phone-optional"
                        />
                        <ValidationError
                          prefix="Phone"
                          field="phone"
                          errors={contactFormState.errors}
                        />
                      </div>
                    </div>

                    <div className="relative flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="mailing_list"
                          aria-describedby="mailing_list"
                          name="mailing_list"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <ValidationError
                          prefix="Mailing List"
                          field="mailing_list"
                          errors={contactFormState.errors}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <span id="mailing_list" className="text-gray-500">
                          Add me to your mailing list
                        </span>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="biblical_counseling"
                          aria-describedby="biblical_counseling"
                          name="biblical_counseling"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <ValidationError
                          prefix="Biblical Counseling"
                          field="biblical_counseling"
                          errors={contactFormState.errors}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <span
                          id="biblical_counseling"
                          className="text-gray-500"
                        >
                          Learning More About Biblical Counseling
                        </span>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="become_a_counselor"
                          aria-describedby="become_a_counselor"
                          name="become_a_counselor"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <ValidationError
                          prefix="Become A Counselor"
                          field="become_a_counselor"
                          errors={contactFormState.errors}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <span
                          id="become-a-biblical-counselor"
                          className="text-gray-500"
                        >
                          Become a Biblical Counselor
                        </span>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="schedule_a_speaking_engagement"
                          aria-describedby="schedule_a_speaking_engagement"
                          name="schedule_a_speaking_engagement"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <ValidationError
                          prefix="Schedule A Speaking Engagement"
                          field="schedule_a_speaking_engagement"
                          errors={contactFormState.errors}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <span
                          id="schedule-a-speaking-engagement"
                          className="text-gray-500"
                        >
                          Scheduling a Speaking Engagement At My
                          Church/Business/Organization
                        </span>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="getting_involved_volunteering"
                          aria-describedby="getting_involved_volunteering"
                          name="getting_involved_volunteering"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <ValidationError
                          prefix="getting_involved_volunteering"
                          field="getting_involved_volunteering"
                          errors={contactFormState.errors}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <span
                          id="getting-involved-volunteering"
                          className="text-gray-500"
                        >
                          Getting Involved/Volunteering
                        </span>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="attend_training_classes"
                          aria-describedby="attend_training_classes"
                          name="attend_training_classes"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <ValidationError
                          prefix="Attend Training Classes"
                          field="attend_training_classes"
                          errors={contactFormState.errors}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <span
                          id="attend_training_classes"
                          className="text-gray-500"
                        >
                          Attending PBCM Training Classes
                        </span>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="text-warm-gray-900 block text-sm font-medium"
                        >
                          Message
                        </label>
                        <span
                          id="message-max"
                          className="text-warm-gray-500 text-sm"
                        >
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="text-warm-gray-900 border-warm-gray-300 block w-full rounded-md border py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                          aria-describedby="message-max"
                          defaultValue={''}
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={contactFormState.errors}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        disabled={contactFormState.submitting}
                        className="text-warm-gray-50 bg-tyrianPurple-300 hover:bg-tyrianPurple-500 mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
