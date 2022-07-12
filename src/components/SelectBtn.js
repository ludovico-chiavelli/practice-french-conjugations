import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { OptionsContext } from "../App";

export const SelectBtn = observer(({ type, options: optionsList }) => {
    const drillOptions = useContext(OptionsContext)
    const options = type === "VERBS" ? drillOptions.selectionOfVerbs : drillOptions.numWords
    const sValue = Object.keys(options).filter(item => options[item])

    const items = optionsList.map((option) => <option value={option} onClick={() => drillOptions.selectOptions(type, option)}>{option}</option>)

    return(
        <select value={sValue} className="h-12 w-56 ring-2 ring-[#197278]/30 rounded-md px-4 py-2 bg-inherit">
            {items}
        </select>
    )
})