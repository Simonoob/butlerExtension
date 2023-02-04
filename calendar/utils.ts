import axios from "axios"

import type { CalendarEvent, CalendarInfo } from "./types"

const checkAuthToken = async () => {
  const authTokenInfo = await chrome.identity.getAuthToken({})
  //@ts-ignore
  if (!authTokenInfo) {
    //open a popup window to ask for permission
    chrome.identity.getAuthToken({ interactive: true })
  }
}

const getHeaders = async () => {
  const authTokenInfo = await chrome.identity.getAuthToken({})

  //@ts-ignore
  if (!authTokenInfo) throw new Error("No auth token found")

  return {
    //@ts-ignore
    Authorization: "Bearer " + authTokenInfo.token,
    "Content-Type": "application/json"
  }
}

export const getCalendarEvents = async ({
  timeMin,
  timeMax
}: {
  timeMin: string
  timeMax: string
}): Promise<CalendarEvent[]> => {
  const url = "https://www.googleapis.com/calendar/v3/calendars/primary/events"
  await checkAuthToken()
  const headers = await getHeaders()
  const response = await axios.get(url, {
    headers,
    params: { timeMin, timeMax }
  })
  return response.data.items
}

export const getCalendarsList = async (): Promise<CalendarInfo[]> => {
  const url = "https://www.googleapis.com/calendar/v3/users/me/calendarList"
  await checkAuthToken()
  const headers = await getHeaders()
  const response = await axios.get(url, { headers })
  return response.data.items
}
