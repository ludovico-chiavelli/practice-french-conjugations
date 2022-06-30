import React from "react";

import { OptBtn } from "./OptBtn"

export const SelectionBtn = ({ options, title }) => {
    const blurb = (checks) => {
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

    return(
        <OptBtn blurb={blurb} options={options} btnType="selection">
            <h3 className="w-full text-left text-[#197278] text-base font-bold">{title}</h3>
        </OptBtn>
    )
}