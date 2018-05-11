import React, { Component } from 'react';
import logo from './logo.svg';
import './comp/styles/App.css';
import mySocket from 'socket.io-client'; 

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        pgNum: 0
      };
        
        this.testingDBinput = this.testingDBinput.bind(this);
    }

    testingDBinput() {
        this.socket=mySocket("http://localhost:10002/");
        this.socket.emit("addUser", null); 
        console.log('almost works!');
        this.setState({
            pgNum: 2
        })
    }

  render() {
    var comp;
    var pgNum = this.state.pgNum;

    if (pgNum === 0) {
      comp = (
        <div className='wrapper'>
          <div className="intro-container">
            <div className="logoImg"> </div>
          <h1 className="mainTxt"> 
          Register for BCIT Hive </h1>
            <button className="mainBtn" onClick={((() => { this.setState({ pgNum: 1 }) }))}>Register Now</button> 
          </div>
        </div>
        
      )
    }
    else if (pgNum === 1) {
      comp = (
        <div className="wrapper-row">
          <div className="container left">
            <h1 className="mainTxt">Who are you?</h1>
            <input className="input" placeholder= "Your Name" />
            <input className="input" placeholder= "BCIT ID" />
            <input className="input" placeholder= "BCIT Email" />
            <input className="input" placeholder= "Program" />
          </div>


          <button className="searchBtn" onClick={this.testingDBinput}> Search Now </button> 

          <div className="container right">
          <h1 className="mainTxt">Skillset/Program</h1>
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
        </div>
        
      )}
      else if (pgNum===2) {
        comp = (
          <div className='wrapper'>
            <div className="intro-container">
            <div className="logoImg"> </div>
              <h1 className="mainTxt">
                Thanks for using BCIT Hive </h1>
              <button className="mainBtn" onClick={((() => { this.setState({ pgNum: 0 }) }))}>Home</button>
            </div>
          </div>
        )
      } 
    


    return (
      <div>
        {comp}
      </div>
    );
  }
}

export default App;
