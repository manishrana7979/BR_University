const dbconn = require('../../config/dbconfig');
var College = function(college)
{
   this.CollegeName = college.CollegeName
   this.PrincipalName = college.PrincipalName
   this.VicePrincipalName = college.VicePrincipalName
   this.MobileNo = college.MobileNo
   this.CollegeEmailID = college.CollegeEmailID
   this.CollegeAddress = college.CollegeAddress
};
College.getCollegeList = (result)=>{
    dbconn.query('select * from college', (err,res)=>{
        if(err){
            console.log('error Find in data',err);
            result(null,res);
        }
        else{
            console.log('Data Fetched Success');
            result(null,res);
        }
    });
};
module.exports = College;