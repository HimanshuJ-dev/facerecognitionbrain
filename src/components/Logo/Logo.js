import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='logocss shadow-2' style={{ height: 'auto', width: '150px'}}>
                <div className='logoimagecont' style={{ height: '150px', width: '150px'}}>
                    <img className='logoimage' src={brain} alt='brainLogo' />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo