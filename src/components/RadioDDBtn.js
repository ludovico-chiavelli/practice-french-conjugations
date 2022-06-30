import React from "react";

import { OptBtn } from ".";

export const RadioDDBtn = ({ options }) => {
    const blurb = (selected) => {
        return(
            <h3 className="w-full text-left text-[#197278] text-base font-bold">{selected}</h3>
        )
    }

    return(
        <OptBtn blurb={blurb} options={options} btnType="radio"/>
    )
}