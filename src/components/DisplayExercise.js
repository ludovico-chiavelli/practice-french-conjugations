import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import checkAnswer from "../utils/checkAnswer";

export const DisplayExercise = ({exercises}) => {
    const [value, setValue] = useState('')
    const [execIndex, setExecIndex] = useState(0)
    const [pass, setPass] = useState(null)
    const [attempt, setAttempt] = useState(1)
    const [completed, setCompleted] = useState(false)
    
    const handleKeyPress = (e) => {
        if(e.key === "Enter" && attempt === 1){
            if(!checkAnswer(exercises[execIndex].conjugatedVerb, value)) {
                setPass(exercises[execIndex].conjugatedVerb)
                setAttempt(2)
            } else {
                handleContinue()
            }

        } else if (e.key === "Enter" && attempt === 2) {
            setAttempt(1)
            handleContinue()
        }
      }
    
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleCompletion = () => {
        setCompleted(true)
    }

    const handleContinue = () => {
        setPass(null)
        setValue('')
        execIndex < exercises.length - 1 ? setExecIndex(execIndex + 1) : handleCompletion()
    }


    return(
        <div className="space-y-2">
            <div className="text-center">
                {exercises[execIndex].tense}
            </div>

            <div className="flex">
                <span className="grow text-right pr-2">{exercises[execIndex].pronoun}</span>
                <input className="grow-0 px-2" style={{width: (exercises[execIndex].verbToConjugate.length + 4).toString() + "ch"}} value={value} onChange={handleChange} type="text" onKeyDown={handleKeyPress}/>
                <span className="grow pl-2 text-start">({exercises[execIndex].verbToConjugate})</span>
            </div>

            <div className="text-center">
                { pass }
            </div>

            { completed && <Redirect to="/results"/>}
        </div>
    )
}