import React, { useEffect, useState, useRef } from "react";
import { observer } from "mobx-react-lite";

import { BtnContent, Dropdown } from ".";

export const PreferencesBtn = observer(({ type, checks, options }) => {
    const menuRef = useRef(null);
    const [listening, setListening] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const title = type[0] + type.slice(1).toLowerCase()

    useEffect(() => {
        if (listening) return;
        if (!menuRef.current) return;
        setListening(true);
        [`click`, `touchstart`].forEach((type) => {
          document.addEventListener(`click`, (evt) => {
            if (menuRef.current.contains(evt.target)) return;
            setIsOpen(false);
          });
        });
      }, [ listening ])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div className="sm:relative first:mt-4 my-4" ref={menuRef}>
            <button className="h-20 w-full ring-2 ring-[#197278]/30 rounded-md px-4 py-2 flex flex-col justify-around" onClick={handleClick}>
                <h3 className="w-full text-left text-[#197278] text-lg font-bold">{title}</h3>
                <BtnContent checks={checks} type={type}/>
            </button>
            { isOpen && <Dropdown options={options} handleClickOutside={handleClick} checks={checks} type={type}/>}
        </div>
    )
})