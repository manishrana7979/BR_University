const m = require('../model/contactusmodel');
exports.getAllContact = (req,res)=>{
    m.getContactList((err,std)=>{
        if(err){
            res.send(err);
            console.log('404 : Error find');
        }
        else{
            console.log('Contact List',std);
            res.json({Message:'Success', ContactList:std});
        }
    });
};
exports.DeleteContactById = (req,res)=>{
    
    m.deleteContact(req.params.id,(err,std)=>{
        if (err){
            
            console.log('Contact can not be delete');
            res.json({Message: 'Not Deleted'});
        }
        else{
            console.log('delete Contact',std);
            res.json({Message: 'success'});
        }
    })
}
exports.SubmitContact = (req,res)=>{
    var obj = new m(req.body);
    m.SubmitContact(obj,(err,std)=>{
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