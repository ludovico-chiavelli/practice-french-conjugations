import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { StatsContext } from "../App";

export const Results = observer(() => {
    const stats = useContext(StatsContext)
    const review = stats.getResponses().map(res => {
        return(
        <tr key={res["verb"]} className="text-center text-sm">
            <td>{res["verb"]}</td>
            {
                res["isRight"] ? <td className="text-green-600">{res["providedAns"]}</td> : <td className="text-red-600">{res["providedAns"]}</td>
            }
            <td>{res["conjugatedVerb"]}</td>
        </tr>
        )
    })

    const amountGotRight = stats.getResponses().map(res => res["isRight"]).filter(item => item).length
    const amountQs = stats.getResponses().length

    const message = () => { 
        switch(true) {
            case(amountGotRight < parseInt(amountQs * 0.5)):
                return <h1>{`Keep practicing! You got ${amountGotRight}/${amountQs}`}</h1>

            case(amountGotRight > parseInt(amountQs * 0.6)):
                return <h1>{`Great! You got ${amountGotRight}/${amountQs}`}</h1>
            
            case(amountGotRight > parseInt(amountQs * 0.8)):
                return <h1>{`Very good! You got ${amountGotRight}/${amountQs}`}</h1>
            case(amountGotRight === amountQs):
                return <h1>{`Perfect! You got ${amountGotRight}/${amountQs}`}</h1>
            
            default:
                break
        }
    }

    return(
        <section className="h-full flex flex-col justify-center items-center space-y-10">
            <h1 className="text-4xl">
            {
                message()
            }
            </h1>
            <table className="w-72 table-auto">
                <tbody>
                    <tr>
                        <th>Verb</th>
                        <th>Response</th>
                        <th>Answer</th>
                    </tr>
                    { review }
                </tbody>
            </table>
            <Link to="/options">
                <button className="rounded-md bg-[#197278] text-[#EDDDD4] text-2xl py-1 px-2">
                    Go Again!
                </button>
            </Link>
        </section>
    )
})