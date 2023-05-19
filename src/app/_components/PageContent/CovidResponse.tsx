import Image from 'next/image'
import Mountains from '/public/mountains.jpeg'

export default function CovidResponse() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <figure>
                  <Image
                    className="h-full w-full object-cover"
                    src={Mountains}
                    alt="Mountains"
                  />
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <span className="ml-2">
                      Photo by{' '}
                      <a
                        href="https://unsplash.com/@angro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Antonio Grosz
                      </a>{' '}
                      on{' '}
                      <a
                        href="https://unsplash.com/s/photos/mountains?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Unsplash
                      </a>
                    </span>
                  </figcaption>
                </figure>
                <div className="absolute inset-0" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Covid-19</span>
                  <span className="block text-indigo-100">Response</span>
                </h1>
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden bg-white py-16">
          <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full"></div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <h1>
                <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  {/* Placeholder for content in the future */}
                </span>
              </h1>
              <p className="mt-8 text-xl leading-8 text-gray-500">
                AT PENINSULA BIBLICAL COUNSELING MINISTRIES (PBCM), we are
                determined to keep our eyes and heart on the Lord. Deuteronomy
                31:6 instructs believers on what to be and what we are not to
                be! God has promised His children that HE is and will FOREVER be
                our &quot;true&quot; source of protection, strength, and peace
                during unknown times.
              </p>

              <h1 className="mt-10">
                <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  Be Informed and Share Validated Information
                </span>
              </h1>

              <p className="mt-8 text-xl leading-8 text-gray-500">
                This COVID-19 pandemic is a medical crisis that has Spiritual
                ramifications. It is important for people, Christians included,
                not to be apathetic or indifferent, and above all, not to be
                worried, about the significance and seriousness of the times we
                are living in.
              </p>
              <p className="mt-8 text-xl leading-8 text-gray-500">
                Continuing to be in well informed and not &quot;negatively
                influenced&quot; by irrational thinking which fuels even more
                the potential of living in isolation, constant fear, worry, and
                anxiety is now more crucial than ever. Let us help those around
                us by obtaining &quot;truthful&quot; and accurate information
                and reports from verified medical organizations.
              </p>
              <p className="mt-8 text-xl leading-8 text-gray-500">
                Social media (e.g., Facebook, YouTube, Instagram, word of mouth,
                etc.) are not the real sources of vetted and accurate
                information. Visit and get acquainted with validated sites like
                the Center for Disease Control (CDC) and World Health
                Organization and even your local Hospitals (MUSC, Roper
                Hospital, Trident Hospital) and News Venues. Most importantly,
                sharing facts and truthful information, will dispel or at least
                lessen the hysteria or misinformation through social media or
                word of mouth …
              </p>
              <p className="mt-8 text-center text-xl leading-8 text-gray-500">
                <strong>
                  <em>Philippians 4:8…</em>
                </strong>{' '}
                &quot;Finally, brothers, whatever is true, whatever is
                honorable, whatever is just, whatever is pure, whatever is
                lovely, whatever is commendable, if there is any excellence, if
                there is anything worthy of praise, think about these
                things&quot;.
              </p>
              <p className="mt-8 text-center text-xl leading-8 text-gray-500">
                <strong>
                  <em>Proverbs 11:14…</em>
                </strong>{' '}
                &quot;Where there is no guidance, a people falls, but in an
                abundance of counselors there is safetyLet this time and season
                of uncertainty and vagueness, become more of a season and time
                of earnest and sincere prayer, and love for our neighbor&quot;.
                Let us not to react, but respond within the context of the truth
                of Scripture.{' '}
                <span className="underline">Do not be afraid!</span> Fear is
                torment…
              </p>
              <p className="mt-8 text-xl leading-8 text-gray-500">
                Furthermore, Christians must be the Church, representative of
                God, and we must live out the Great Commission (Matthew
                28:18-20) and the Great Commandment (Matthew 22:34-40).
              </p>

              <p className="mt-8 text-xl leading-8 text-gray-500">
                Fulfilling Jesus&apos; &quot;Great Commandment&quot; means
                loving our neighbors as we love ourselves. Moreover, Christians
                must share the Gospel of Jesus Christ, particularly in these
                times when people are living in despair and without hope.
              </p>
              <p className="mt-8 text-center text-xl leading-8 text-gray-500">
                ~ Jesus is our Hope, Dwell in HIM ~ Psalms 91:1-2
              </p>

              <p className="mt-8 text-xl leading-8 text-gray-900">
                Faithfully,
              </p>
              <p className="mt-6 text-xl font-bold italic leading-8 text-gray-900">
                Dr. Janie D. Wilson, PhD
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
