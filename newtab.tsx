import AppSkeleton from "~layout/AppSkeleton"
import usePageStore from "~stores/pageStore"
import AuthButton from "~uiComponents/AuthButton"
import CalendarEvents from "~uiComponents/CalendarEvents"
import CalendarsList from "~uiComponents/CalendarsList"
import FireStoreDoc from "~uiComponents/FireStoreDoc"
import NewEvent from "~uiComponents/NewEvent"
import WelcomeMessage from "~uiComponents/WelcomeMessage"

export default function IndexNewtab() {
  const { active: activePage } = usePageStore()
  return (
    <AppSkeleton>
      <h1 className="text-lg text-red-600">{activePage}</h1>
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
      <NewEvent />
    </AppSkeleton>
  )
}
