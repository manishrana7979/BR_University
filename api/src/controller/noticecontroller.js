const m = require('../model/noticemodel');
exports.getAllNotice = (req,res)=>{
    m.getNoticeList((err,not)=>{
        if(err){
            res.send(err);
            console.log('404 : Error find');
        }
        else{
            console.log('Notice List',not);
            res.json({Message:'Success', NoticeList:not});
        }
    });
};
exports.DeleteNoticeById = (req,res)=>{
    
    m.deleteNotice(req.params.id,(err,not)=>{
        if (err){
            
            console.log('Notice can not be delete');
            res.json({Message: 'Not Deleted'});
        }
        else{
            console.log('delete Notice',not);
            res.json({Message: 'success'});
        }
    })
}
exports.SubmitNotice = (req,res)=>{
    var obj = new m(req.body);
    m.SubmitNotice(obj,(err,not)=>{
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