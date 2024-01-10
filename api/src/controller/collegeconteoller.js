const m = require('../model/collegemodel');
exports.getAllCollege = (req,res)=>{
    m.getCollegeList((err,emp)=>{
        if(err){
            res.send(err);
            console.log('404 : Error find');
        }
        else{
            console.log('Colleges List',emp);
            res.json({Message:'Success', CollegeList:emp});
        }
    });
};