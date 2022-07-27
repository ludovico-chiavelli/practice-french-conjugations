import React from "react";

export const AccentBtns = ({ insertLetter }) => {
    const accentedLetters = ["â","à","ä","é","è","ê","ë","î","ï","ö","ô","u","ù","û","ü","ÿ"]
    return(
        <div className="w-full h-44 flex items-stretch justify-center space-x-4 flex-wrap">
            {accentedLetters.map(letter => (
                <button onClick={() => insertLetter(letter)} className="ring-2 ring-[#197278]/30 rounded-md px-2 leading-6 mt-4">
                    {letter}
                </button>
                )
            )}
        </div>
    )
}