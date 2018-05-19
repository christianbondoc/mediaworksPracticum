import React, { Component } from 'react';
import logo from './logo.svg';
import './comp/styles/App.css';
import mySocket from 'socket.io-client'; 

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        pgNum: 0,
        name: '',
        bcit: '',
        bEmail: '',
        program: ''
      };
        // -- DB Functions -- //
        this.testingDBinput = this.testingDBinput.bind(this);
        this.upName = this.upName.bind(this);
        this.upID = this.upID.bind(this);
        this.upEmail = this.upEmail.bind(this);
        this.upProgram = this.upProgram.bind(this);

        // -- Regex JSX Function -- //
        this.studentIDInput = this.studentIDInput.bind(this);

    }

    testingDBinput() {
        this.socket=mySocket("http://localhost:10002/");
        var data = {
          name: this.state.name,
          bcit: this.state.bcit,
          bEmail: this.state.bEmail,
          program: this.state.program
        };
        this.socket.emit("addUser", data); 
        console.log('almost works!');
        this.setState({
            pgNum: 2
        })
    }

    upName(ev) {
      this.setState({
        name: ev.target.value
      })
      console.log(this.state.name);
    }

    upID(ev) {
      this.setState({
        bcit: ev.target.value
      })
    }

    upEmail(ev) {
      this.setState({
        bEmail: ev.target.value
      })
    }

    upProgram(ev) {
      this.setState({
        program: ev.target.value
      })
    }

  studentIDInput(e) {
    const reg = /[0-9Aa]+/g;
    if (!reg.test(e.key)) {
      e.preventDefault();
    }
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
            <input className="input" onChange={this.upName} placeholder= "First & Last Name" />
            <input className="input" onChange={this.upID} placeholder="BCIT ID" onKeyPress={(e) => this.studentIDInput(e)} />
            <input className="input" onChange={this.upEmail} placeholder= "BCIT Email" />
            <input className="input" onChange={this.upProgram} placeholder= "Program" />
          </div>


          <button className="searchBtn" onClick={this.testingDBinput}> Search Now </button> 

          <div className="container right">
          <h1 className="mainTxt">Skillset/Program</h1>
            <div className="content">
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
        <div className="bcitHeader">BRITISH COLUMBIA INSTITUTE OF TECHNOLOGY - MEDIAWORKS</div>
        {comp}
      </div>
    );
  }
}

export default App;
