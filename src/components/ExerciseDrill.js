import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { OptionsContext, StatsContext } from "../App";

import generateExercises from "../utils/generateExercise";
import checkAnswer from "../utils/checkAnswer";
import { DisplayExercise } from "./DisplayExercise";

export const ExerciseDrill = () => {
  const drillOptions = useContext(OptionsContext)
  const stats = useContext(StatsContext)
  const exercises = generateExercises(drillOptions)

  const [execIndex, setExecIndex] = useState(0)
  const [attempt, setAttempt] = useState(1)
  const [pass, setPass] = useState(null)
  const [completed, setCompleted] = useState(false)
    
  
  useEffect(() => {
    stats.initializeResponses(exercises)
  }, [ stats, exercises ])
  
  const handleKeyPress = (e) => {
    const value = e.target.value
    if(e.key === "Enter" && attempt === 1){
      if(!checkAnswer(exercises[execIndex].conjugatedVerb, value)) {
        setPass(exercises[execIndex].conjugatedVerb)
        setAttempt(2)
      } else {
        handleContinue(value)
      }
      
    } else if (e.key === "Enter" && attempt === 2) {
      setAttempt(1)
      handleContinue()
    }
  }

  const handleContinue = (value) => {
    stats.setResponse(execIndex, value, checkAnswer(exercises[execIndex].conjugatedVerb, value))
    setPass(null)
    execIndex < exercises.length - 1 ? setExecIndex(execIndex + 1) : handleCompletion()
  }
  
  const handleCompletion = () => {
    setCompleted(true)
  }

  return(
    <section className="h-full w-4/5 md:max-w-4xl flex flex-col justify-center">
      <DisplayExercise exercise={exercises[execIndex]} execIndex={execIndex} pass={pass} handleKeyPress={handleKeyPress} key={execIndex}/>
      { completed && <Redirect to="/results"/>}
    </section>
  )
}