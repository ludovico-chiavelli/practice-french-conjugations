import React from "react";

import { Navbar } from "./"

export const Container = () => {
    return(
        <div className="h-full" style={{backgroundColor: '#283D3B'}}>
            <Navbar/>
            <div className="h-5/6 flex justify-center">
                <div className="w-3/4  max-w-2xl mt-10 rounded-md" style={{backgroundColor: '#EDDDD4'}}>
                    hello
                </div>
            </div>
        </div>
    )
}