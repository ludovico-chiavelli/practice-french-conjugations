import React, { useState, useEffect} from "react";
import { observer } from "mobx-react-lite"

import { Checkbox } from "./";

export const Dropdown = observer(({ type, options, checks, handleClickOutside}) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 640)

    const items = options.map((item) => 
        <Checkbox checked={checks[item]}  item={item} type={type}/>
    )

    useEffect(() => {
        updatePredicate()
        window.addEventListener("resize", updatePredicate)

        return () => {
            window.removeEventListener("resize", updatePredicate)
        }
    })

    const updatePredicate = () => {
        setIsDesktop(window.innerWidth > 640)
    }

    const chooseMenu = () => {
        if (isDesktop) {
            return(
                <div className="absolute h-40 w-full z-10 mt-2 rounded-md bg-[#EDDDD4] drop-shadow-lg overflow-y-scroll ring-1">
                    {items}
                </div>
            ) 
        } else {
            return(
                <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleClickOutside}>
                    <div className="fixed h-52 inset-x-0 bottom-0 rounded-t-md bg-[#EDDDD4] overflow-scroll" onClick={(e) => {e.stopPropagation();}}>
                        {items}
                    </div>
                </div>
            )
        }
    }

    return(
        <div>
            { chooseMenu() }
        </div>
    )
})