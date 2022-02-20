import React from "react";
import './Input.css'

export const Input = ({type = "text", value,placeholder,onChange,isChecked,error}) => {
    return (
        <input
            className={error ? "danger" : ""}
            required={true}
            checked={isChecked}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
        />
    )
}