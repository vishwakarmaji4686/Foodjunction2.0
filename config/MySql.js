 const mysql = require("mysql");
 const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "food_junction"
 });
 connection.connect(function(error){
    if(error){
        console.log("unebale to connect Database")
    }else{
        console.log("Database connected ::::::")
    }
 });
 module.exports.connection = connection;