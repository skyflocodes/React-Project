import React from 'react';
import Header from './shared/Header.jsx';

const About = () => {
    return ( 
        <>
            <div>
                <Header title="About"/>
            </div>
            <div className="m-3">
                <h4>What data is being used?</h4>
                <p>This app uses a JSON file I created and hosted on a live <a href="https://skyflocodes.github.io/NBAAPI/NBATEAMS.json">Github Pages</a> site.</p>
                <b><p>Data included in the json:</p></b>
                <ul>
                    <li>Team Id</li>
                    <li>Team Abbreviation</li>
                    <li>Team Name</li>
                    <li>Number of Championships Won</li>
                    <li>Home City</li>
                </ul>
                <h4>What are the features?</h4>
                <p>
                    The user can scroll through the table to see the data listed above displayed. The user has the option to isolate champions, and non champions.
                    The user also has the ability to search for teams by name, location, abreviation, and even number of wins.
                </p>

            </div>
        </>
    );
}
 
export default About;