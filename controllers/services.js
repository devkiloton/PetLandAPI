const Services = require('../models/services')

module.exports = app => {
    app.get('/services', (req, res) => {
        Services.list(res)
    });

    app.get('/services/:id', (req, res) =>{
        const id = parseInt(req.params.id);

        Services.searchId(id, res);
    });

    app.post('/services', (req, res) => {
        const services = req.body;
        Services.add(services, res);
    });
    // patch = partial changes, put = change everything
    app.patch('/services/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;

        Services.alter(id, values, res);
    });

    app.delete('/services/:id', (req, res) =>{
        const id = parseInt(req.params.id);

        Services.delete(id, res);
    });
}