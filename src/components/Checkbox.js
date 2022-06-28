import React, { useState } from "react"

export const Checkbox = ({ tense }) => {
    const [checked, setChecked] = useState(false);

    return(
        <div className="w-full px-2 py-1 hover:bg-[#197278]/50" onClick={() => setChecked(!checked)} key={tense}>
            <input type="checkbox" id={tense} checked={checked}/>
            <label htmlFor={tense} className="ml-2">{tense}</label>
        </div>
    )
}