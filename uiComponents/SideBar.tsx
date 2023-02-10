import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import React, { Fragment } from "react"

import usePageStore, { Pages } from "~stores/pageStore"

import { classNames } from "./utils"

const SideBar = ({
  navigation,
  mobileMenuOpen,
  setMobileMenuOpen,
  user
}: {
  navigation: {
    name: Pages
    href: string
    icon: React.FC
    current: boolean
  }[]
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  user: {
    displayName: string
    email: string
    photoURL: string
  }
}) => {
  const { setActive: setActivePage } = usePageStore()
  return (
    <>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs bg-indigo-700 focus:outline-none">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <div className="absolute top-0 right-0 pt-4 -mr-12">
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setMobileMenuOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="pt-5 pb-10">
                  <div className="flex items-center flex-shrink-0 px-4">
                    <img
                      className="w-auto h-8"
                      src="https://tailwindui.com/img/logos/mark.svg?color=white"
                      alt="Your Company"
                    />
                  </div>
                  <nav aria-label="Sidebar" className="mt-10">
                    <div className="px-2 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-indigo-800 text-white"
                              : "text-indigo-100 hover:bg-indigo-800 hover:text-white",
                            "group py-2 px-3 rounded-md flex items-center text-sm font-medium"
                          )}
                          onClick={() => {
                            setActivePage(item.name)
                            setMobileMenuOpen(false)
                          }}
                          aria-current={item.current ? "page" : undefined}>
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-white"
                                : "text-indigo-300 group-hover:text-white",
                              "mr-3 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
                <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
                  {user && (
                    <a href="#" className="flex-shrink-0 block group">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block w-10 h-10 rounded-full"
                            src={user.photoURL}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-white">
                            {user.displayName}
                          </p>
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-28">
          <div className="flex flex-col flex-1 min-h-0 overflow-y-auto bg-indigo-600">
            <div className="flex-1">
              <div className="flex items-center justify-center pt-5">
                <img
                  className="w-auto h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=white"
                  alt="Your Company"
                />
              </div>
              <nav
                aria-label="Sidebar"
                className="flex flex-col items-center py-6 pt-0 space-y-3">
                <div className="flex-1 w-full px-2 mt-6 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-indigo-800 text-white"
                          : "text-indigo-100 hover:bg-indigo-800 hover:text-white",
                        "group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
                      )}
                      onClick={() => setActivePage(item.name)}
                      aria-current={item.current ? "page" : undefined}>
                      <item.icon
                        //@ts-ignore
                        className={classNames(
                          item.current
                            ? "text-white"
                            : "text-indigo-300 group-hover:text-white",
                          "h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      <span className="mt-2">{item.name}</span>
                    </a>
                  ))}
                </div>
              </nav>
            </div>
            <div className="flex flex-shrink-0 pb-5">
              {user && (
                <a href="#" className="flex-shrink-0 w-full">
                  <img
                    className="block w-10 h-10 mx-auto rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                  <div className="sr-only">
                    <p>{user.displayName}</p>
                    <p>Account settings</p>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
