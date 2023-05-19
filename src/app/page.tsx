import type { NextPage } from 'next'
import Head from 'next/head'
import LandingPage from './_components/Layouts/LandingPage'
import Header from './_components/Layouts/Header'
import Footer from './_components/Layouts/Footer'

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
