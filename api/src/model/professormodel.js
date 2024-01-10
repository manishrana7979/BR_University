const dbconn = require('../../config/dbconfig');
var Professor = function(professor)
{
    this.ProfessorID = professor.ProfessorID
   this.Name = professor.Name
   this.FName = professor.FName
   this.MName = professor.MName
   this.MobileNo = professor.MobileNo
   this.DOB = professor.DOB
   this.EmailID = professor.EmailID
   this.Age = professor.Age
   this.Address = professor.Address
   this.Specialization = professor.Specialization
   this.Experience = professor.Experience
};
Professor.getProfessorList = (result)=>{
    dbconn.query('select * from professor', (err,res)=>{
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
Professor.deleteProfessor = (id,result) =>{
    dbconn.query('delete from professor where ProfessorId = ?',id, (err,res)=>{
        if(err){
            console.log('error Find Data', err);
            result(err, null);
        }else{
            console.log('Data Fetched Success');
            result(null, res);
        }
        
    });
};
Professor.SubmitProfessor = (s,result) =>
{ 
    if(s.ProfessorID == undefined){
dbconn.query('INSERT INTO Professor(Name,FName,MName,MobileNo,DOB,EmailID,Age,Address,Specialization,Experience) values(?,?,?,?,?,?,?,?,?,?)',[s.Name,s.FName,s.MName,s.MobileNo,s.DOB,s.EmailID,s.Age,s.Address,s.Specialization,s.Experience],(err,res)=>{
    if(err){
        console.log('Data not insert', err);
        result(err,null);
    }
    else{
        console.log('Data insert success');
        result(null,res);
    }
});
}
else{
    dbconn.query("update professor set Name =?, FName=?,MName=?,MobileNo=?,DOB=?,EmailID=?,Age=?,Address=?,Specialization=?,Experience=? where ProfessorID = ?", [s.Name,s.FName,s.MName,s.MobileNo,s.DOB,s.EmailID,s.Age,s.Address,s.Specialization,s.Experience,s.ProfessorID],(err,res)=>{
        if(err){
            console.log('error find data'+err);
            result(err,null);
        }
        else{
            console.log('data update success');
            result(null,res);
        }
    });
}
};
module.exports = Professor;