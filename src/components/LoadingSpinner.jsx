import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="mt-12">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto" />
      <p className="text-white text-center mt-2">Loading...</p>
    </div>
  )
}

export default LoadingSpinner