import mysql from 'mysql2'

const databaseConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'donar_hub'

})

databaseConnection.connect()

export default databaseConnection;