import React from "react"

export const Checkbox = ({ checked, tense, onChange }) => {
    return(
        <div className="w-full px-2 py-1 hover:bg-[#197278]/50" onClick={() => onChange(tense)} key={tense}>
            <input type="checkbox" id={tense} checked={checked} readOnly/>
            <label htmlFor={tense} className="ml-2">{tense}</label>
        </div>
    )
}