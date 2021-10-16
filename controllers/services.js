const Services = require('../models/services')

module.exports = app => {
    app.get('/services', (req, res) => res.send('You are on the services route GET'));
    app.post('/services', (req, res) => {
        const services = req.body;

        Services.add(services, res);
    })
}