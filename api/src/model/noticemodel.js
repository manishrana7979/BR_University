const dbconn = require('../../config/dbconfig');
var Notice = function(notice)
{
   this.Title = notice.Title
   this.Description = notice.Description
};
Notice.getNoticeList = (result)=>{
    dbconn.query('select * from notice', (err,res)=>{
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
Notice.deleteNotice = (id,result) =>{
    dbconn.query('delete from notice where NoticeID = ?',id,(err,res)=>{
        if(err){
            console.log('error find data',err);
            result(err,null);
        }
        else{
            console.log('Data fetched Success');
            result(null,res);
        }
    });
};
Notice.SubmitNotice = (s,result)=>
{
    if(s.NoticeID == undefined){
        dbconn.query('INSERT INTO Notice(Title,Description) values(?,?)',[s.Title,s.Description],(err,res)=>{
            if(err){
                console.log('Data not insert',err);
                result(err,null);
            }
            else{
                console.log('Data insert success');
                result(null,res);
            }
        });
    }
    else{
        dbconn.query("update notice set Title =?, Description=? where NoticeID =?",[s.Title,s.Description,s.NoticeID],(err,res)=>{
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
module.exports = Notice;