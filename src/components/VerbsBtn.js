import React, { useState } from "react";

export const VerbsBtn = ({ options }) => {
    const [sValue, setSValue] = useState(options[0])

    const items = options.map((option) => <option value={option}>{option}</option>)

    return(
        <select value={sValue}>
            {items}
        </select>
    )
}