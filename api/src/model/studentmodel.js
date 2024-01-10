const dbconn = require('../../config/dbconfig');
var Student = function (student)
{
    this.StudentID = student.StudentID
    this.Name = student.Name
    this.FName = student.FName
    this.MName = student.MName
    this.MobileNo = student.MobileNo
    this.EmailID = student.EmailID
    this.Age = student.Age
    this.Address = student.Address
    this.DOB = student.DOB
};

Student.getStudentList = (result) => {
    dbconn.query('select * from student', (err, res) => {
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
Student.deleteStudent = (id, result) => {
    dbconn.query('delete from student where StudentId = ?', id, (err, res) => {
        if (err) {
            console.log('error Find Data', err);
            result(err, null);
        } else {
            console.log('Data Fetched Success');
            result(null, res);
        }

    });
};

Student.SubmitStudent = (s, result) => {
    if (s.StudentID == undefined) {

        dbconn.query('INSERT INTO student(Name,FName,MName,MobileNo,EmailID,Age,Address,DOB) values(?,?,?,?,?,?,?,?)', [s.Name, s.FName, s.MName, s.MobileNo, s.EmailID, s.Age, s.Address, s.DOB], (err, res) => {
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
        dbconn.query("update student set Name = ?,FName =?,MName =?,MobileNo =?,EmailID= ? ,Age = ?,Address = ?,DOB= ? where StudentID = ?", [s.Name, s.FName, s.MName, s.MobileNo, s.EmailID, s.Age, s.Address, s.DOB, s.StudentID], (err, res) => {
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

module.exports = Student;