import React, { Component } from 'react';

/* Temporarily Removed:
// -- import styles from './styles/positionApp.css'; --//
Notes: 
*   positionApp component referring to app.css, even though
    it was positionapp.css that was linked.
*   Marked everything that was added/changed in app.css 
    if we wanted to bring back multiple CSS styles.
*   Change <div className="wrapper-row"> to 
    <div className="wrapper"> to revert back to initial state
*/


class positionApp extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            positionNum: 0
        };
    }
    render() {

        var positionComp;
        var positionNum = this.state.positionNum;

        if (positionNum === 0) {
            positionComp = (
                <div className="wrapper-row">
                    <div className="container left">
                        <div className="content">
                            <h1 className="intro-center"> You are a</h1>
                            <h2 className="positionA"> Sumting </h2>
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

                    <button className="searchBtn" type="submit" onClick={((() => { this.setState({ positionNum: 1 }) }))}> Start </button>
                </div>
            )
        } else if (positionNum === 1) {
            positionComp = (
                <div className="wrapper-row">
                    <div className="container left">
                        <div className="content">
                            <h1 className="intro-center"> You are a</h1>
                            <h2 className="positionA"> Sumting </h2>
                        </div>
                    </div>

                <div className="container right">
                    <div className="content">
                        <h1 className="intro-center"> Here are the available people for 'hire' </h1>
                        <h2 className="positionB">
                        Create a function here to list out choices from DB
                        </h2>

                        <button className="positionBtn styleBtn1" type="submit" onClick={this.props.changePage.bind(this, 3)}> Contact Person A from DB </button>
                        <button className="positionBtn styleBtn2" type="submit" onClick={this.props.changePage.bind(this, 3)}> Contact Person B from DB </button>
                        <button className="positionBtn styleBtn1" type="submit" onClick={this.props.changePage.bind(this, 3)}> Contact Person C from DB </button>
                        <button className="positionBtn styleBtn2" type="submit" onClick={this.props.changePage.bind(this, 3)}> Contact Person D from DB </button>

                    </div>
                </div>
                </div>
            )
        }

        return (
            <div>
                {positionComp}
            </div>
        );
    }
}

export default positionApp;
