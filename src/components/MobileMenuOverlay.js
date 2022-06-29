import React from "react";

export const MobileMenuOverlay = ( { onClick, tensesItems } ) => {

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClick}>
            <div className="fixed h-52 inset-x-0 bottom-0 rounded-t-md bg-[#EDDDD4] overflow-scroll" onClick={(e) => {e.stopPropagation();}}>
                {tensesItems}
            </div>
        </div>
    )
}