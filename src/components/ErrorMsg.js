import React, { useEffect } from "react";

export const ErrorMsg = ({ show, setShow}) => {
    useEffect(() => {
        setTimeout(() => {
            setShow(!show)
        }, 2000)
    }, [show, setShow])

    return(
        <div>
            "Please select something for all options"
        </div>
    )
}