const m = require('../model/studentmodel');
exports.getAllStudent = (req,res)=>{
    m.getStudentList((err,std)=>{
        if(err){
            res.send(err);
            console.log('404 : Error find');
        }
        else{
            console.log('Student List',std);
            res.json({Message:'Success', StudentList:std});
        }
    });
};
exports.DeleteStudentById = (req,res)=>{
    
    m.deleteStudent(req.params.id,(err,std)=>{
        if (err){
            
            console.log('Student can not be delete');
            res.json({Message: 'Not Deleted'});
        }
        else{
            console.log('delete Student',std);
            res.json({Message: 'success'});
        }
    })
}
exports.SubmitStudent = (req,res)=>{
    var obj = new m(req.body);
    m.SubmitStudent(obj,(err,std)=>{
        if(err){
            console.log('data cant not be insert');
            res.json({Message: 'Not Insert'});
        }  
        else{
            console.log('insert data');
            res.json({Message: "success"});
        }
    });
    
}