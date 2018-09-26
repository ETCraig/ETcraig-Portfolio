require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const massive = require('massive');

app.use(bodyParser.json());

const {CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
});

const ctrl = require('./Controller');

app.get('/api/getProjects', ctrl.getProjects);
app.get('/api/getProject/project_id', ctrl.getProject);
app.get('/api/getImages/project_id', ctrl.getImages);
app.get('/api/getTechs/project_id', ctrl.getTechs);

const port = 4200;

app.listen(port, () => {console.log(`Listening and operating on Port ${port}`)});