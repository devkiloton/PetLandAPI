class Tables {
    init(connection){
        this.connection = connection;

        this.createAttendance();
    }

    createAttendance(){
        const sql = 'CREATE TABLE IF NOT EXISTS Attendances (id int NOT NULL AUTO_INCREMENT, client varchar(50) NOT NULL, pet varchar(20), service varchar(20) NOT NULL, date datetime NOT NULL, attendanceDate datetime NOT NULL, status varchar(20) NOT NULL, obs text, PRIMARY KEY(id))'
        
        this.connection.query(sql, (error) => {
            if(error){
                console.log(error);
            }
            else
            {
                console.log('Table "Attendances" has been created')
            }
        })
    }
}

module.exports = new Tables;