import React from "react";
import { observer } from "mobx-react-lite";

export const BtnContent = observer(({ checks, type }) => {
    let selected = ""
    const placeholderText = `Select ${type.toLowerCase()}`
    Object.keys(checks).forEach(item => {
        if (checks[item]) {
            selected = selected + item + " "
        }
    })
    return(
        <p className="max-w-full text-left overflow-hidden whitespace-nowrap text-ellipsis text-black/40">
            { selected || placeholderText}
        </p>
    )
})