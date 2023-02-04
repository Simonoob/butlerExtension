import AppSkeleton from "~layout/AppSkeleton"
import AuthButton from "~uiComponents/AuthButton"
import CalendarEvents from "~uiComponents/CalendarEvents"
import CalendarsList from "~uiComponents/CalendarsList"
import FireStoreDoc from "~uiComponents/FireStoreDoc"
import WelcomeMessage from "~uiComponents/WelcomeMessage"

export default function IndexNewtab() {
  return (
    <AppSkeleton>
      <WelcomeMessage />
      <FireStoreDoc />
      <AuthButton />
      <CalendarEvents
        timeMin={new Date(
          new Date().setDate(new Date().getDate() - new Date().getDay() + 1)
        ).toISOString()}
        timeMax={new Date(
          new Date().setDate(new Date().getDate() - new Date().getDay() + 7)
        ).toISOString()}
      />

      <CalendarsList />
    </AppSkeleton>
  )
}
