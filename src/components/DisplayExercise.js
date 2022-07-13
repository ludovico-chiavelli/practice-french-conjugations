import React, { useState } from "react";

import checkAnswer from "../utils/checkAnswer";

export const DisplayExercise = ({exercises}) => {
    const [value, setValue] = useState('')
    const [execIndex, setExecIndex] = useState(0)
    const [pass, setPass] = useState(null)

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            if(!checkAnswer(exercises[execIndex].conjugatedVerb, value)) {
                setPass(<span>Incorrect answer, try again</span>)
            } else {
                execIndex < exercises.length - 1 ? setExecIndex(execIndex + 1) : setExecIndex(0)
                setValue('')
            }

        }
      }
    
      const handleChange = (e) => {
        setValue(e.target.value)
      }

    return(
        <div className="grid grid-cols-3 grid-rows-3 text-center text-lg">
            <div className="col-start-1 col-span-1 row-start-2 row-span-1 text-end pr-2">{exercises[execIndex].pronoun}</div>

            <div className="col-start-2 col-span-1 row-start-1 row-span-1">
                {exercises[execIndex].tense}
            </div>
            <div className="col-start-2 col-span-1 row-start-2 row-span-1">
                <input className="max-w-full" value={value} onChange={handleChange} type="text" onKeyDown={handleKeyPress}/>
            </div>
            <div className="col-start-2 col-end-3 row-start-3 row-span-1">
                { pass }
            </div>

            <div className="col-start-3 col-span-1 row-start-2 row-span-1 text-start pl-2">
                <span className="pl-2 text-start">({exercises[execIndex].verbToConjugate})</span>
            </div>
            { console.log(exercises[execIndex].conjugatedVerb)}
        </div>
    )
}