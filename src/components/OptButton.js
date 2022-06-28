import React from "react"

export const OptButton = ({ title, children }) => {
    return(
        <button className="h-20 w-full ring-2 ring-[#197278]/30 rounded-md px-4 py-2">
            <h3 className="w-full text-left text-[#197278] text-base font-bold">{title}</h3>
            <p className="w-full text-left overflow-hidden text-ellipsis">{children}</p>
        </button>
    )
}