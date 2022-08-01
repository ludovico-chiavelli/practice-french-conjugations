import React from "react";

import {
    Switch,
    Route,
  } from "react-router-dom";

import { Navbar, Options, ExerciseDrill, Results } from "./"

export const Container = () => {
    return(
        <div className="h-screen w-screen bg-[#283D3B]">
            <Navbar/>
            <div className="mt-8 mx-auto sm:static w-10/12 sm:max-w-3xl sm:h-5/6 sm:mx-auto sm:mt-10 rounded-md flex justify-center items-center bg-[#EDDDD4] overflow-y-auto">
                <Switch>
                    <Route path="/results" component={Results}/>
                    <Route path="/exerciseDrill" component={ExerciseDrill}/>
                    <Route path="/" component={Options}/>
                </Switch>
            </div>
        </div>
    )
}