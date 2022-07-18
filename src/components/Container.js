import React from "react";

import {
    Switch,
    Route,
  } from "react-router-dom";

import { Navbar, Options, Exercise, Results } from "./"

export const Container = () => {
    return(
        <div className="h-screen w-screen bg-[#283D3B]">
            <Navbar/>
            <div className="h-4/6 flex justify-center">
                <div className="w-10/12 sm:max-w-3xl mt-5 sm:mt-10 rounded-md flex justify-center items-center bg-[#EDDDD4] overflow-y-auto">
                    <Switch>
                        <Route path="/results" component={Results}/>
                        <Route path="/exercise" component={Exercise}/>
                        <Route path="/" component={Options}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}