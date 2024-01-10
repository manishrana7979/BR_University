const m = require('../model/unimodel');
exports.getAllAcadmic = (req,res)=>{
    m.getAcadmicList ((err,emp)=>{
        if(err){
            res.send(err);
            console.log('404:ERROR FIND');
        }
        else{
            console.log('Acadmic List',emp);
            res.json({  Message:'sucess', AcadmicList:emp  });
        }
    });
};


exports.systemLogin = (req,res)=>{
    var id = req.params.id;
   // var pass = req.params.pass;
    
    m.GetSystemLogin (id,(err,emp)=>{
        if(err){
            res.send(err);
            console.log('404:ERROR FIND');
        }
        else{
            console.log('Acadmic List',emp);
            res.json({  Message:'sucess', LoginData:emp  });
        }
    });
};

exports.SysLogin = (req,res)=>{
    const obj = new m(req.body);
    m.doLogin(obj,(err,login)=>{
        if(err){
            console.log("Login Error : "+err);
            res.json({Message:'Login Failed due to '+err});
        }
        else if(login.length == 0)
        {
            console.log("login Error: ");
            res.json({Message: 'Wrong UserID and Passsword'});
        }
        else{
            console.log("Login Success");
            res.json({Message:"sucess",LoginResponse : login[0]});
        }
    })
}