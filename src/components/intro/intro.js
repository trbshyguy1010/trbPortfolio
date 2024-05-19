import React from 'react';
import './Intro.css';
import basically_me from '../../assets/intro.jpg';


const Intro = () => {
    return (
        <section id="intro">
            <div className="intro-text">
                <p className="intro-lead">Hi!</p>
                <h1 className="intro-title">I'm <span className="intro-title-highlight">Med Taha Fourati</span></h1>
                <h3 className="intro-presub">Also known as <span className='intro-title-highlight'>trbshyguy1100</span></h3>
                <p className="intro-sub">I enjoy coding and I like making music i guess</p>
            </div>
            <div className="intro-image">
                <img src={basically_me} alt="Me" className="intro-img" />
            </div>
        </section>
    )
}
// 
export default Intro;