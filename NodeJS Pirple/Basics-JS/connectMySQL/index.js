import mysql from 'mysql';

const connection= mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password"
    }
)

connection.connect((err)=>{
    if(err) throw err;
    console.log('DB Connected');
})

// mySQL command 
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
// flush privileges;