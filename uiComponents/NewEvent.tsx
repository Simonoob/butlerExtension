import { useState } from "react"

import type { CalendarEventInput } from "~calendar/types"
import { sendEventToCalendar } from "~calendar/utils"

const NewEvent = () => {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    duration: "",
    location: ""
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, description, date, time, duration, location } = formState
    const formattedDate = new Date(`${date}T${time}`).toISOString()
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const event: CalendarEventInput = {
      summary: name,
      description,
      start: {
        dateTime: formattedDate,
        timeZone
      },
      end: {
        dateTime: new Date(
          new Date(formattedDate).getTime() + Number(duration) * 60000
        ).toISOString(),
        timeZone
      }
    }
    sendEventToCalendar(event)
  }

  return (
    <>
      <h3>Send a new Event</h3>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formState.description}
          onChange={(e) =>
            setFormState({ ...formState, description: e.target.value })
          }
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formState.date}
          onChange={(e) => setFormState({ ...formState, date: e.target.value })}
        />

        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formState.time}
          onChange={(e) => setFormState({ ...formState, time: e.target.value })}
        />

        <label htmlFor="duration">Duration [minutes]</label>
        <input
          type="number"
          id="duration"
          name="duration"
          value={formState.duration}
          onChange={(e) =>
            setFormState({ ...formState, duration: e.target.value })
          }
        />

        <button type="submit">Send</button>
      </form>
    </>
  )
}

export default NewEvent
