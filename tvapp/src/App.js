import React, { Component } from 'react';
import styles from './comp/styles/App.css';

// Import the seperate components.
import PositionApp from './comp/positionApp.js';
import ConfirmApp from './comp/confirmApp.js';
import LookingApp from './comp/lookingApp.js';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            pageNum: 0
        };
        
        this.signIn = this.signIn.bind(this);
        this.changePage = this.changePage.bind(this);
    }
    
    // Use this function when signing in
    signIn() {
        this.setState({
            pageNum: 2
        });
    }
    
    // Function to change the page
    changePage(num) {
        this.setState({
            pageNum: num
        });
    }

    render() {
        var comp;
        var pageNum = this.state.pageNum;
        
        if (pageNum == 0) {
            comp = (
                <div className="wrapper">
                    <h1 className="appTitle">Find your next project partner </h1>
                    <input className="bcitID" type="text" placeholder="BCIT ID" />
                    <button className="startBtn" type="submit" onClick={this.signIn}>Sign in</button>
                    <h7 className="signupLink"> Head to (siteName) to register </h7>
                </div>
            );
        }
        else if (pageNum == 2) {
            comp = <PositionApp 
                        changePage={this.changePage}
                    />;
        }
        else if (pageNum == 3) {
            comp = <ConfirmApp 
                        changePage={this.changePage}
                    />;
        }
        
        return (
            <div>
                {comp}
            </div>
        );
    }
}

export default App;
