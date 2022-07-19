import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import { BtnContent, Dropdown } from ".";

export const PreferencesBtn = observer(({ type, checks, options }) => {
    const [show, setShow] = useState(false);

    const title = type[0] + type.slice(1).toLowerCase()

    const handleClick = () => {
        setShow(!show)
    }

    return(
        <div className="sm:relative first:mt-4 my-4">
            <button className="h-20 w-full ring-2 ring-[#197278]/30 rounded-md px-4 py-2 flex flex-col justify-around" onClick={handleClick}>
                <h3 className="w-full text-left text-[#197278] text-lg font-bold">{title}</h3>
                <BtnContent checks={checks} type={type}/>
            </button>
            { show && <Dropdown options={options} show={show} onClick={handleClick} checks={checks} type={type}/>}
        </div>
    )
})