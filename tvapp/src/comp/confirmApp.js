import React, { Component } from 'react';
import styles from './comp/styles/confirmApp.css';

class confirmApp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className="wrapper">
                <h1 className="mainTxt">Do you want to email </h1>
                <button className="confirmBtn" type="submit">Sign in</button>
                <h1 className="mainTxt">Thank you for using (Brand Name) </h1>
                <h1 className="mainTxt">(studentB) will be contacted </h1>
            </div>
        );
    }
}

export default confirmApp;
