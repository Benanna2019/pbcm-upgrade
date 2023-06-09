import Calendar from '../../_components/PageContent/Calendar'
import AboutLayout from '../../_components/Layouts/AboutLayout'
import { getCalendarEvents } from '@/src/models/calendar'

const CalendarRoute = async () => {
  const calendarEvents = await getCalendarEvents()

  return (
    <>
      <AboutLayout>
        <Calendar calendarEvents={calendarEvents} />
      </AboutLayout>
    </>
  )
}

export default CalendarRoute
