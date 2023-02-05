import { Firestore, addDoc, collection, doc } from "firebase/firestore"

interface User {
  name: string
  email: string
  eventSequences: Array<{
    events: Array<Event | Wait>
  }>
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

const createUser = async (firestoreInstance: Firestore, user: User) => {
  try {
    const usersRef = collection(firestoreInstance, "users")
    const response = await addDoc(usersRef, user)
    console.log("User created with ID: ", response.id)
    return response.id
  } catch (error) {
    console.error("Error creating user: ", error)
    return error
  }
}

const addTimelineToUser = async (
  firestoreInstance: Firestore,
  userId: string,
  timeline: Timeline
) => {
  try {
    const userRef = doc(firestoreInstance, `users/${userId}`)
    const timelinesRef = collection(userRef, "timelines")
    const response = await addDoc(timelinesRef, timeline)
    console.log("Timeline created with ID: ", response.id)
    return response.id
  } catch (error) {
    console.error("Error adding timeline to user: ", error)
    return error
  }
}
