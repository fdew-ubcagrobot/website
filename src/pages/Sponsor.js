import React from 'react';
import fcc from '../images/fcc.jpg';
import apsc from '../images/apsc.png';
import chbe from '../images/chbe.png';
import ece from '../images/ece.jpg';
import egbc from '../images/egbc.png';
import gage from '../images/gage.png';
import ieee from '../images/ieee.png';
import lfs from '../images/lfs.jpg';
import proto from '../images/proto.png';
import solidworks from '../images/solidworks.png';
import verdi from '../images/verdi.png';

import '../index.css';

const Sponsors = () => {
    return (
        <div className="center">
            <h1 className="sponsorTitle">OUR SPONSORS</h1>
            <div className="line-container">
                <hr className="line" />
                    <span className="centered-text">Diamond</span>
                <hr className="line" />
            </div>
            <div className="sponsorLogos">
                <img src={fcc} alt="FTC"/>
                <img src={ece} alt="UBC Electrical and Computer Engineering"/>
                <img src={apsc} alt="UBC Applied Science"/>
            </div>
            <div className="line-container">
                <hr className="line" />
                    <span className="centered-text">Gold</span>
                <hr className="line" />
            </div>
            <div className="sponsorLogos">
                <img src={chbe} alt="UBC CHBE"/>
                <img src={lfs} alt="UBC Land & Food Systems"/>
                <img src={ieee} alt="IEEE"/>
                <img src={gage} alt="Walter H. Gage Memorial Fund"/>
            </div>
            <div className="line-container">
                <hr className="line" />
                    <span className="centered-text">Silver</span>
                <hr className="line" />
            </div>
            <div className="sponsorLogos">
                <img src={egbc} alt="Engineers & Geoscientists British Columbia"/>
                <img src={verdi} alt="Verdi"/>
            </div>
            <div className="line-container">
                <hr className="line" />
                    <span className="centered-text">Bronze</span>
                <hr className="line" />
            </div>
            <div className="sponsorLogos">
                <img src={proto} alt="Protocase"/>
                <img src={solidworks} alt="SOLIDWORKS"/>
            </div>
        </div>
    );
}

export default Sponsors;