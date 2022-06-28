import React from "react";

import { OptButton } from "./OptButton";

export const Options = () => {
    const tenses = ["present", "past participle"]

    return(
        <section className="w-4/5 md:max-w-4xl">
            <h1>Conjugation Drill</h1>
            <OptButton title="Tenses" tenses={tenses}>
                something
            </OptButton>
        </section>
    )
}