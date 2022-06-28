import React, { useState } from "react"

import { Checkbox } from "./Checkbox";

export const OptButton = ({ tenses, title, children }) => {
    const [show, setShow] = useState(false);

    const tensesItems = tenses.map((tense) => 
        <Checkbox tense={tense}/>
    )

    return(
        <div>
            <button className="h-20 w-full ring-2 ring-[#197278]/30 rounded-md px-4 py-2" onClick={() => setShow(!show)}>
                <h3 className="w-full text-left text-[#197278] text-base font-bold">{title}</h3>
                <p className="w-full text-left overflow-hidden text-ellipsis">{children}</p>
            </button>
            {
                show && 
                <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShow(!show)}>
                    <div className="fixed h-52 inset-x-0 bottom-0 rounded-t-md bg-[#EDDDD4] overflow-scroll" onClick={(e) => {e.stopPropagation();}}>
                        {tensesItems}
                    </div>
                </div>
            }
        </div>
    )
}