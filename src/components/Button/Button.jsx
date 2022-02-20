import React from 'react'
import "./Button.scss"

export const Button = ({children,disabled,onClick,name}) => {
    return (
        <button
            id="button"
            className="primary"
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
    )
}
