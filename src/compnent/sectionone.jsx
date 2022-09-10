import React from 'react';
import './sectionone.css';
import Mascot from './images/MASCOT.svg';
import Carousel from 'react-bootstrap/Carousel';
import Imgone from './images/HOME/icon.png';
import Chartz from './chartz.jsx';


const sectionone = () => {
  return (
    <>
    <div className="start">
        <p className="Name">
            Welcome Ramasubarmanyam,
        </p>
        <h2 className="Financials">
            Here is your financials
        </h2>
        <img src={Mascot} className="Mascot" />
        <div className="MyPortfolio">
            <div className="MPcontent">
                <div className="MPheader">
                    My Portfolio
                </div>
                <div className="MPcaraousel">
                    <Carousel  variant='dark'>
                        <Carousel.Item>
                            <div className="ctem">
                                <img
                                className="d-block w-100 MPimg"
                                src= { Imgone }
                                alt="First slide"
                                />
                                <div className="info">
                                    <p>Curent value <span className="iImg">i</span></p>
                                    <h4>$ 7768798</h4>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="ctem">
                                <img
                                className="d-block w-100 MPimg"
                                src= { Imgone }
                                alt="Second slide"
                                />
                                <div className="info">
                                    <p>Total returns <span className="iImg">i</span></p>
                                    <h4>$ 78987</h4>
                                </div>                                
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="ctem">
                                <img
                                className="d-block w-100 MPimg"
                                src= { Imgone }
                                alt="Third slide"
                                />
                                <div className="info">
                                    <p>Portfolio Yield <span className="iImg">i</span></p>
                                    <h4>$ 4567887</h4>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="ctem">
                                <img
                                className="d-block w-100 MPimg"
                                src= { Imgone }
                                alt="Third slide"
                                />
                                <div className="info">
                                    <p>Average XIRR<span className="iImg">i</span></p>
                                    <h4>$ 6616151 </h4>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="MPchart">
                    <Chartz />
                    Graph Not Found!!
                </div>
            </div>
        </div>
        <div className="IO">
            <div className="IOHead">
                You can invest on
            </div>
            <div className="imgElts">
                <a href="/" className="sliderimg">
                    <img src="https://devclient.bondsindia.com/static/media/BONDS.f7f32abe.svg" alt="" />
                </a>
                <a href="/" className="sliderimg">
                    <img src="https://devclient.bondsindia.com/static/media/GSEC.bab753fd.svg" alt="" />
                </a>
                <a href="/" className="sliderimg">
                    <img src="https://devclient.bondsindia.com/static/media/FD.ed4a1e5a.svg" alt="" />
                </a>
                <a href="/" className="sliderimg">
                    <img src="https://devclient.bondsindia.com/static/media/IPO.30a59b07.svg" alt="" />
                </a>
                <a href="/" className="sliderimg">
                    <img src="https://devclient.bondsindia.com/static/media/54EC.3c1597e8.svg" alt="" />
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default sectionone;