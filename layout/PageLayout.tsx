import { Dialog, Transition } from "@headlessui/react"
import {
  Bars3Icon,
  CalendarDaysIcon,
  QueueListIcon,
  UserIcon,
  XMarkIcon
} from "@heroicons/react/24/outline"
import { Fragment, useState } from "react"

import SideBar from "~uiComponents/SideBar"
import SideBarDesktop from "~uiComponents/SideBar"
import TopNavMobile from "~uiComponents/TopNavMobile"
import { classNames } from "~uiComponents/utils"

export default function PageLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const user = {
    name: "Emily Selman",
    email: "emily.selman@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
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
          user={user}
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
