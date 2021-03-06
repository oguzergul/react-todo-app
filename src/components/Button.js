import React from 'react'

export const Button = ({ children, onClick, id }) => {
    return (
        <button
            id={id}
            className="ml-2 inline-flex justify-center items-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black sm:ml-3 sm:w-auto sm:text-sm"
            onClick={onClick}>
            {children}
        </button>
    )
}
