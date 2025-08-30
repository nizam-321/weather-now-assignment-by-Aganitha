import React from 'react'

const ErrorMessage = ({ message }) => {
  return (
    <p className='text-red-600 font-medium mt-2'>
         {message}
    </p>
  )
}

export default ErrorMessage;