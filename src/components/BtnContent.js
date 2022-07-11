import React from "react";
import { observer } from "mobx-react-lite";

export const BtnContent = observer(({ checks }) => {
    let selected = ""
    Object.keys(checks).forEach(item => {
        if (checks[item]) {
            selected = selected + item + " "
        }
    })
    if (selected) {
        return(
            <p className="max-w-full text-left overflow-hidden whitespace-nowrap text-ellipsis text-black/40">
                {selected}
            </p>
        )
    } else {
        return null
    }

})