import React, {Component} from 'react';
import  './Portfolio.css';

import axios from 'axios';

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
                                <h2>{element.name}</h2>
                                <h2>{element.tag}</h2>
                                <h2>{element.intro}</h2>
                                <img style={{width: '100px', height: '100px'}}src={element.mimage} alt='Project' />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Portfolio;

// {displayExercises.map((exercises, i) => {
//     return (
//         <div className='Step2-Routine-List' key={i}>
//             <Link to={`/Step3/${this.state.routine.routine_id}/${exercises.exercise_id}`}><h2>{exercises.name}</h2></Link>
//             <img src={exercises.picture} alt='Motion Pic' />
//         </div>
//     )
// })}