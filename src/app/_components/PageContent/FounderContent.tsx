/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Image from 'next/image'
import founderImage from '/public/jdwilson21.jpg'

export default function FounderContent() {
  return (
    <div className="overflow-hidden">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Founder
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-10 aspect-h-5 lg:aspect-none">
                  <Image
                    className="rounded-lg object-cover object-center shadow-lg"
                    src={founderImage}
                    alt="Dr. Janie D. Wilson"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <span className="ml-2">Dr. Janie D. Wilson</span>
                  <span className="ml-2">
                    PBCM Founder & Certified Biblical Counselor
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-xl text-gray-500">
                Dr. Janie D. Wilson (or Sister Janie as she prefers to be
                called) is affiliated with the Association of Certified Biblical
                Counselors (ACBC) and is a certified biblical counselor. Dr.
                Wilson is the founder and President/COO of the Peninsula
                Biblical Counseling Ministries (PBCM), an ACBC Certified
                Training Center, located at the Church at Citadel Square, in
                Charleston, South Carolina.
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p className="mt-5 text-xl">
                Dr. Wilson’s educational pursuits from 2002 - 2015 are
                encompassed in her obtaining a BA and MABC (Masters in Biblical
                Counseling), MAPM (Master’s in Pastoral Ministries and a Ph.D.
                (Doctorate in Philosophy) in Biblical Counseling. She taught
                Biblical counseling at Cummins Memorial Theological Seminary.
              </p>
              <p className="mt-5 text-xl">
                Dr. Janie Dingle Wilson considers her greatest ministry is to
                her husband. She enjoys being married to her best friend and
                confidant, The Rev. Dr. Dallas H. Wilson, Jr., retiree of the
                Diocese of South Carolina (Anglican). Together, they have
                tirelessly worked in sharing the Gospel and winning souls for
                the Kingdom of God. They have two children (Deidre and Dean),
                four grandchildren (Kavon, Erick, Nile, and Penelope) one Great
                Grand Son (Adonis) “our GG".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
