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
        "Imperfect Subjunctive": false
    }

    categories = {
        "er": false,
        "ir": false,
        "re": false,
        "irregular": false,
    }

    pronouns = {
        "Je": false,
        "Tu": false,
        "Il/Elle/On": false,
        "Nous": false,
        "Vous": false,
        "Ils/Elles/Ons": false,
    }
    

    selectionOfVerbs = {
        "All verbs": true,
        "Most common verbs": false,
    }
    

    numWords = {
        "10": true,
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
            case "VERBS":
                this.selectionOfVerbs = Object.fromEntries(Object.keys(this.selectionOfVerbs).map(verb => verb === cbID ? [verb, true] : [verb, false]))
                break
            case "AMOUNT":
                this.numWords = Object.fromEntries(Object.keys(this.numWords).map(num => num === cbID ? [num, true] : [num, false]))
                break
            default:
                break
        }
    }

    getSelectedTenses() {
        const sTenses = Object.keys(this.tenses).filter(tense => this.tenses[tense])
        return sTenses
    }

    getSelectedCategories() {
        const sCategories = Object.keys(this.categories).filter(category => this.categories[category])
        return sCategories
    }

    getSelectedPronouns() {
        const sPronouns = Object.keys(this.pronouns).filter(pronoun => this.pronouns[pronoun])
        return sPronouns
    }

    getSelectedVerbs() {
        const sVerbs = Object.keys(this.selectionOfVerbs).filter(option => this.selectionOfVerbs[option])
        return sVerbs
    }

    getSelectedAmount() {
        const num = Object.keys(this.numWords).filter(option => this.numWords[option])[0]
        return parseInt(num)
    }
}

const drillOptions = new OptionsStore()

export default drillOptions