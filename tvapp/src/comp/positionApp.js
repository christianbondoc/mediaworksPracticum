import React, { Component } from 'react';
import styles from './comp/styles/positionApp.css';

class positionApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

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
                            <option value="Graphic Designer"> Graphic Designer </option>
                            <option value="Web Designer"> Web Designer </option>
                            <option value="Software Developer"> Software Developer </option>
                            <option value="Woodworker">Carpentry</option>
                            <option value="Metal Working">Metal Working</option>
                        </select>
                    </div>
                </div>

                <button className="searchBtn" type="submit"> Start </button>

            </div>
        );
    }
}

export default positionApp;
