import { NextPage } from 'next'
import CovidResponse from '../../_components/PageContent/CovidResponse'
import Footer from '../../_components/Layouts/Footer'
import Header from '../../_components/Layouts/Header'

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
