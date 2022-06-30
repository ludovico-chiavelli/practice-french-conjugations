import React from "react";

import { OptBtn } from ".";

export const RadioDDBtn = ({ options, title }) => {
    const blurb = (checks) => {
        return(
            <h3 className="w-full text-left text-[#197278] text-base font-bold">{title}</h3>
        )
    }

    return(
        <OptBtn blurb={blurb} options={options} btnType="selection"/>
    )
}