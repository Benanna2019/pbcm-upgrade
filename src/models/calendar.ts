import Sanity from '../clients/sanity'
import 'server-only'

const sanity = Sanity()

export async function getCalendarEvents() {
  const events = await sanity.getAllCalendarEvents()
  return events
}
