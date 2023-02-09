import { Bars3Icon } from "@heroicons/react/24/outline"
import React from "react"

const TopNavMobile = ({ setMobileMenuOpen }) => {
  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-indigo-600 sm:px-6 lg:px-8">
        <div>
          <img
            className="w-auto h-8"
            src="https://tailwindui.com/img/logos/mark.svg?color=white"
            alt="Your Company"
          />
        </div>
        <div>
          <button
            type="button"
            className="inline-flex items-center justify-center w-12 h-12 -mr-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopNavMobile
