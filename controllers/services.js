module.exports = app => {
    app.get('/services', (req, res) => res.send('You are on the services route GET'));
    app.post('/services', (req, res) => {
        console.log(req.body)
        res.send('You are on the services route POST');
    })
}