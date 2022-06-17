import React from "react";

import { Navbar } from "./"

export const Container = ({ children }) => {
    return(
        <div className="h-full">
            <Navbar/>
            <div className="flex justify-center">
                <div className="h-full w-8/12 mt-10 rounded-md" style={{backgroundColor: '#EDDDD4'}}>
                    hello
                </div>
            </div>
        </div>
    )
}