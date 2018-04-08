import React, { Component } from 'react';
import styles from './styles/lookingApp.css';

class lookingApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
        
        };

    }


    render() {
        return (
            <div className="wrapper">
                <div className="container left">
                    <div className="content">
                        <h1 className="intro-center"> You are a </h1>
                        <h2 className="positionA"> (do the props thing) </h2>
                    </div>
                </div>

                <div className="container right">
                    <div className="content">
                        <h1 className="intro-center"> Looking for a </h1>
                        <select className="positionB">
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default lookingApp;
