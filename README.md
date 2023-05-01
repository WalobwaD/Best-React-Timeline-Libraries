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
                    <p>Content paragraph/description goes here</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        )
    }

- After following the steps and creating more VerticalTimelineElements, (content can be passed in dynamically using props), the timeline should have a similar appearance to this and is completely modifiable using CSS. 
<img src="./RVT-results.png"></img>
