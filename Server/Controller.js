module.exports = {
    getProjects: (req, res) => {
        console.log('Hit getProjects Back');
        const db = req.app.get('db');
        console.log('Passed DB');
        db.Get_Projects().then(data => {
            console.log(res);
            res.status(200).send(data);
        }).catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    },
}