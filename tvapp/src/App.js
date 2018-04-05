import React, { Component } from 'react';
import styles from './comp/styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="appTitle">Find your next project partner </h1>
        <input className="bcitID" type="text" placeholder="BCIT ID" />
        <button className="startBtn" type="submit"   >Sign in</button>
        <h7 className="signupLink"> Head to (siteName) to register </h7>
      </div>
    );
  }
}

export default App;
