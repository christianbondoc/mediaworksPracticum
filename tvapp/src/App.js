import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import styles from './comp/styles/App.css';

// Import the seperate components.
import PositionApp from './comp/positionApp.js';
import ConfirmApp from './comp/confirmApp.js';


class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            pageNum: 0,
            userInput: ''
        };
        
        this.signIn = this.signIn.bind(this);
        this.changePage = this.changePage.bind(this);
        this.handleInput = this.handleInput.bind(this);
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
            pageNum: num,
        });
    }


    handleInput(evt){
        const userInput = evt.target.value;
        this.setState({userInput});

    }



    render() {
        var comp;
        var pageNum = this.state.pageNum;
        
        if (pageNum == 0) {
            comp = (
                <div className="wrapper">
                    


                    <div className="logoImg"> </div>

                    <input 
                        ref="testInput"
                        
                        className="bcitID" 
                        type="text" 
                        placeholder="STUDENT ID" 
                        alt="bcitID"
                        onChange={(evt)=> {
                            this.setState({userInput: this.refs.testInput.value});
                            console.log(this.state.userInput);
                            }}
                        

                    />
                    <button className="startBtn" type="submit" onClick={this.signIn}>Sign in</button>
                    <h7 className="signupLink"> Head to (siteName) to register </h7>
                    <div className="blueSquare"></div>
                </div>
                
            );
        }
        else if (pageNum == 2) {
            comp = <PositionApp 
                        changePage={this.changePage}
                        userInput={this.state.userInput}
                    />;
        }
        else if (pageNum == 3) {
            comp = <ConfirmApp 
                        changePage={this.changePage}
                    />;
        }
        
        return (
            <div>
                <div className="bcitHeader">BRITISH COLUMBIA INSTITUTE OF TECHNOLOGY</div>
                {comp}
                
            </div>
        );
    }
}

export default App;
