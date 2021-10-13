const customExpress = require('./config/customExpress');
const connection = require('./infrastructure/connection');

connection.connect(error => {
    if(error){
        console.log(error);
    }
    else
    {
        const app = customExpress();

        app.listen(3000, ()=> console.log("Hello World"));
        
        console.log('connected');
    }
});