import React from 'react'
import { Link } from 'react-scroll'

const Welcome = () => {
  return (
    <div className='welcome-container' id='home'>
        <div className='welcome-content'>
            <h2>Hi! I'm</h2>
            <h1>Mert Can Bakar</h1>
            <p>I'm a front-end developer and continue to improve in this area.</p>
            <span>
                <Link to="about" spy={true} smooth={true} offset={-200} duration={500}>Learn more</Link>
            </span>
        </div>
    </div>
  )
}

export default Welcome