import React from "react"

export const Checkbox = ({ checked, item, onChange }) => {
    return(
        <div className="w-full px-2 py-1 hover:bg-[#197278]/50" onClick={() => onChange(item)} key={item}>
            <input type="checkbox" id={item} checked={checked} readOnly/>
            <label htmlFor={item} className="ml-2" onClick={(e) => e.preventDefault()}>{item}</label>
        </div>
    )
}