import React, { useState } from "react";

export const verbsBtn = ({ options }) => {
    const [sValue, setSValue] = useState(options[0])

    const items = options.map((option) => <option value={option}>{option}</option>)

    return(
        <selection value={sValue}>
            {items}
        </selection>
    )
}