import React, { useState } from "react";

import checkAnswer from "../utils/checkAnswer";

export const DisplayExercise = ({exercises}) => {
    const [value, setValue] = useState('')
    const [execIndex, setExecIndex] = useState(0)

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            execIndex < exercises.length - 1 ? setExecIndex(execIndex + 1) : setExecIndex(0)
            setValue('')
        }
      }
    
      const handleChange = (e) => {
        setValue(e.target.value)
      }

    return(
        <div className="flex justify-center">
            <div className="grow flex flex-col justify-end">
                <span className="pr-2 text-end">{exercises[execIndex].pronoun}</span>
            </div>
            <div className="grow-0 text-center">
                <div>
                    {exercises[execIndex].tense}
                </div>
                <input value={value} onChange={handleChange} type="text" onKeyDown={handleKeyPress}/>
            </div>
            <div className="grow flex flex-col justify-end">
                <span className="pl-2 text-start">({exercises[execIndex].verb})</span>
            </div>
        </div>
    )
}