import Footer from '../../_components/Layouts/Footer'
import Header from '../../_components/Layouts/Header'
import { EventLayout } from '../../_components/Events/EventLayout'
import { getAllEvents, getFeaturedEvent } from '@/src/models/events'

const Event = async () => {
  const events = await getAllEvents()
  const featuredEvent = await getFeaturedEvent()

  return (
    <>
      <Header />
      <EventLayout events={events} featuredEvent={featuredEvent} />
      <Footer />
    </>
  )
}

export default Event
