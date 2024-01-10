const m = require('../model/professormodel');
exports.getAllProfessor = (req,res)=>{
    m.getProfessorList((err,pro)=>{
        if(err){
            res.send(err);
            console.log('404 : Error find');
        }
        else{
            console.log('Professor List',pro);
            res.json({Message:'Success', ProfessorList:pro});
        }
    });
};
exports.DeleteProfessorById = (req,res)=>{
    
    m.deleteProfessor(req.params.id,(err,pro)=>{
        if (err){
            
            console.log('Professor can not be delete');
            res.json({Message: 'Not Deleted'});
        }
        else{
            console.log('delete Professor',pro);
            res.json({Message: 'success'});
        }
    })
}
exports.SubmitProfessor = (req,res)=>{
    var obj = new m(req.body);
    m.SubmitProfessor(obj,(err,pro)=>{
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