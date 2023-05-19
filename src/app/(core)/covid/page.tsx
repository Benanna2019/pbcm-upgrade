import { NextPage } from 'next'
import CovidResponse from '../../_components/CovidResponse'
import Footer from '../../_components/Layouts/Footer'
import Header from '../../_components/Header'

const Covid: NextPage = () => {
  return (
    <>
      <Header />
      <CovidResponse />
      <Footer />
    </>
  )
}

export default Covid
