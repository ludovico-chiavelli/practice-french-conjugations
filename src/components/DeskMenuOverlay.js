import React from "react";

export const DeskMenuOverlay = ({ tensesItems }) => {
    return(
        <div className="fixed h-52 inset-x-0 bottom-0 rounded-t-md bg-[#EDDDD4] overflow-scroll" onClick={(e) => {e.stopPropagation();}}>
            {tensesItems}
        </div>
    )
}