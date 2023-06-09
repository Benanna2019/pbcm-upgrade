import EventPlaceholderImage from '/public/EventPlaceHolder.jpeg'
import Image from 'next/image'

export default function FeaturedEvent({ featuredEvent }: any) {
  return (
    <>
      {featuredEvent ? (
        <div className="relative bg-gray-50">
          <main className="lg:relative">
            <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
              <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
                <h1 className="text-4xl font-semibold text-gray-900 sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl">
                  <span className="block xl:inline">
                    {featuredEvent[0]?.title}
                  </span>{' '}
                </h1>
                <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                  {featuredEvent[0]?.eventBlurb}
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={featuredEvent[0]?.eventImage || EventPlaceholderImage}
                alt={`Event Image for ${featuredEvent[0]?.title}`}
                loading="lazy"
                fill={true}
              />
            </div>
          </main>
        </div>
      ) : null}
    </>
  )
}
