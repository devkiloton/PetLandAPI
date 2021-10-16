const connection = require('../infrastructure/connection');
const moment = require('moment');

class Services
{
    add(attendance, res)
    {
        const attendanceDate = moment().format('YYYY-MM-DD HH:mm:ss');
        const date = moment(attendance.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
        const allDates = {...attendance, attendanceDate, date};
        
        const sql = 'INSERT INTO Attendances SET ?';

        connection.query(sql, allDates, (error, results)=>{
            if(error)
            {
                res.status(400).json(error);
            }
            else
            {
                res.status(201).json(results);
            }
        })
    }
}

module.exports = new Services;