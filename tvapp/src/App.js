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
        const data = {
            [evt.target.name]: evt.target.value
        };
        this.setState(data);
        this.props.onChange(data);
    }

    render() {
        var comp;
        var pageNum = this.state.pageNum;
        
        if (pageNum == 0) {
            comp = (
                <div className="wrapper">
                    
                    <div className="bcitHeader">BRITISH COLUMBIA INSTITUTE OF TECHNOLOGY</div>

                    <div className="logoImg"> </div>

                    <input 
                        className="bcitID" 
                        type="text" 
                        placeholder="STUDENT ID" 
                        alt="bcitID"
                        
                        onChange={data => { this.setState({ data }) }}

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
                        data={this.state.data}
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
