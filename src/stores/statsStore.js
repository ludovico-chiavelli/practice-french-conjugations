import { makeAutoObservable } from "mobx"

class StatsStore {
    constructor() {
        makeAutoObservable(this)
        this.responses = null
    }

    getResponses() {
        if(this.responses === null) {
            throw new Error("StatsStore is empty")
        } else {
            return this.responses
        }
    }

    initializeResponses(exercises) {
        this.responses = []

        for(let i = 0; i < exercises.length; i++) {
            this.responses.push(
                {
                    "verb": exercises[i].verbToConjugate,
                    "conjugatedVerb": exercises[i].conjugatedVerb,
                    "providedAns": null,
                    "isRight": null,
                }
            )
        }
    }

    setResponse(ind, ans, isRight) {
        this.responses[ind].providedAns = ans
        this.responses[ind].isRight = isRight
    }
}

const stats = new StatsStore()

export default stats