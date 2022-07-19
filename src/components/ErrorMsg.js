import React, { useEffect } from "react";

export const ErrorMsg = ({ show, setShow}) => {
    useEffect(() => {
        setTimeout(() => {
            setShow(!show)
        }, 2000)
    }, [show, setShow])

    return(
        <span className="text-base">
            Please select something for all options
        </span>
    )
}