const services = require('../controllers/services');
const connection = require('../infrastructure/connection');
const moment = require('moment');

class Services
{
    add(attendance)
    {
        const attendanceDate = moment().format('YYYY-MM-DD HH:mm:ss');
        const date = moment(attendance.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
        const allDates = {...attendance, attendanceDate, date};
        
        const sql = 'INSERT INTO Attendances SET ?';

        connection.query(sql, allDates, (error, results)=>{
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