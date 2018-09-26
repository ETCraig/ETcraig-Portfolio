import React, {Component} from 'react';
import './SideNav.css';

import emailIcon from '../../Assets/icons8-envelope-24.png';
import githubIcon from '../../Assets/icons8-github-32.png';
import {Link} from 'react-router-dom';
import linkedinIcon from '../../Assets/icons8-linkedin-24.png';
import portfolioPic from '../../Assets/portfolio-picture.jfif';

class SideNav extends Component {
    render() {
        return(
            <div className='SideNav-App'>
                <div className='SideNav-Body'>
                    <div className='SideNav-Header'>
                        <img src={portfolioPic} alt='' />
                        <h2>Ethan Thomas Craig</h2>
                        <h4>Full Stack Developer</h4>
                    </div>
                    <div className='SideNav-Menu'>
                        <Link to='/' style={{textDecoration: 'none'}}><h6>Projects</h6></Link>
                        <Link to='/Skills' style={{textDecoration: 'none'}}><h6>Skills</h6></Link>
                        <Link to='/Education' style={{textDecoration: 'none'}}><h6>Education</h6></Link>
                        <Link to='/AboutMe' style={{textDecoration: 'none'}}><h6>About Me</h6></Link>
                    </div>
                    <div className='SideNav-Footer'>
                        <Link to='/Contact' style={{textDecoration: 'none'}}><h6>Contact Me</h6></Link>
                        <img src={emailIcon} alt='Email Icon' />
                        <img src={githubIcon} alt='Github Icon' />
                        <img src={linkedinIcon} alt='LinkedIn Icon' />
                    </div>
                </div>
            </div>
        );
    }
}

export default SideNav;