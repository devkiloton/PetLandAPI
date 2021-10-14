const services = require('../controllers/services');
const connection = require('../infrastructure/connection')

class Services
{
    add(attendance)
    {
        const sql = 'INSERT INTO Attendances SET ?';

        connection.query(sql, attendance, (error, results)=>{
            if(error)
            {
                console.log(error);
            }
            else
            {
                console.log(results);
            }
        })
    }
}

module.exports = new Services;