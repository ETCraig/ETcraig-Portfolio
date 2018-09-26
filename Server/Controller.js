module.exports = {
    getProjects: (req, res) => {
        console.log('Hit getProjects Back');
        const db = req.app.get('db');
        console.log('Passed DB');
        db.Get_Projects().then(data => {
            console.log(data);
            res.status(200).send(data);
        }).catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    },
    getProject: (req, res) => {
        console.log('Hit getProject Back.');
        const db = req.app.get('db');
        console.log('Passed DB');
        db.Get_Project(req.params.project_id).then(data => {
            console.log(data);
            res.status(200).send(data);
        }).catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    },
    getTechs: (req, res) => {
        console.log('Hit GetTechs Back.');
        const db = req.app.get('db');
        console.log('Passed DB');
        db.Get_Techs(req.params.project_id).then(data => {
            console.log(data);
            res.status(500).send(data);
        }).catch(err => {
            console.log(err);
            res.status(200).send(err);
        });
    },
    getImages: (req, res) => {
        console.log('Hit getImages Back.');
        const db = req.app.get('db');
        console.log('Passed DB');
        db.Get_Images(req.params.project_id).then(data => {
            console.log(data);
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send(err);
        });
    }
}