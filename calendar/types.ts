export interface CalendarInfo {
  kind: string
  etag: string
  id: string
  summary: string
  description: string
  timeZone: string
  summaryOverride: string
  colorId: string
  backgroundColor: string
  foregroundColor: string
  selected: boolean
  accessRole: string
  defaultReminders: any[]
  conferenceProperties: {
    allowedConferenceSolutionTypes: string[]
  }
}

export interface CalendarEvent {
  kind: string
  etag: string
  id: string
  status: string
  htmlLink: string
  created: string
  updated: string
  summary: string
  description: string
  location: string
  colorId: string
  creator: {
    email: string
    displayName: string
    self: boolean
  }
  organizer: {
    email: string
    displayName: string
    self: boolean
  }
  start: {
    dateTime: string
    timeZone: string
  }
  end: {
    dateTime: string
    timeZone: string
  }
  recurringEventId: string
  originalStartTime: {
    dateTime: string
    timeZone: string
  }
  iCalUID: string
  sequence: number
  reminders: {
    useDefault: boolean
  }
  source: {
    title: string
    url: string
  }
  attachments: {
    fileUrl: string
    title: string
    mimeType: string
    iconLink: string
    fileId: string
  }[]
}
