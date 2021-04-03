import React, { Component } from 'react';
import "./index.css";

class Garfield extends React.Component {
    render() {
        const theStyles = {fontSize: "24px"};
        return (
            <div className="theimage">
                <h1 className="name">Life</h1>
                <img src="https://i.imgur.com/F67Eq7J.jpeg"></img>
                <h3>How does he feel?</h3>
            </div>);
        }
    }

export default Garfield;