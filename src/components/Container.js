import React from "react";

import { Navbar, Options } from "./"

export const Container = () => {
    return(
        <div className="h-full min-w-[400px] bg-[#283D3B]">
            <Navbar/>
            <div className="h-5/6 flex justify-center">
                <div className="w-3/4  max-w-3xl mt-10 rounded-md flex justify-center items-center bg-[#EDDDD4] overflow-y-auto">
                    <Options/>
                </div>
            </div>
        </div>
    )
}