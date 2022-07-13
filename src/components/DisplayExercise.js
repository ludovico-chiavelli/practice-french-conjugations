import React, { useState } from "react";

export const DisplayExercise = ({exercises}) => {
    const [value, setValue] = useState('')
    const [currExec, setCurrExec] = useState(exercises[0])
    const [execIndex, setExecIndex] = useState(0)

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            console.log(currExec)
            console.log(execIndex)
            execIndex < exercises.length - 1 ? setExecIndex(execIndex + 1) : setExecIndex(0)
            setCurrExec(exercises[execIndex])
            setValue('')
        }
      }
    
      const handleChange = (e) => {
        setValue(e.target.value)
      }

    return(
        <div>
            <div className="text-center">{currExec.tense}</div>
                <div className="flex justify-center">
                <span>{currExec.pronoun}</span>
                <input value={value} onChange={handleChange} type="text" onKeyDown={handleKeyPress}/>
            </div>
        </div>
    )
}