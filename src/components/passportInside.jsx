import React from 'react'
import Photo from '../images/ProfilePhoto2.webp'
import './css/testing.css';

const passportInside = () => {
    const stylepassportInside = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection:'column',
        padding: '20px 5px',
        width: '600px',
        height: '425px',
        // border: '1px solid red',
        borderBottomRightRadius: '20px',
        borderBottomLeftRadius: '20px',
        background: 'linear-gradient(#eaece9,#FFFFFF)',
        // transform:'rotate(-90deg)',
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
        justifyContent:'center',
        flexDirection: 'column',
    }
    const Sign = {
        width:'90%',
        fontFamily: 'Comforter',
        fontSize: '24px',
        textAlign: 'center',
        border:'1px solid Black',
        padding:'5px',
        margin:'5px',

    }
    const styleDetails = {
        width: '70%',
        height: '100%',
    }
    const styleDetails2 = {
        width:'98%',
        
    }


    return (
        <div style={stylepassportInside}
        className="stylepassportInside">
            <h4 style={{
                width:'100%',
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
                <span style={{fontSize:'12px',fontWeight:'bold',letterSpacing:'1.5px',}}>
                    P&lt;INDSHARMA&lt;&lt;SHIVAM&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
                    <br />
                    ABCD1234&lt;4IND0016104M201610&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;8
                </span>
            </div>
        </div>
    )
}

export default passportInside