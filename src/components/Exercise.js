import React, { useContext } from "react";

import { OptionsContext } from "../App";

import generateExercises from "../utils/generateExercise";
import { DisplayExercise } from "./DisplayExercise";

export const Exercise = () => {
  const drillOptions = useContext(OptionsContext)
  const exercises = generateExercises(drillOptions)

  return(
    <section className="h-full w-4/5 md:max-w-4xl flex flex-col justify-center">
      <DisplayExercise exercises={exercises}/>
    </section>
  )
}