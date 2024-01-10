const mysql = require ('mysql');
const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "university"
});
con.connect(function(err){
    if(err)
    throw err;
    else
    console.log("Database connected");
    
});

module.exports = con;