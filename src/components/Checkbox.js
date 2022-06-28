import React, { useState } from "react"

export const Checkbox = ({ tenses }) => {
    const [checked, setChecked] = useState(false);
    const tensesItems = tenses.map((tense) => 
        <div className="w-full px-2 py-1 hover:bg-[#197278]/50" onClick={() => setChecked(!checked)} key={tense}>
            <input type="checkbox" id={tense} defaultChecked={checked}/>
            <label htmlFor={tense} className="ml-2">{tense}</label>
        </div>
    )

    return(
        tensesItems
    )
}