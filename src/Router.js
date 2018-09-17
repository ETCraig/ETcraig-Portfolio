import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AboutMe from './Components/AboutMe/About';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Portfolio from './Components/Portfolio/Portfolio';
import Skills from './Components/Skills/Skills';

export default(
    <Switch>
        <Route component={Portfolio} exact path='/' />
        <Route component={AboutMe} path='/AboutMe' />
        <Route component={Contact} path='/Contact' />
        <Route component={Education} path='/Education' />
        <Route component={Skills} path='/Skills' />
    </Switch>
);