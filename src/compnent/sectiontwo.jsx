import React, { Component } from 'react';
import './sectiontwo.css';
import Section2templates from './section2templates';



const sectiontwo = () => {
  return (
    <div>
        <div className="template">
          <div className="cont">
              <div className="header">
                  <div className="handShake">
                  <img src="https://devclient.bondsindia.com/static/media/handshake.94422b63.svg" alt="" />
                  </div>
                  <p>
                      Deal of the day
                  </p>
              </div>
              <div className="body">
                <Section2templates />
              </div>
          </div>
        </div>
        {/* <div className="template">
          <div className="cont">
              <div className="header">
                  <div className="handShake">
                  <img src="https://devclient.bondsindia.com/static/media/handshake.94422b63.svg" alt="" />
                  </div>
                  <p>
                      Deal of the day
                  </p>
              </div>
          </div>
        </div> */}
    </div>
  )
}

export default sectiontwo;
