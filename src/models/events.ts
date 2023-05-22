import type { Event } from '../clients/parsers/event'
import Sanity from '../clients/sanity'
import 'server-only'

const sanity = Sanity()

export async function getAllEvents(): Promise<Event[]> {
  const events = await sanity.getAllEvents()
  return events
}

export async function getEventBySlug(slug: string) {
  const event = await sanity.getEventBySlug(slug)
  return event
}

export async function getFeaturedEvent() {
  const featuredEvent = await sanity.getFeaturedEvent()
  return featuredEvent
}
