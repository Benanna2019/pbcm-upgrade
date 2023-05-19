import Sanity from '../clients/sanity'

const sanity = Sanity()

export async function getCalendarEvents() {
  const events = await sanity.getAllCalendarEvents()
  return events
}
