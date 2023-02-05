import type { User } from "firebase/auth"
import { collection, doc, getFirestore, setDoc } from "firebase/firestore"

import { app } from "~firebase"

interface UserInfo {
  displayName: string
  timelines: Array<{
    events: Array<Event | Wait>
  }>
  selectedCalendars: Array<string>
}

interface Event {
  data: {
    summary: string
    description?: string
    duration: number
    reminders?: {
      useDefault: boolean
    }
  }
}

interface Wait {
  type: "wait"
  time: number
}

interface Timeline {
  events: Array<Event | Wait>
}

export const createUser = async (user: User) => {
  const userData: UserInfo = {
    displayName: user.displayName,
    timelines: [],
    selectedCalendars: []
  }
  try {
    const usersRef = collection(getFirestore(app), "users")
    await setDoc(doc(usersRef, user.uid), userData)
  } catch (error) {
    console.error("Error creating user: ", error)
    return error
  }
}

export const addTimelineToUser = async (
  userId: string,
  timeline: Timeline,
  timelineId: string
) => {
  try {
    const userRef = doc(getFirestore(app), `users/${userId}`)
    const timelinesRef = collection(userRef, "timelines")
    await setDoc(doc(timelinesRef, timelineId), timeline)
  } catch (error) {
    console.error("Error adding timeline to user: ", error)
    return error
  }
}
