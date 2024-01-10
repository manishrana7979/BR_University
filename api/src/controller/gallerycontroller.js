const m = require('../model/gallerymodel');
exports.getAllGallery = (req,res)=>{
    m.getGalleryList((err,std)=>{
        if(err){
            res.send(err);
            console.log('404 : Error find');
        }
        else{
            console.log('Gallery List',std);
            res.json({Message:'Success', GalleryList:std});
        }
    });
};
exports.DeleteGalleryById = (req,res)=>{
    
    m.deleteGallery(req.params.id,(err,std)=>{
        if (err){
            
            console.log('Gallery can not be delete');
            res.json({Message: 'Not Deleted'});
        }
        else{
            console.log('delete Gallery',std);
            res.json({Message: 'success'});
        }
    })
}
exports.SubmitGallery = (req,res)=>{
    var obj = new m(req.body);
    m.SubmitGallery(obj,(err,std)=>{
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