import React from "react"

export const Form = () => {
    return(
        <form className="h-3/5 w-3/5 flex flex-col justify-center items-center">
            <label for="verb">(verb)</label>
            <input type="text" id="verb" name="verb" className="rounded-t-md bg-black/10 border-b-2 mt-10" style={{borderColor: '#DB786C'}}></input>
        </form>
    )
}