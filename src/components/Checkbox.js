import React, { useContext } from "react"

import { observer } from "mobx-react-lite"

import { OptionsContext } from "../App"

export const Checkbox = observer(({ type, checked, item }) => {
    const drillOptions = useContext(OptionsContext)

    return(
        <div className="w-full px-2 py-1 hover:bg-[#197278]/50" onClick={() => drillOptions.selectOptions(type, item)} key={item}>
            <input type="checkbox" id={item} checked={checked} readOnly/>
            <label htmlFor={item} className="ml-2" onClick={(e) => e.preventDefault()}>{item}</label>
        </div>
    )
})