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
                            <h2 className="positionA"> data={this.state.data}</h2>
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
                            <h2 className="positionA"> data={this.state.data} </h2>
                            <div className="hex"></div>
                        </div>
                    </div>

                <div className="container right">
                    <div className="content">
                        <h1 className="intro-center"> Here are the available people for 'hire' </h1>
                        <h2 className="positionB">
                        Create a function here to list out choices from DB
                        </h2>
                        

                        <button className="positionBtn" type="submit" onClick={this.props.changePage.bind(this, 3)}> Hit this person up </button>
                        <button className="positionBtn" type="submit" onClick={this.props.changePage.bind(this, 3)}> Hit this person up </button>
                        <button className="positionBtn" type="submit" onClick={this.props.changePage.bind(this, 3)}> Hit this person up </button>
                        <button className="positionBtn" type="submit" onClick={this.props.changePage.bind(this, 3)}> Hit this person up </button>
                    </div>
                </div>
                </div>
            )
        }

        return (
            <div>
                {/* <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 540 632">
                <g id="_x35_NVYPf.tif" className="st0">
                    <image width="540" height="628" id="Layer_0" xlinkHref="CEBDFB6DF72318CF.png"
                        transform="translate(0 1.976)" overflow="visible" />
                </g>
                <polygon className="st1" points="5.2,69.2 4.5,194.6 109.5,254.9 216,193 216,66.5 109.8,5.2"
                />
                <polygon className="st1" points="111,255.1 110.2,380.5 215.2,440.8 321.8,378.9 321.8,252.4 215.6,191.1"
                />
                <polygon className="st1" points="216.6,441.5 215.9,566.8 320.9,627.1 427.4,565.2 427.4,438.8 321.2,377.4"
                />
                <polygon className="st1" points="5.2,444.3 4.4,569.6 109.4,630 215.9,568.1 215.9,441.6 109.7,380.3"
                />
                <polygon className="st1" points="323.9,253.4 323.1,378.8 428.1,439.1 534.6,377.2 534.6,250.7 428.4,189.4"
                />
            </svg> */}
                
                {positionComp}
            </div>
        );
    }
}

export default positionApp;
