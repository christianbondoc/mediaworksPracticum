import React, { Component } from 'react';
// import styles from './styles/confirmApp.css';
import styles from './styles/App.css';

class confirmApp extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            confirmNum: 0
        };

    }

    render() {
        var confirmComp;
        var confirmNum = this.state.confirmNum;

        if (confirmNum === 0) {
        
        confirmComp = (
        <div className="wrapper">
            <div className="logoImg"></div>
            <h1 className="mainTxt">Do you want to email</h1>
            <h2 className="secondaryTxt"> (Person Name) </h2> 
            <button className="confirmBtn" type="submit" onClick={((()=> {this.setState({confirmNum: 1})}))}>Yes</button>
        </div>
            );
        }  else if (confirmNum === 1){
        confirmComp = (
        <div className = "wrapper">
            <h1 className="mainTxt">Thank you for using HIVE </h1>
            <div className="logoImg"></div>
            <h1 className="mainTxt">(studentB) will be contacted </h1>
            <button className="confirmBtn" type="submit" onClick={this.props.changePage.bind(this, 0)}>Reset</button>
        </div>
            )
        }

        return (
            <div>
                <div className="blueSquare"></div>
                {confirmComp}
            </div>
        );
    }
}

export default confirmApp;
