import React from "react";

import { PreferencesBtn } from ".";

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

    return(
        <section className="w-4/5 md:max-w-4xl">
            <div>
                <h1>Conjugation Drill</h1>
                <PreferencesBtn title="Tenses" options={tenses}/>
                <PreferencesBtn title="Categories" options={categories}/>
                <PreferencesBtn title="Pronouns" options={pronouns}/>
            </div>
            <div className="w-32 mt-10">
                <h3>Verbs</h3>
            </div>
        </section>
    )
}