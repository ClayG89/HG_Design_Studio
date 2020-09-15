import React, { Component } from 'react'
// import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


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
                            <img src="/HG_Logo1.png" width="275" alt="logo" />
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
                    <p></p>
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
                                    <h2>Crochet (Latchhook) Install  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $120+</h2>
                                </div>
                            </Slide>
                            <Slide left cascade>
                                <div>
                                    <h2>Crochet (Latchhook) Install Braids &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $80+</h2>
                                </div>
                            </Slide>
                            <Slide right cascade>
                                <div>
                                    <h2>Hair Color (Permanent) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; Variable</h2>
                                </div>
                            </Slide>
                            <Slide left cascade>
                                <div>
                                    <h2>Hair Color Demi &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $20</h2>
                                </div>
                            </Slide>
                            <Slide right cascade>
                                <div>
                                    <h2>Hair Color Highlights &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; Variable</h2>
                                </div>
                            </Slide>
                            <Slide left cascade>
                                <div>
                                    <h2>Haircut (Barber Style) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $30+</h2>
                                </div>
                            </Slide>
                            <Slide right cascade>
                                <div>
                                    <h2>Haircut (Trim) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $15</h2>
                                </div>
                            </Slide>
                            <Slide left cascade>
                                <div>
                                    <h2>Hydration Treatment &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $10</h2>
                                </div>
                            </Slide>
                            <Slide right cascade>
                                <div>
                                    <h2>Partial (Below The Crown) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $15</h2>
                                </div>
                            </Slide>
                            <Slide left cascade>
                                <div>
                                    <h2>Partial (Lower Back) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $5</h2>
                                </div>
                            </Slide>
                            <Slide right cascade>
                                <div>
                                    <h2>Regular Relaxer (Retouch) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $80</h2>
                                </div>
                            </Slide>
                            <Slide left cascade>
                                <div>
                                    <h2>Shampoo And Rods/Finger Coils (Half Head Or More) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $75</h2>
                                </div>
                            </Slide>
                            <Slide right cascade>
                                <div>
                                    <h2>Shampoo And Style (Relaxed Hair) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $50</h2>
                                </div>
                            </Slide>
                            <Slide left cascade>
                                <div>
                                    <h2>Shampoo And Twist Out (Long Hair) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $80</h2>
                                </div>
                            </Slide>
                            <Slide right cascade>
                                <div>
                                    <h2>Shampoo And Twist Out (Medium Hair) &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; $70</h2>
                                </div>
                            </Slide>
                            <Slide left cascade>
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
                            <img src="/HG_hairpic1.jpg" width="425" alt="pic1"/>
                        </div>
                    </Slide>
                    <Fade top cascade>
                        <div className="hgHairpic2">
                            <img src="/HG_hairpic2.jpg" width="425" alt="pic2"/>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="hgHairpic3">
                            <img src="/HG_hairpic3.jpg" width="425" alt="pic3"/>
                        </div>
                    </Slide>
                </div>
                <div className="hairGallery2">
                    <div className="container1">
                        <div className="row1">
                            <Flip left cascade>
                                <div className="hgHairpic4">
                                    <img src="/HG_hairpic4.jpg" width="315" alt="pic4"/>
                                </div>
                            </Flip>
                            <Flip left cascade>
                                <div className="hgHairpic5">
                                    <img src="/HG_hairpic5.jpg" width="315" alt="pic4"/>
                                </div>
                            </Flip>
                        </div>
                        <div className="row2">
                            <img src="/HG_Logo1.png" width="500" alt="logo"/>
                        </div>
                        <div className="row3">
                            <Flip left cascade>
                                <div className="hgHairpic10">
                                    <img src="/HG_hairpic10.jpg" width="315" alt="pic10"/>
                                </div>
                                <div className="hgHairpic9">
                                    <img src="/HG_hairpic9.jpg" width="315" alt="pic9"/>
                                </div>
                            </Flip>
                        </div>
                    </div>
                    <div className="container2">
                        <div className="row1">
                            <p>If you live in the ATL and need a stylist I highly recommend Maia</p>
                            <p>-Kia S.-</p>
                        </div>
                        <div className="row2">
                            <Flip left cascade>
                                <div className="column3">
                                    <div className="hgHairpic6">
                                        <img src="/HG_hairpic6.jpg" width="315" alt="pic6"/>
                                    </div>
                                    <div className="hgHairpic8">
                                        <img src="/HG_hairpic8.jpg" width="315" alt="pic8"/>
                                    </div>
                                </div>
                            </Flip>
                            <Flip left cascade>
                                <div className="hgHairpic7">
                                    <img src="/HG_hairpic7.jpg" width="315" alt="pic7"/>
                                </div>
                            </Flip>
                        </div>
                    </div>
                </div>
                <div className="hairGallery3">
                    <Slide left>
                        <div className="hgHairpic1">
                            <img src="/HG_hairpic11.jpg" width="425" alt="pic11"/>
                        </div>
                    </Slide>
                    <Fade top cascade>
                        <div className="hgHairpic2">
                            <img src="/HG_hairpic12.jpg" width="425" alt="pic12"/>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="hgHairpic3">
                            <img src="/HG_hairpic13.jpg" width="425" alt="pic13"/>
                        </div>
                    </Slide>
                </div>
                <div className="hairGallery2">
                    <div className="container1">
                        <div className="row1">
                            <Flip left cascade>
                                <div className="hgHairpic14">
                                    <img src="/HG_hairpic14.jpg" width="315" alt="pic14"/>
                                </div>
                            </Flip>
                            <Flip left cascade>
                                <div className="hgHairpic15">
                                    <img src="/HG_hairpic15.jpg" width="315" alt="pic15"/>
                                </div>
                            </Flip>
                        </div>
                        <div className="row2">
                            <img src="/HG_Logo1.png" width="500" alt="logo"/>
                        </div>
                        <div className="row3">
                            <Flip left cascade>
                                <div className="hgHairpic20">
                                    <img src="/HG_hairpic20.jpg" width="315" alt="pic20"/>
                                </div>
                                <div className="hgHairpic19">
                                    <img src="/HG_hairpic19.jpg" width="315" alt="pic19"/>
                                </div>
                            </Flip>
                        </div>
                    </div>
                    <div className="container2">
                        <div className="row1">
                            <p>My stylist is a BEAST</p>
                            <p>-Tiffany S.-</p>
                        </div>
                        <div className="row2">
                            <Flip left cascade>
                                <div className="column3">
                                    <div className="hgHairpic16">
                                        <img src="/HG_hairpic16.jpg" width="315" alt="pic16"/>
                                    </div>
                                    <div className="hgHairpic18">
                                        <img src="/HG_hairpic18.jpg" width="315" alt="pic18"/>
                                    </div>
                                </div>
                            </Flip>
                            <Flip left cascade>
                                <div className="hgHairpic17">
                                    <img src="/HG_hairpic17.jpg" width="315" alt="pic17"/>
                                </div>
                            </Flip>
                        </div>
                    </div>
                </div>
                <div className="bio">
                    <div className="bioPhoto">
                        <img src="/HG_biopic2.jpg" width="420" alt="biopic2"/>
                    </div>
                    <div className="bioBox2">
                        <div className="bioText">
                            <h3>Maia...</h3>
                            <p> Maia Cooper is a Master Cosmetologist with more than 25 years in the industry. It is her belief that healthy hair is "good hair" and that everyone can attain it.</p>
                            <p>In her 25 years, she has worked on music videos, photo shoot sets and wedding parties. Most recently, she has decided to focus her attention on honing her skills behind the chair. She attends classes throughout each year to sharpen her hair coloring, cutting, styling and healthy maintenance skills on both natural and relaxed hair. This ensures that she remain an efficient and well-rounded stylist.</p>
                            <p> For Maia, it's important that her clients enjoy a refreshing experience, leave with healthy hair and have the knowledge of how to maintain it with regular visits and available products that aid in this endeavor.</p>
                            <h4>#healthyhairisgoodhair</h4>
                        </div>
                    </div>
                </div>
                <div className="customerService">
                    <div className="customerCare">
                        <div>
                            <h3>Customer Care</h3>
                        </div>
                        <div>
                            <p>FAQs</p>
                            <p>Shipping & Returns</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                    <div className="connect">
                        <div>
                            <h3>Connect</h3>
                        </div>
                        <p>Join our mailing list</p>
                        <input type="text" placeholder="Please enter email"></input>
                        <div>
                            <button>Join</button>
                        </div>
                    </div>
                    <div className="paymentOptions">
                        <h3>Payment Options</h3>
                        <div className="iconBox">
                            <div>
                                <img src="/HG_visa_icon.jpg" width="50" alt="visa"/>
                            </div>
                            <div>
                                <img src="/HG_mastercard_icon.png" width="50" alt="mastercard"/>
                            </div>
                            <div>
                                <img src="/HG_amex_icon.png" width="50" alt="amex"/>
                            </div>
                            <div>
                                <img src="/HG_paypal_icon.jpg" width="50" alt="paypal"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
