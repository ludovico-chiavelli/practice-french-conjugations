import React, { useState } from "react";

export const SelectBtn = ({ options }) => {
    const [sValue, setSValue] = useState(options[0])

    const handleClick = (option) => {
        setSValue(option)
    }

    const items = options.map((option) => <option value={option} onClick={() => handleClick(option)}>{option}</option>)

    return(
        <select value={sValue} className="h-12 w-56 ring-2 ring-[#197278]/30 rounded-md px-4 py-2 bg-inherit">
            {items}
        </select>
    )
}