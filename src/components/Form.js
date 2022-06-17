import React from "react"

export const Form = () => {
    return(
        <form className="w-3/5 flex flex-col">
            <label for="verb">(verb)</label>
            <input type="text" id="verb" name="verb" className="rounded-t-md bg-black opacity-50"></input>
        </form>
    )
}