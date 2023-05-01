<h1 align="center">Best React Timeline Libraries.</h1>

<p>Keeping track of events and their chronological order is a crucial concept in the current dynamic world we live in. <b>Timelines</b> serve as a powerful tool to visualize the relationship between events and their occurrence. In the realm of web development, timelines are often employed to present a sequence of events, milestones, and important dates in websites and applications.</p> 
<p>If you're looking for a way to display events in a chronological order in your React Application, then this article is for you. We'll be exploring the best React timeline libraries that can help you create aesthetically pleasing and functional timelines for your projects.</p>

<h2>1. React Vertical Timeline Component</h2>
<p><a href="https://stephane-monnot.github.io/react-vertical-timeline/#/">React Vertical Timeline Component</a> is a simple and clean timeline component for ReactJS. It is a lightweight and customizable component that allows you to create a vertical timeline for your React projects.  React Vertical Timeline supports a variety of event types, including images, videos, and text, and is fully responsive, making it mobile-friendly. The library is also easy to integrate with other React components and libraries.</p>

<h3>Usage</h3>

- Install the library using npm.
    ```jsx
    npm install react-vertical-timeline-component --save
    ```
- Import the library in your React component. 
**Note:** The additional imports used in the example below are for the icons used in the timeline. You can use any icon library of your choice. In this case we picked <a href="https://material-ui.com/components/material-icons/)">Material UI</a> icons.

    ```jsx
    //React imports
    import React from 'react';
    //React Vertical Timeline Component imports
    import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
    import 'react-vertical-timeline-component/style.min.css';
    //Material UI Icons imports
    import WorkIcon from '@material-ui/icons/Work';
    import StarIcon from '@material-ui/icons/Star';
    import SchoolIcon from '@material-ui/icons/School';

    ```

- Create a React component and add the timeline elements. 
  
    ```jsx 
    // React Component called TimeLineComponent
    const TimeLineComponent = () => {
        //render the timeline
        return (
            {/*VerticalTimeline is the parent component, all VerticalTimelineElements should be wrapped inside it*/}
            <VerticalTimeline>
                {/* VerticalTimelineElement is the child component, it represents a single timeline element.*/}
                <VerticalTimelineElement
                    {/*The elements contain attributes that define their appearance and content.*/}
                    {/*Get element attributes from the library documentation. https://stephane-monnot.github.io/react-vertical-timeline/#/ */}
                    {/*All elements should have a date prop, which is a string that represents the date of the event.*/}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    {/*The icon prop is used to add an icon to the timeline element. In this case we used our choice of icon library to add an icon.*/}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
                </VerticalTimelineElement>
                {/*You can add as many VerticalTimelineElements as you want.*/}
                <VerticalTimelineElement
                    {/*insert element attributes here*/}
                >
                    {/*insert element content here*/}
                    <h3 className="vertical-timeline-element-title">Content Title Goes Here</h3>
                    <h4 className="vertical-timeline-element-subtitle">Content Subtitle Goes Here</h4>
                    <p>Content paragraph or description goes here</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        )
    }

- After following the steps and creating more VerticalTimelineElements, (content can be passed in dynamically using props), the timeline should have a similar appearance to this and is completely modifiable using CSS. Simple right?
<img src="./RVT-results.png"></img>

<h2>2. React-Chrono</h2>

<p><a href="https://react-chrono.prabhumurthy.com/introduction/getting-started.html">React-Chrono</a> If you're a fan of building object separately for your components to make your work clean and readable, React-Chrono should be your library of choice. React-Chrono is a versatile timeline component that allows developers to render beautiful timelines with ease. It is designed to be data-driven and is flexible and straightforward to use, making it ideal for developers who want to create visually stunning timelines quickly.</p>

<h3>Usage</h3>

- Install the library using npm.
    ```jsx
    npm install react-chrono --save
    ```
- Import the library in your React component.

    ```jsx
    //React imports
    import React from 'react';
    //React-Chrono imports
    import { Chrono } from "react-chrono";
    ```
- Create a React component and add the timeline elements. 
- Building the timeline, you need to create a data object that contains the timeline elements. The data object should be an array of objects, each object represents a timeline element. The object should contain the following properties: 
-  **title:** The title of the timeline element.
-  **cardTitle:** The title of the timeline element card.
-  **cardSubtitle:** The subtitle of the timeline element card.
-  **cardDetailedText:** The detailed text of the timeline element card.
-  The data is fed through the <code>items</code> prop of the Chrono component.
-  The second prop <code>mode</code> is used to define the layout of the timeline. The library supports 3 modes: <code>HORIZONTAL</code>, <code>VERTICAL</code>, and <code>VERTICAL_ALTERNATING</code>. Here we've used the VERTICAL_ALTERNATING mode.
- The library is completely customizable, checkout more props that you can use from the <a href="https://react-chrono.prabhumurthy.com/introduction/getting-started.html">documentation</a>
  
    ```jsx
    // React Component called TimeLineComponent
    const TimeLineComponent = () => {
        //create the data object
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
        return (
            <div>
                {/*Chrono is the parent component, all timeline elements should be wrapped inside it*/}
                {/* React Chrono Component, takes in items as it's main prop and mode to determine whether it should display content vertically or dynamically*/ }
                <Chrono items={items} mode="VERTICAL_ALTERNATING" />
            </div>
        )
    }

- After following these steps you should have a similar timeline to this.
<img src="./React-Chrono.png"></img>
