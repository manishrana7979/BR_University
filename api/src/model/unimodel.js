const dbconn = require('../../config/dbconfig');

var Acadmic =
 function(acadmic)
{
    this.UserID = acadmic.UserID
    this.Password = acadmic.Password
};
Acadmic.getAcadmicList = (result)=>{
    dbconn.query('select * from login', (err,res) =>{
        if(err){
            console.log('error Find data',err);
            result(null,res);
        }else{
            console.log('Data Fetched Success');
            result(null,res);
        }
    });

};

Acadmic.GetSystemLogin = (id,result)=>{
    dbconn.query('select * from login where UserID=?',id, (err,res) =>{
        if(err){
            console.log('error Find data',err);
            result(null,res);
        }else{
            console.log('Data Fetched Success');
            result(null,res);
        }
    });

};
Acadmic.doLogin = (student,result)=>{
    dbconn.query('select * from login where UserID= ? and Password = ?', [student.UserID, student.Password],(err,res)=>{
        if(err){
            console.log('error Find data',err);
            result(null,err);
        }
        else{
            console.log('Login Success');
            result(null,res);
        }
    })
}
module.exports = Acadmic;