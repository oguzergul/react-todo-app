import React from "react";

export const Input = ({ type = "text", value, placeholder, onChange, isChecked, error, id }) => {
    return (
        <input
            id={id}
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
