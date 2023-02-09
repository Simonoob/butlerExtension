import { CalendarDaysIcon, QueueListIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

import { useFirebase } from "~firebase/hook"
import { useFirestoreDoc } from "~firebase/use-firestore-doc"
import SideBar from "~uiComponents/SideBar"
import SideBarDesktop from "~uiComponents/SideBar"
import TopNavMobile from "~uiComponents/TopNavMobile"
import { classNames } from "~uiComponents/utils"

export default function PageLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { user } = useFirebase()
  const { data: userInfo } = useFirestoreDoc(`users/${user?.uid}`)
  const navigation = [
    { name: "Calendar", href: "#", icon: CalendarDaysIcon, current: true },
    { name: "Timelines", href: "#", icon: QueueListIcon, current: false }
  ]

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full overflow-hidden">
        ```
      */}
      <div className="flex h-full">
        {/* Static sidebar for desktop */}
        <SideBar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          user={{
            ...user,
            ...userInfo
          }}
          navigation={navigation}
        />

        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          {/* Mobile top navigation */}
          <TopNavMobile setMobileMenuOpen={setMobileMenuOpen} />
          <main className="flex flex-1 p-5 overflow-hidden">
            {/* Primary column */}
            <section
              aria-labelledby="primary-heading"
              className="flex flex-col flex-1 h-full min-w-0 overflow-y-auto lg:order-last">
              {children}
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
