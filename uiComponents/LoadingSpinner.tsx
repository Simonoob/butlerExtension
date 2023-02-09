import React from "react"

const LoadingSpinner = () => {
  return (
    <div className="absolute translate-x-1/2 translate-y-1/2 left-1/2 top-1/2 ">
      <div
        className="inline-block w-8 h-8 bg-indigo-800 rounded-full animate-ping"
        role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default LoadingSpinner
