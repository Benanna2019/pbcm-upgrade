import { routes } from '@/src/utils/constants'

export default function CounselingPage() {
  return (
    <div>
      <main>
        {/* Hero section */}
        <div className="relative overflow-hidden py-16">
          <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full"></div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <h1>
                <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  Peninsula Biblical Counseling Ministries
                </span>
              </h1>
              <p className="mt-8 text-left text-xl leading-8 text-gray-700">
                <span className="font-bold">Biblical Counseling</span> is a
                Christ-centered, church-based, all-inclusive, and empathetic,
                personal evangelistic, one-another ministry, culturally-informed
                Biblical Worldview approach that depends on the power of the
                Holy Spirit, prayer, and the sufficiency, inerrancy,
                immutability, and the authority of the Holy Scripture (Sola
                Scriptura) as the lens by which Christians must assess all other
                truth claims.
              </p>
              <p className="mx-auto mt-16 max-w-lg text-left text-xl text-gray-700 sm:max-w-3xl">
                <span className="font-bold">Biblical Counseling</span>{' '}
                encourages believers struggling with sinful life issues.
                Moreover, Biblical counseling offers biblical hope and
                encouragement to people living with non-physical life challenges
                and with chronic and/or life-threatening physical life troubles,
                and is a process of focused and personal discipleship.
              </p>
              <h1>
                <span className="mt-16 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  Are You Seeking Counseling
                </span>
              </h1>
              <p className="mt-12 text-left text-xl font-semibold leading-8 text-gray-700">
                The PBCM provides faith-based Biblical Counseling to those
                seeking God&apos;s answers to the questions and problems in
                their lives. If you are ready to receive Biblical Counseling,
                click below to schedule your session.
              </p>
              <Forms />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function Forms() {
  const forms = routes.forms
  return (
    <div className="mt-10">
      {forms.map(({ name, href, description }) => (
        <p
          key={name}
          className="text-l mt-4 font-semibold leading-8 text-blue-400"
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {name}
          </a>{' '}
          - <em className="font-medium text-gray-700">{description}</em>
        </p>
      ))}
    </div>
  )
}
