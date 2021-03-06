import React from 'react';
import Header from './shared/Header.jsx';

const Home = () => {
    return (
        <>
            <div>
                <Header title="Home"/>
            </div>
            <div className="text-center">
                <h3>Welcome to my first react app!</h3>
                <br/>
                <p>This app displays NBA teams, along with their location and number of championship wins.</p>
            </div>
        </>
    );
}
 
export default Home;