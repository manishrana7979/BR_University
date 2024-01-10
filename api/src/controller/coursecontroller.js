const m = require('../model/coursemodel');
exports.getAllCourse = (req,res)=>{
    m.getCourseList((err,emp)=>{
        if(err){
            res.send(err);
            console.log('404 : Error find');
        }
        else{
            console.log('Course List',emp);
            res.json({Message:'Success', CourseList:emp});
        }
    });
};
exports.DeleteCourseById = (req,res)=>{
    
    m.deleteCourse(req.params.id,(err,pro)=>{
        if (err){
            
            console.log('Course can not be delete');
            res.json({Message: 'Not Deleted'});
        }
        else{
            console.log('delete Course',pro);
            res.json({Message: 'success'});
        }
    })
}
exports.SubmitCourse= (req,res)=>{
    var obj = new m(req.body);
    m.SubmitCourse(obj,(err,pro)=>{
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