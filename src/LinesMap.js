import React, { Component } from 'react';
import './LinesMap.css';



export default class LinesMap extends Component {
  render() {
    return (
      <div className="LinesMap path">
        <svg className="scaling-svg" viewBox="0 0 2000 1000">
          <path d=" M 1734.437 942.541 L 1734.437 835.233 L 1926.393 608.78 L 2004.898 608.78 L 2004.898 514.161 L 1831.573 514.161 L 1718.271 440.919 L 1444.458 440.919 L 1655.17 236.918 L 1797.393 205.221 L 1797.393 0.019 L 1444.458 0.547 L 1444.458 92.594" fill="none" vectorEffect="non-scaling-stroke" strokeWidth="2.494" stroke="rgb(44,62,80)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/><path d=" M -77.965 485.532 L 122.447 485.532 L 122.447 322.094 L -77.965 322.094 L 330.388 322.094 L 330.155 167.5 L 794.685 167.5 L 814.187 305.249 L 794.685 167.5 L 330.388 167.5 L 330.388 112.847 L 574.473 0.019 L 912.47 0.019 L 1120.929 92.594 L 1444.458 92.594 L 1444.458 538.859 L 1734.437 843.879 L 1926.393 608.78 L 1174.209 608.78 L 1149.911 608.78 L 930.126 747.876 L 570.414 747.876 L 570.414 906.772 L 570.414 747.876 L 113.322 743.987 L 113.322 649.793 L 349.947 649.165 L 574.473 490.755 L 574.473 353.194 L 1024.064 263.409 L 1426.345 263.409 L 1444.458 263.409" fill="none" vectorEffect="non-scaling-stroke" strokeWidth="2.494" stroke="rgb(44,62,80)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
        </svg>
      </div>
    )
  }
}
