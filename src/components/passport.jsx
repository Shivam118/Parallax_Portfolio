import React, { useState, useEffect } from 'react'
import Emblem from '../images/Emblem.png';
import Photo from '../images/ProfilePhoto2.webp'

const Passport = () => {
    var heightP = 600
    var widthP = 425
    var scrollRotation

    const [scrollPosition, setScrollPosition] = useState(0);
    const [passportSlide, setPassportSlide] = useState('0%');
    const [rotateFirstPage, setRotateFirstPage] = useState('rotateY(-' + scrollRotation + 'deg)');
    const [landscapeViewPage, setLandscapeViewPage] = useState('');

    // const RotatePassport = () => {
    //     setLandscapeViewPage('rotate(90deg)')
    // }
    const handleScroll = () => {
        const position = window.pageYOffset;
        scrollRotation = (-1 * (position / 2));
        if (scrollRotation <= -180) {
            setRotateFirstPage('rotateY(-180deg)')
            setLandscapeViewPage('rotate(90deg)')
        }
        else if (scrollRotation >= -180 && scrollRotation < 0) {
            setRotateFirstPage('rotateY(' + scrollRotation + 'deg)')
            setLandscapeViewPage('rotate(0deg)')
        }
        else {
            setRotateFirstPage('rotate(0deg)')
        }
        setScrollPosition(position);

        console.log('Rotation' + scrollRotation)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    console.log(scrollPosition)

    const passport = {
        height: heightP + 'px',
        width: widthP + 'px',
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: passportSlide,
        transition: 'all 1s',
        perspective: '2000px',
        transform: landscapeViewPage,
    }

    const stylePassport = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: widthP + 'px',
        overflow: 'hidden',
        borderTopRightRadius: '1.5rem',
        borderBottomRightRadius: '1.5rem',
        position: 'absolute',
        zIndex: '100',
        top: '0%',
        left: '0%',
        transform: rotateFirstPage,
        // transition: 'all 3s',
        transformOrigin: 'left',
        // backfaceVisibility:'hidden',
    }
    const passFrontPage = {
        mixBlendMode: 'multiply',
        background: '#30343e',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        position: 'relative',
    }
    const stylePassportHeadings = {
        color: '#d7d09f',
        fontSize: '1.8rem',
        textTransform: 'uppercase',
        fontFamily: 'san-serif',
        lineHeight: '1',
        letterSpacing: '0.2rem',
    }
    const SVGFilterOut = {
        position: 'absolute',
        height: '100%',
    }
    const stylepassportInside = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '1.4rem 0.3rem',
        width: heightP + 'px',
        height: widthP + 'px',
        // border: '1px solid red',
        borderBottomRightRadius: '1.5rem',
        borderBottomLeftRadius: '1.5rem',
        background: 'radial-gradient(#eaece9,#f1f1f1)',
        transform: 'rotate(-90deg) translate(' + ((widthP / 2) - (heightP / 2)) + 'px,' + ((heightP / 2) - (widthP / 2)) + 'px)',
        zIndex: '50',
        top: '0%',
        right: '0%',
        transition: 'all 2s',
    }
    const styleDetailsPanel = {
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }
    const styleImgSig = {
        width: '30%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    }
    const Sign = {
        width: '90%',
        fontFamily: 'Comforter',
        fontSize: '1.7rem',
        textAlign: 'center',
        border: '1px solid Black',
        padding: '0.3rem',
        margin: '0.3rem',

    }
    const styleDetails = {
        width: '70%',
        height: '100%',
    }
    const styleDetails2 = {
        width: '98%',

    }

    const MouseEnterPassport = () => {
        // setPassportSlide(widthP / 2);
        // setRotateFirstPage('rotateY(-180deg)');

    }
    const MouseLeavePassport = () => {
        setPassportSlide('0%');
        setRotateFirstPage('rotateY(0deg)');

    }
    return (
        <div className="passport" style={passport} onMouseEnter={MouseEnterPassport} onMouseLeave={MouseLeavePassport} >
            <div style={stylePassport} >
                <svg
                    viewBox="0 0 200 200"
                    xmlns='http://www.w3.org/2000/svg' style={SVGFilterOut}>

                    <filter id='noiseFilter'>
                        <feTurbulence
                            type='turbulence'
                            baseFrequency='1'
                            numOctaves='10'
                            stitchTiles='stitch' />
                    </filter>

                    <rect
                        width='100%'
                        height='100%'
                        filter='url(#noiseFilter)' />
                </svg>
                <div style={passFrontPage}>
                    <div style={{ textAlign: 'center', }}>
                        <h3 style={stylePassportHeadings}>पासपोर्ट</h3>
                        <h3 style={stylePassportHeadings}>passport</h3>
                    </div>
                    <br />
                    <img src={Emblem} alt="Emblem" style={{ width: '70%' }} />
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={stylePassportHeadings}>भारत गणराज्य</h3>
                        <h3 style={stylePassportHeadings}>republic of india</h3>
                    </div>
                </div>
            </div>
            <div style={stylepassportInside}>
                <h4 style={{
                    width: '100%',
                    borderBottom: '1px solid black',
                    textAlign: 'center',
                    wordSpacing: '2px',
                    letterSpacing: '2px',
                    fontSize: '1.1rem'
                }}>
                    भारत गणराज्य &nbsp;&nbsp;&nbsp; REPUBLIC &nbsp;OF &nbsp;INDIA
                </h4>
                <div style={styleDetailsPanel}>
                    <div style={styleImgSig}>
                        <img src={Photo} alt="Profile" style={{ width: '90%' }} />
                        <div style={Sign}>
                            Shivam Sharma
                        </div>
                    </div>
                    <div style={styleDetails}>
                        <table>
                            <tr>
                                <td>टाइप/Type</td>
                                <td>राष्ट्र कोड/Country Code</td>
                                <td>पासपोर्ट न./Passport No.</td>
                            </tr>
                            <tr>
                                <td>P</td>
                                <td>IND</td>
                                <td>ABCD1234</td>
                            </tr>
                            <tr>
                                <td colspan="3">उपनाम/Surname</td>
                            </tr>
                            <tr>
                                <td colspan="3">SHARMA</td>
                            </tr>
                            <tr>
                                <td colspan="3">दिया गया नाम/Given Name(s)</td>
                            </tr>
                            <tr>
                                <td colspan="3">SHIVAM</td>
                            </tr>
                            <tr>
                                <td>राष्ट्रीयता/Nationality</td>
                                <td>लिंग/Sex</td>
                                <td>जन्मतिथि/Date of Birth</td>
                            </tr>
                            <tr>
                                <td>INDIAN</td>
                                <td>M</td>
                                <td>16/10/2000</td>
                            </tr>
                            <tr>
                                <td colspan="3">जन्मस्थान/Place of Birth</td>
                            </tr>
                            <tr>
                                <td colspan="3">UTTAR PRADESH</td>
                            </tr>
                            <tr>
                                <td colspan="3">जारी करने का स्थान/Place of Issue</td>
                            </tr>
                            <tr>
                                <td colspan="3">GHAZIABAD</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div style={styleDetails2}>
                    <span style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '1.5px', }}>
                        P&lt;INDSHARMA&lt;&lt;SHIVAM&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
                        <br />
                        ABCD1234&lt;4IND0016104M201610&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;8
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Passport