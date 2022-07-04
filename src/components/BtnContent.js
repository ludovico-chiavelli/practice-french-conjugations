import React from "react";

export const BtnContent = ({ checks }) => {
    let selected = ""
    Object.keys(checks).forEach(item => {
        if (checks[item]) {
            selected = selected + item + " "
        }
    })

    return(
        <p className="max-w-full text-left overflow-hidden whitespace-nowrap text-ellipsis text-black/40">
            {selected}
        </p>
    )

}