import { useQuery } from "react-query"

import { getCalendarsList } from "~calendar/utils"

const CalendarsList = () => {
  const {
    isLoading,
    data: calendars,
    error
  } = useQuery("calendarsList", () => getCalendarsList())

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>There was an error loading your calendars.</div>

  if (calendars && calendars.length === 0) return <div>No calendars found.</div>

  return (
    <div>
      <h2>Calendars</h2>
      <ul>
        {calendars.map((calendar) => (
          <li key={calendar.id}>
            <h3>{calendar.summary}</h3>
            <p>{calendar.description}</p>
            <p>calendar ID: {calendar.id}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CalendarsList
