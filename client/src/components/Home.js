import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

export default class Home extends Component {
    render() {
        return (
            <div className="homeWrapper">
                <div className="header">
                    <div className="navbar1">
                        <div className="nb1top">
                            <ul>
                                <li>
                                    <p>Jewelry</p>
                                </li>
                                <li>
                                    <p>Products</p>
                                </li>
                                <li>
                                    <p>Contact Us</p>
                                </li>
                            </ul>
                        </div>
                        <div className="nb1Bottom">
                            placeholder
                        </div>
                    </div>
                    <div className="logo1">
                        <div>
                            <img src="/HG_Logo1.png" width="275" />
                        </div>
                        <div className="logo1Bottom">

                        </div>
                    </div>
                    <div className="navbar2">
                        <div className="nb2top">
                            <div className="searchBox">
                                <input type="text" placeholder="Search"></input>
                            </div>
                            <div className="searchButton">
                                <button>submit</button>
                            </div>
                        </div>
                        <div className="nb2Bottom">
                            <p>Please allow 5-7 business days for your items to ship.</p>
                        </div>
                    </div>
                </div>
                <div className="openPic">
                    <p>placeholder</p>
                </div>
                <div className="serviceList">
                    <div className="slAnimation">
                        <Fade top cascade>
                            <div className="title">
                                <h2>Salon Services</h2>
                            </div>
                        </Fade>
                        <div>
                        </div>
                        <Slide right cascade>
                            <div>
                                <h2>Crochet (Latchhook) Install  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $120</h2>
                            </div>
                        </Slide>
                        <Slide left cascade>
                            <div>
                                <h2>Crochet (Latchhook) Install Braids &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $80</h2>
                            </div>
                        </Slide>
                        <Slide right cascade>
                            <div>
                                <h2>Elucence Clarifying Shampoo &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $15</h2>
                            </div>
                        </Slide>
                        <Slide left cascade>
                            <div>
                                <h2>Hair Color (Permanent) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; Variable</h2>
                            </div>
                        </Slide>
                        <Slide right cascade>
                            <div>
                                <h2>Hair Color Demi &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $20</h2>
                            </div>
                        </Slide>
                        <Slide left cascade>
                            <div>
                                <h2>Hair Color Highlights &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; Variable</h2>
                            </div>
                        </Slide>
                        <Slide right cascade>
                            <div>
                                <h2>Haircut (Barber Style) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $30</h2>
                            </div>
                        </Slide>
                        <Slide left cascade>
                            <div>
                                <h2>Dummy Text</h2>
                            </div>
                        </Slide>
                            
                    </div>
                </div>
            </div>
        )
    }
}
