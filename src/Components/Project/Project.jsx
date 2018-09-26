import React, {Component} from 'react';
import './Project.css';

import axios from 'axios';

class Project extends Component {
    constructor() {
        super();
       
        this.state = {
            Project: [],
            Desc: [],
            Techs: [],
            Images: []
        }
    }
    componentDidMount() {
        this.getProject();
        this.getDesc();
        this.getTechs();
        this.getImages();
    }
    getProject() {
        console.log('hitting after Mount.');
        axios.get(`/api/getProject/${this.props.match.params.project_id}`).then(res => {
            console.log('Project', res)
            this.setState({Project: res.data});
        });
    }
    getDesc() {
        axios.get(`/api/getDesc/${this.props.match.params.project_id}`).then(res => {
            console.log('Desc', res);
            this.setState({Desc: res.data});
        });
    }
    getTechs() {
        axios.get(`/api/getTechs/${this.props.match.params.project_id}`).then(res => {
            console.log('Techs', res);
            this.setState({Techs: res.data});
        });
    }
    getImages() {
        axios.get(`/api/getImages/${this.props.match.params.project_id}`).then(res => {
            console.log('Images', res);
            this.setState({Images: res.data});
        });
    }
    render() {
        return(
            <div className='Project-App'>
                <div className='Project-Body'>
                    Project
                    <h1>{this.state.Project.name}</h1>
                    <img src={this.state.Images.image_id[1]} alt='Project' />
                </div>
            </div>
        );
    }
}

export default Project;