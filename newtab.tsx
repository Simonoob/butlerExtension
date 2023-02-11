import AppSkeleton from "~layout/AppSkeleton"
import CalendarPage from "~pages/CalendarPage"
import SettingsPage from "~pages/SettingsPage"
import TimelinesPage from "~pages/TimelinesPage"
import usePageStore from "~stores/pageStore"

export default function IndexNewtab() {
  const { active: activePage } = usePageStore()

  return (
    <AppSkeleton>
      <h1 className="text-lg text-red-600">{activePage}</h1>
      {activePage === "calendar" && <CalendarPage />}
      {activePage === "timelines" && <TimelinesPage />}
      {activePage === "settings" && <SettingsPage />}
    </AppSkeleton>
  )
}
