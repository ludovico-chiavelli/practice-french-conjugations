import React, { useState, useEffect } from "react"

import { DeskMenuOverlay, MobileMenuOverlay, Checkbox, Radio } from ".";

export const OptBtn = ({ options, blurb, children, btnType }) => {
    const [show, setShow] = useState(false);
    const [checks, setChecks] = useState(Object.fromEntries(options.map(item => [item, false])));
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        updatePredicate()
        window.addEventListener("resize", updatePredicate)

        return () => window.removeEventListener("resize", updatePredicate)
    })

    const handleOptionChange = (cbID) => {
        const value = !checks[cbID]
        setChecks({...checks, [cbID]: value})
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

    const items = options.map((item) => {
        if (btnType === "selection") {
            return <Checkbox checked={checks[item]}  item={item} onChange={handleOptionChange}/>
        } else {
            return <Radio checked={checks[item]}  item={item} onChange={handleOptionChange}/>
        }
    }
    )

    return(
        <div className="sm:relative first:mt-4 my-4">
            <button className="h-16 w-full ring-2 ring-[#197278]/30 rounded-md px-4 py-2 flex flex-col justify-around" onClick={() => setShow(!show)}>
                {children}
                {btnType === "selection" ? blurb(checks) : blurb()}
            </button>
            {
                chooseMenu() 
            }
        </div>
    )
}