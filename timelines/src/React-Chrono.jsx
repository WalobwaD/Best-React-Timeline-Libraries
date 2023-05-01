import React from 'react';
//react chrono imports
import {Chrono} from "react-chrono"

//react chrono component
const ReactChrono = ()=> {
    //react chrono items to be displayed
    const items = [
        {
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://google.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
        cardDetailedText: `Content descriptions can be added here.`
    },
    {
        title: "June 1941",
        cardTitle: "Operation Barbarossa",
        cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
        cardDetailedText: `Content description can be added here.`
    }
]
    //return react chrono component
    return (
        <>
            {/* React Chrono Component, takes in items as it's main prop and mode to determine whether it should display content vertically or dynamically*/ }
            <Chrono items={items} mode="VERTICAL_ALTERNATING" />
        </>


    )
}

export default ReactChrono;