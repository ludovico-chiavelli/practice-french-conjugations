import React, { useContext }from "react";
import { Link } from "react-router-dom";

import { PreferencesBtn, SelectBtn } from ".";

import { OptionsContext } from "../App";


export const Options = () => {
    const drillOptions = useContext(OptionsContext)

    return(
        <section className="h-full w-4/5 md:max-w-4xl">
            <div>
                <h1 className="my-10 text-4xl text-center">Conjugation Drill</h1>
                <PreferencesBtn type="TENSES" checks={drillOptions.tenses} options={Object.keys(drillOptions.tenses)}/>
                <PreferencesBtn type="CATEGORIES" checks={drillOptions.categories} options={Object.keys(drillOptions.categories)}/>
                <PreferencesBtn type="PRONOUNS" checks={drillOptions.pronouns} options={Object.keys(drillOptions.pronouns)}/>
            </div>
            <div className="mt-10">
                <h3>Verbs</h3>
                <SelectBtn type="VERBS" options={Object.keys(drillOptions.selectionOfVerbs)}/>
            </div>
            <div className="my-10">
                <h3>Length</h3>
                <SelectBtn type="AMOUNT" options={Object.keys(drillOptions.numWords)}/>
            </div>
            <Link to="/exercise">Start drill</Link>
        </section>
    )
}