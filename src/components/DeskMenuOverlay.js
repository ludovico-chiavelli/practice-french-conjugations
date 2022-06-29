import React from "react";

export const DeskMenuOverlay = ({ items }) => {
    return(
        <div className="absolute h-40 w-full z-10 mt-2 rounded-md bg-[#EDDDD4] drop-shadow-lg overflow-scroll ring-1" onClick={(e) => {e.stopPropagation();}}>
            {items}
        </div>
    )
}