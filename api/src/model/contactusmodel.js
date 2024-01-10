const dbconn = require('../../config/dbconfig');
var Contact = function (contact)
{
    this.ContactID = contact.ContactID
    this.Name = contact.Name
    this.MobileNo = contact.MobileNo
    this.EmailID = contact.EmailID
    this.Message = contact.Message
};

Contact.getContactList = (result) => {
    dbconn.query('select * from contactus', (err, res) => {
        if (err) {
            console.log('error Find in data', err);
            result(null, res);
        }
        else {
            console.log('Data Fetched Success');
            result(null, res);
        }
    });
};
Contact.deleteContact = (id, result) => {
    dbconn.query('delete from contactus where ContactId = ?', id, (err, res) => {
        if (err) {
            console.log('error Find Data', err);
            result(err, null);
        } else {
            console.log('Data Fetched Success');
            result(null, res);
        }

    });
};

Contact.SubmitContact = (s, result) => {
    if (s.ContactID == undefined) {

        dbconn.query('INSERT INTO contactus(Name,MobileNo,EmailID,Message) values(?,?,?,?)', [s.Name, s.MobileNo, s.EmailID, s.Message], (err, res) => {
            if (err) {
                console.log('Data not insert', err);
                result(err, null);
            }
            else {
                console.log('Data insert success');
                result(null, res);
            }
        });
    }

    else {
        dbconn.query("update contactus set Name = ?,MobileNo =?,EmailID= ? ,Message = ?, ContactID = ?", [s.Name, s.MobileNo, s.EmailID, s.Message, s.ContactID], (err, res) => {
            if (err) {
                console.log('error find data' + err);
                result(err, null);
            }
            else {
                console.log('data update success');
                result(null, res);
            }
        });
    }
};

module.exports = Contact;