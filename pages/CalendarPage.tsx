import React from "react"

import CalendarEvents from "~uiComponents/CalendarEvents"
import CalendarsList from "~uiComponents/CalendarsList"
import NewEvent from "~uiComponents/NewEvent"

const CalendarPage = () => {
  return (
    <>
      <CalendarEvents
        timeMin={new Date(
          new Date().setDate(new Date().getDate() - new Date().getDay() + 1)
        ).toISOString()}
        timeMax={new Date(
          new Date().setDate(new Date().getDate() - new Date().getDay() + 7)
        ).toISOString()}
      />
      <CalendarsList />
      <NewEvent />
    </>
  )
}

export default CalendarPage
