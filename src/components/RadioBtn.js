import React, { useState, useEffect } from "react"

import { DeskMenuOverlay, MobileMenuOverlay, Radio } from ".";

export const RadioBtn = ({ options, title }) => {
    const [show, setShow] = useState(false);
    const [checks, setChecks] = useState(Object.fromEntries(options.map(item => [item, false])));
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        updatePredicate()
        window.addEventListener("resize", updatePredicate)

        return () => window.removeEventListener("resize", updatePredicate)
    })

    const handleOptionChange = (cbID) => {
        for (let key in checks) {
            checks[key] = false
        }

        setChecks({...checks, [cbID]: true})
    }

    const handleButtonClick = () => {
        setShow(!show)
    }

    const updatePredicate = () => {
        setIsDesktop(window.innerWidth > 640)
    }

    const chooseMenu = () => {
        if (show) {
            if (isDesktop) {
                return(
                    <DeskMenuOverlay items={items}/>
                )
            } else {
                return(
                    <MobileMenuOverlay onClick={handleButtonClick} items={items} onOptionChange={handleOptionChange} checks={checks}/>
                )
            }
        }
    }

    const items = options.map((item) => 
        <Radio item={item} onChange={handleOptionChange}/>
    )

    const blurb = () => {
        const selected = Object.keys(checks).find(key => checks[key] === true)

        return(
            <h3 className="w-full text-left text-[#197278] text-base font-bold">{selected}</h3>
        )
    }

    return(
        <div className="sm:relative first:mt-4 my-4">
            <button className="h-16 w-full ring-2 ring-[#197278]/30 rounded-md px-4 py-2 flex flex-col justify-between" onClick={() => setShow(!show)}>
                {blurb()}
            </button>
            {
                chooseMenu() 
            }
        </div>
    )
}