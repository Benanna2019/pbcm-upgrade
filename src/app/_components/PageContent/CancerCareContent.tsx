// import Hope from "/public/journey-of-hope.jpg";
import Ocean from '/public/joseph-barrientos-holy-spirit.jpeg'
import Image from 'next/image'

export default function CancerCareContent() {
  return (
    <div>
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full object-cover "
                  src={Ocean}
                  priority={true}
                  alt="Journey of Hope"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-indigo-200 mix-blend-multiply" />
              <div className="relative px-4 py-16 sm:px-6 sm:py-24  lg:px-8">
                <h1 className="mb-16 text-center text-3xl font-extrabold tracking-tight sm:text-5xl md:text-3xl lg:text-6xl">
                  <span className="block pt-4 text-indigo-100">
                    Cancer Care Ministry
                  </span>
                </h1>
                <p className=" text-l sm:text-l mx-auto max-w-3xl text-center text-indigo-100 md:text-xl lg:text-2xl ">
                  The Journey of Hope, Charleston, SC will provide pastors and
                  ministry leaders with the tools, training and support to raise
                  up cancer care ministries in our local churches and
                  surrounding communities.
                </p>
                <div className="mx-auto max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden py-16">
          <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full"></div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              {/* <h1>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Coming Soon ...
                </span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                The Journey of Hope, Charleston, SC will provide pastors and
                ministry leaders with the tools, training and support to raise
                up cancer care ministries in our local churches and surrounding
                communities.
              </p> */}

              <h1 className="mt-10">
                <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  What is Cancer Care Minister Group Training?
                </span>
              </h1>

              <p className="mt-8 text-xl leading-8 text-gray-500">
                Cancer Care Leadership Training is an opportunity for pastors
                and Christian leaders to come together to learn about the need,
                the vision and the process to provide hope and encouragement to
                people living with cancer. It is a two-day immersion experience
                that investigates &quot;who and what&quot; the heart of cancer
                care ministry is.
              </p>
              <p className="mt-8 text-xl leading-8 text-gray-500">
                Cancer care ministry is a ministry of{' '}
                <span className="font-bold">hope</span> (Job 11:18-19). This
                ministry is bathed in prayer, involves counsel, visits and
                assistance to the patient and the caregiver. It is centered in
                &quot;Christ&quot; bringing God&apos;s hope to Cancer patients
                and their caregivers, family and friends. This type of ministry
                requires a sympathetic, empathetic individual, with an
                understanding of the impact of cancer on this society, how
                people react to it and how God has called His people to respond
                to this dreaded &quot;enemy&quot;. Above all, it requires us to
                have within ourselves a sincere and unfeigned hope that we can
                take to those in need.
              </p>
              <p className="mt-8 text-xl leading-8 text-gray-500">
                A ministry training program, such as the Journey of Hope
                approach, was created because of the significant need in our
                nation, as well as in the body of Christ, to care for those
                dealing with cancer. According to the American Cancer Society,
                over 12 million people in the United States are living with or
                have been personally diagnosed with cancer. Every year, 1.5
                million more people receive a cancer diagnosis. You do the math
                of the possibilities of cancer in the pews in your own church.
              </p>
              <p className="mt-8 text-xl leading-8 text-gray-500">
                The potential impact is indescribable...
              </p>
              <p className="mt-8 text-xl leading-8 text-gray-500">
                If you are interested in signing up for upcoming Cancer Care
                Ministry Training Programs, please email
                info@peninsulabiblicalcounselingministries.org
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
