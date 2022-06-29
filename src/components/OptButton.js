import React, { useState } from "react"

import { Checkbox } from "./Checkbox";

export const OptButton = ({ tenses, title }) => {
    const [show, setShow] = useState(false);
    const [checks, setChecks] = useState(Object.fromEntries(tenses.map(tense => [tense, false])));

    const handleOptionChange = (cbID) => {
        console.log(checks)
        const value = !checks[cbID]
        setChecks({...checks, [cbID]: value})
    }

    const blurb = () => {
        let selected = ""
        Object.keys(checks).forEach(tense => {
            if (checks[tense]) {
                selected = selected + tense + " "
            }
        })

        return(
            <p className="max-w-full text-left overflow-hidden whitespace-nowrap text-ellipsis text-black/40">
                {selected}
            </p>
        )
    }

    const tensesItems = tenses.map((tense) => 
        <Checkbox checked={checks[tense]}  tense={tense} onChange={handleOptionChange}/>
    )

    return(
        <div>
            <button className="h-16 w-full ring-2 ring-[#197278]/30 rounded-md px-4 py-2 flex flex-col justify-between" onClick={() => setShow(!show)}>
                <h3 className="w-full text-left text-[#197278] text-base font-bold">{title}</h3>
                {blurb()}
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