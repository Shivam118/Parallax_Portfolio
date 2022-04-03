import React, { useState } from 'react';

function Navbar() {

    const [navLinkOriginal, setNavLinkOriginal] = useState('0%');
    const [navLinkUnderline, setNavLinkUnderline] = useState('none');

    const styleNavbar = {
        background: 'transparent',
        height: '80px',
        width: '100vw',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: '0px',
        padding: '0px',
        boxShadow:'0px 1px 10px rgba(0,0,0,0.1)',
    }
    const styleNavHeadLink = {
        padding: '0 7.5%',
        color: 'rgba(0,0,200,1)',
        textTransform: 'uppercase',
        fontSize: '1.75rem',
        fontWeight: 'bold',
        textDecoration: navLinkUnderline,
        position: 'relative',
        bottom: navLinkOriginal,
        transition:'1s',
    }
    const styleNavHeadLinkEnter = () => {
        setNavLinkOriginal('5px');
        setNavLinkUnderline('underline');
    }
    const styleNavHeadLinkLeave = () => {
        setNavLinkOriginal('0%');
        setNavLinkUnderline('none');
    }


    return (
        <div className="Navbar" style={styleNavbar}>
            <a
                href=" "
                style={styleNavHeadLink}
                onMouseEnter={styleNavHeadLinkEnter}
                onMouseLeave={styleNavHeadLinkLeave}
            >
                resume
            </a>
        </div>
    );
}

export default Navbar;