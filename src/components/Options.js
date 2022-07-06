import React from "react";

import { PreferencesBtn, SelectBtn } from ".";

export const Options = () => {
    const tenses = [
        "Present", 
        "Imperfect",
        "Simple-past",
        "Perfect-tense",
        "Pluperfect",
        "Conditional Present",
        "Present Subjunctive",
        "Imperect Subjunctive"
    ]

    const categories = [
        "Regular ER",
        "Regular IR",
        "Regular RE",
        "Stem-changing and Irregular",
    ]

    const pronouns = [
        "Je",
        "Tu",
        "Il/Elle/On",
        "Nous",
        "Vous",
        "Ils/Elles",
    ]

    const selectionOfVerbs = [
        "All verbs",
        "Most common verbs"
    ]

    const numWords = [
        "10",
        "20",
        "40",
        "100"
    ]

    return(
        <section className="h-full w-4/5 md:max-w-4xl">
            <div>
                <h1 className="my-10 text-4xl text-center">Conjugation Drill</h1>
                <PreferencesBtn title="Tenses" options={tenses}/>
                <PreferencesBtn title="Categories" options={categories}/>
                <PreferencesBtn title="Pronouns" options={pronouns}/>
            </div>
            <div className="mt-10">
                <h3>Verbs</h3>
                <SelectBtn options={selectionOfVerbs}/>
            </div>
            <div className="my-10">
                <h3>Length</h3>
                <SelectBtn options={numWords}/>
            </div>
        </section>
    )
}