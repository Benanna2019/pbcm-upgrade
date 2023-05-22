import { EventLayout } from '../../_components/Events/EventLayout'
import { getAllEvents, getFeaturedEvent } from '@/src/models/events'

const Event = async () => {
  const events = await getAllEvents()
  const featuredEvent = await getFeaturedEvent()
  console.log('featured event', featuredEvent)

  return (
    <>
      <EventLayout events={events} featuredEvent={featuredEvent} />
    </>
  )
}

export default Event
