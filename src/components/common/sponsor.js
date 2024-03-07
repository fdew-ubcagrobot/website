import React from 'react';

import {
    fcc,
    apsc,
    chbe,
    ece,
    egbc,
    gage,
    ieee,
    lfs,
    proto,
    solidworks,
    verdi
} from '../../assets';

import { headers } from '../../constant/sponsorFooter';
import '../../index.css';

const Sponsors = () => {
    return (
        <div className="center">
            <h1 className="sponsorTitle">{headers[0]}</h1>
            <div className='sponsorsContainer px-40'>
                <div className="line-container py-10">
                    <hr className="line" />
                        <span className="centered-text">{headers[1]}</span>
                    <hr className="line" />
                </div>
                <div className="sponsorLogos">
                    <img src={fcc} alt="FTC"/>
                    <img src={ece} alt="UBC Electrical and Computer Engineering"/>
                    <img src={apsc} alt="UBC Applied Science"/>
                </div>
                <div className="line-container py-10">
                    <hr className="line" />
                        <span className="centered-text">{headers[2]}</span>
                    <hr className="line" />
                </div>
                <div className="sponsorLogos">
                    <img src={chbe} alt="UBC CHBE"/>
                    <img src={lfs} alt="UBC Land & Food Systems"/>
                    <img src={ieee} alt="IEEE"/>
                    <img src={gage} alt="Walter H. Gage Memorial Fund"/>
                </div>
                <div className="line-container py-10">
                    <hr className="line" />
                        <span className="centered-text">{headers[3]}</span>
                    <hr className="line" />
                </div>
                <div className="sponsorLogos">
                    <img src={egbc} alt="Engineers & Geoscientists British Columbia"/>
                    <img src={verdi} alt="Verdi"/>
                </div>
                <div className="line-container py-10">
                    <hr className="line" />
                        <span className="centered-text">{headers[4]}</span>
                    <hr className="line" />
                </div>
                <div className="sponsorLogos">
                    <img src={proto} alt="Protocase"/>
                    <img src={solidworks} alt="SOLIDWORKS"/>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;