import React, { useContext, useEffect } from "react";

import { OptionsContext, StatsContext } from "../App";

import generateExercises from "../utils/generateExercise";
import { DisplayExercise } from "./DisplayExercise";

export const ExerciseDrill = () => {
  const drillOptions = useContext(OptionsContext)
  const stats = useContext(StatsContext)
  const exercises = generateExercises(drillOptions)
  
  useEffect(() => {
    stats.initializeResponses(exercises)
  }, [ stats, exercises ])

  return(
    <section className="h-full w-4/5 md:max-w-4xl flex flex-col justify-center">
      <DisplayExercise exercises={exercises}/>
    </section>
  )
}