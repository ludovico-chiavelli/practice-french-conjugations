import React from "react"

export const Form = () => {
    return(
        <form className="h-3/5 w-3/5 flex flex-col justify-center items-center">
            <label for="verb" className="text-3xl">(verb)</label>
            <input type="text" id="verb" name="verb" className="md:h-10 md:w-72 md:scale-150 rounded-t-md bg-black/10 border-b-2 mt-10" style={{borderColor: '#DB786C'}}></input>
        </form>
    )
}