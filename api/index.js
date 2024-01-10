const express = require ('express');
const  app = express();
const port = 3000;
const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const acadmicRouts = require('./src/router/unirouter');
app.use('/api/v2/login/',acadmicRouts);
app.use('/api/login/studentlist/',acadmicRouts);
app.use('/api/login/courselist/',acadmicRouts);
app.use('/api/login/collegelist/',acadmicRouts);
app.use('/api/login/professorlist/',acadmicRouts);
app.use('/api/login/noticelist/', acadmicRouts);
app.use('/api/login/gallerylist/',acadmicRouts);
app.use('/api/login/contactlist/',acadmicRouts);

app.get('/data/',(req,res)=>{

    res.send("Hello World");

})

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});



app.listen(port,()=>{
    console.log("Done"+port);
});

