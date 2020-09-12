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
                            <p>Healthy hair is good hair</p>
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
                            <p>Contact us today at:</p>
                            <p>hgdesign@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="openPic">
                </div>
                <div className="serviceList">
                    <div className="slAnimation">
                        <Fade top cascade>
                            <div className="title">
                                <h2>Salon Services</h2>
                            </div>
                        </Fade>
                        <div className="slContainer">
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
                                    <h2>Haircut (Trim) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $15</h2>
                                </div>
                            </Slide>
                            <Slide right cascade>
                                <div>
                                    <h2>Hydration Treatment &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $10</h2>
                                </div>
                            </Slide>
                            <Slide left cascade>
                                <div>
                                    <h2>Partial (Below The Crown) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $15</h2>
                                </div>
                            </Slide>
                            <Slide right cascade>
                                <div>
                                    <h2>Partial (Lower Back) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $5</h2>
                                </div>
                            </Slide>
                            <Slide left cascade>
                                <div>
                                    <h2>Regular Relaxer (Retouch) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $80</h2>
                                </div>
                            </Slide>
                            <Slide right cascade>
                                <div>
                                    <h2>Shampoo And Rods/Finger Coils (Half Head Or More) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $30</h2>
                                </div>
                            </Slide>
                            <Slide left cascade>
                                <div>
                                    <h2>Shampoo And Style (Relaxed Hair) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $50</h2>
                                </div>
                            </Slide>
                            <Slide right cascade>
                                <div>
                                    <h2>Shampoo And Twist Out (Long Hair) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $80</h2>
                                </div>
                            </Slide>
                            <Slide left cascade>
                                <div>
                                    <h2>Shampoo And Twist Out (Medium Hair) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $70</h2>
                                </div>
                            </Slide>
                            <Slide right cascade>
                                <div>
                                    <h2>Shampoo And Twist Out (Short Hair) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $60</h2>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
                <div className="hairGallery1">
                    <Slide left>
                        <div className="hgHairpic1">
                            <img src="/HG_hairpic1.jpg" width="425" />
                        </div>
                    </Slide>
                    <Fade top cascade>
                        <div className="hgHairpic2">
                            <img src="/HG_hairpic2.jpg" width="425" />
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="hgHairpic3">
                            <img src="/HG_hairpic3.jpg" width="425" />
                        </div>
                    </Slide>
                </div>
                <div className="hairGallery2">
                    <div className="hgHairpic4">
                        <img src="/HG_hairpic4.jpg" width="315" />
                    </div>
                    <div className="hgHairpic5">
                        <img src="/HG_hairpic5.jpg" width="315" />
                    </div>
                    <div className="hgHairpic6Container">
                        <div className="slogan2"></div>
                        <div className="hgHairpic6">
                        <img src="/HG_hairpic6.jpg" width="315" />
                        </div>
                    </div>
                    <div className="hgHairpic7Container">
                        <div></div>
                        <div className="hgHairpic7">
                        <img src="/HG_hairpic7.jpg" width="315" />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}
