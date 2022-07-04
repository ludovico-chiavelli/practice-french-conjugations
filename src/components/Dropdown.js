import React, { useState,useEffect } from "react";

export const Dropdown = ({ options, show, onClick }) => {
    const [isDesktop, setIsDesktop] = useState(false)

    const items = options.map((option) => 
        <option value={option}>{option}</option>
    )

    useEffect(() => {
        updatePredicate()
        window.addEventListener("resize", updatePredicate)

        return () => window.removeEventListener("resize", updatePredicate)
    })

    const updatePredicate = () => {
        setIsDesktop(window.innerWidth > 640)
    }

    const chooseMenu = () => {
        if (show && isDesktop) {
            return(
                <div className="absolute h-40 w-full z-10 mt-2 rounded-md bg-[#EDDDD4] drop-shadow-lg overflow-scroll ring-1">
                    <select>
                        {items}
                    </select>
                </div>
            ) 
        } else {
            return(
                <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClick}>
                    <div className="fixed h-52 inset-x-0 bottom-0 rounded-t-md bg-[#EDDDD4] overflow-scroll" onClick={(e) => {e.stopPropagation();}}>
                        <select>
                            {items}
                        </select>
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
}