import { makeAutoObservable } from "mobx"

class OptionsStore {
    tenses = {
        "Present": false,
        "Imperfect": false,
        "Simple-past": false,
        "Perfect-tense": false,
        "Pluperfect": false,
        "Conditional Present": false,
        "Present Subjunctive": false,
        "Imperect Subjunctive": false
    }

    categories = {
        "Regular ER": false,
        "Regular IR": false,
        "Regular RE": false,
        "Stem-changing and Irregular": false,
    }

    pronouns = {
        "Je": false,
        "Tu": false,
        "Il/Elle/On": false,
        "Nous": false,
        "Vous": false,
        "Ils/Elles": false,
    }
    

    selectionOfVerbs = {
        "All verbs": false,
        "Most common verbs": false,
    }
    

    numWords = {
        "10": false,
        "20": false,
        "40": false,
        "100": false,
    }
    

    constructor() {
        makeAutoObservable(this)
    }

    selectOptions(type, cbID) {
        switch(type){
            case "TENSES":
                this.tenses[cbID] = !this.tenses[cbID]
                break
            case "CATEGORIES":
                this.categories[cbID] = !this.categories[cbID]
                break
            case "PRONOUNS":
                this.pronouns[cbID] = !this.pronouns[cbID]
                break
            default:
                break
        }
    }
}

const drillOptions = new OptionsStore()

export default drillOptions