const connection = require('../infrastructure/connection');
const moment = require('moment');

class Services {
    add(attendance, res) {
        const attendanceDate = moment().format('YYYY-MM-DD HH:mm:ss');
        const date = moment(attendance.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
        const allDates = { ...attendance, attendanceDate, date };

        const dateIsValid = moment(date).isSameOrAfter(attendanceDate);
        const clientIsValid = attendance.client.length >= 3;

        const validations = [
            {
                name: 'date',
                status: dateIsValid,
                message: "Date must be greater than or equal to today's date."
            },
            {
                name: 'client',
                status: clientIsValid,
                message: "Client name must have at least 3 characters."
            }
        ];

        //erros filters the elements in the validations array by a bool in the field status, if at least some of them is true, it is printed
        const errors = validations.filter(field => !field.status);
        const isThereErrors = errors.length;

        if (isThereErrors) {
            res.status(400).json(errors);
        }
        else {
            const sql = 'INSERT INTO Attendances SET ?';

            connection.query(sql, allDates, (error, results) => {
                if (error) {
                    res.status(400).json(error);
                }
                else {
                    res.status(201).json(results);
                }
            })
        }
    }

    list(res) {
        const sql = 'SELECT * FROM petland_schedule.attendances';
        connection.query(sql, (error, results) => {
            if (error) {
                res.status(400).json(error);
            }
            else {
                res.status(400).json(results);
            }
        })
    }

    searchId(id, res) {
        const sql = `SELECT * FROM petland_schedule.attendances WHERE id=${id}`;

        connection.query(sql, (error, results) => {
            const clientId = results[0];
            if (error) 
            {
                res.status(400).json(error);
            }
            else 
            {
                res.status(200).json(clientId);
            }
        })
    }
}

module.exports = new Services;