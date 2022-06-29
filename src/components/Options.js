import React from "react";

import { OptButton } from "./OptButton";

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

    return(
        <section className="w-4/5 md:max-w-4xl">
            <h1>Conjugation Drill</h1>
            <OptButton title="Tenses" options={tenses}/>
            <OptButton title="Categories" options={categories}/>
            <OptButton title="Pronouns" options={pronouns}/>
        </section>
    )
}