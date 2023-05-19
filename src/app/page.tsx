import type { NextPage } from 'next'
import Head from 'next/head'
import LandingPage from './_components/Layouts/LandingPage'

export const metadata = {
  title: 'Peninsula BCM',
  description:
    'Biblical Counseling to Reach Charleston, SC East Side, Peninsula, and beyond.',
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Peninsula BCM</title>
        <meta
          name="description"
          content="Peninsula Biblical Counseling Ministries"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* @ts-expect-error */}
      <LandingPage />
    </>
  )
}

export default Home
