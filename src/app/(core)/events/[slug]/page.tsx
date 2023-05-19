import Footer from '../../../_components/Layouts/Footer'
import Header from '../../../_components/Layouts/Header'
import { EventDetail } from '../../../_components/Events/EventDetail'
import { getEventBySlug } from '@/src/models/events'

const IndividualEventPage = async ({ params }: any) => {
  const slug = params.slug
  const eventInfo = await getEventBySlug(slug as string)

  return (
    <>
      <Header />
      <EventDetail eventInfo={eventInfo} />
      <Footer />
    </>
  )
}

export default IndividualEventPage
