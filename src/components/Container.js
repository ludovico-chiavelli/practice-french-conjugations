import React from "react";

import {
    Switch,
    Route,
  } from "react-router-dom";

import { Navbar, Options } from "./"

export const Container = () => {
    return(
        <div className="h-full min-w-[400px] bg-[#283D3B]">
            <Navbar/>
            <div className="h-5/6 flex justify-center">
                <div className="w-3/4  max-w-3xl mt-10 rounded-md flex justify-center items-center bg-[#EDDDD4] overflow-y-auto">
                    <Switch>
                        <Route path="/drill">
                            <p>dab</p>
                        </Route>
                        <Route path="/" component={Options}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}