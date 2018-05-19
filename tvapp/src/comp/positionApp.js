import React, { Component } from 'react';

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
                            <h1 className="intro-center"> Your BCIT ID: </h1>
                            <h2 className="positionA"> {this.props.userInput}</h2>
                            <div className="hex"></div>
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

                    <div className="contBtn logoImg" type="submit" onClick={((() => { this.setState({ positionNum: 1 }) }))}></div>
                </div>
            )
        } else if (positionNum === 1) {
            positionComp = (
                <div className="wrapper-row">
                    <div className="container left">
                        <div className="content">
                            <h1 className="intro-center"> Your ID: </h1>
                            <h2 className="positionA"> {this.props.userInput}</h2>
                            <div className="hex"></div>
                        </div>
                    </div>

                <div className="container right">
                    <div className="content">
                        <h1 className="intro-center"> Here are the available people for 'hire' </h1>
                        <h2 className="positionB">
                        Create a function here to list out choices from DB
                        </h2>
                    <div className="posContainer">
                        <button className="positionBtn" type="submit" onClick={this.props.changePage.bind(this, 3)}> Hit this person up </button>
                        <button className="positionBtn" type="submit" onClick={this.props.changePage.bind(this, 3)}> Hit this person up </button>
                        <button className="positionBtn" type="submit" onClick={this.props.changePage.bind(this, 3)}> Hit this person up </button>
                        <button className="positionBtn" type="submit" onClick={this.props.changePage.bind(this, 3)}> Hit this person up </button>
                    </div>
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
