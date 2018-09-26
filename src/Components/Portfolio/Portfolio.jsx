import React, {Component} from 'react';
import  './Portfolio.css';

import axios from 'axios';  
import {Link} from 'react-router-dom';

class Portfolio extends Component {
    constructor() {
        super();
        
        this.state = {
            projects: []
        }
    }
    componentDidMount() {
        this.getProjects();
    }
    getProjects() {
        axios.get('/api/getProjects').then(res => {
            console.log('Front', res);
            this.setState({projects: res.data});
        });
    }
    render() {
        let displayProjects;
        displayProjects = this.state.projects;
        return(
            <div className='Portfolio-App'>
                <div className='Portfolio-Body'>
                    <div className='Portfolio-Header'>
                        <h1>PORTFOLIO</h1>
                        <p>See my works below. Unless stated otherwise, all their back-end and front-end parts were completely done by me.</p>
                    </div>
                    {displayProjects.map((element, i) => {
                        return(
                            <div className='Portfolio-Projects' key={i}>
                            <div className='Portfolio-Info'>
                                <div className='Portfolio-Border'></div>
                                <br />
                                <br />
                                <Link to={`/Project/${element.project_id}`}><h1>{element.name}</h1></Link>
                                <h3>{element.tag}</h3>
                                <h4>{element.intro}</h4>
                            </div>
                                <img style={{width: '500px', height: '250px', marginTop: '-160px'}}src={element.mimage} alt='Project' />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Portfolio;