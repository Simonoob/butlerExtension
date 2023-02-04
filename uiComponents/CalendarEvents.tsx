import { useQuery } from "react-query"

import { getCalendarEvents } from "~calendar/utils"

const CalendarEvents = ({
  timeMin,
  timeMax
}: {
  timeMin: string
  timeMax: string
}) => {
  const {
    isLoading,
    data: events,
    error
  } = useQuery("calendarEvents", () =>
    getCalendarEvents({
      timeMin,
      timeMax
    })
  )

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>There was an error loading your calendar events.</div>

  if (events && events.length === 0) return <div>No events found.</div>

  return (
    <div>
      <h2>Calendar Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.summary}</h3>
            <p>{event.description}</p>
            <p>
              Starting Time: {event.start.dateTime} - {event.start.timeZone}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CalendarEvents
