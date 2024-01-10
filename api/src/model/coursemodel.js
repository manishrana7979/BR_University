const dbconn = require('../../config/dbconfig');
var Course = function (course) {
    this.CourseName = course.CourseName
};
Course.getCourseList = (result) => {
    dbconn.query('select * from course', (err, res) => {
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
Course.deleteCourse = (id, result) => {
    dbconn.query('delete from course where CourseID = ?', id, (err, res) => {
        if (err) {
            console.log('error find data', err);
            result(err, null);
        }
        else {
            console.log('Data Fetched Success');
            result(null, res);
        }
    });
};
Course.SubmitCourse = (s, result) => {
    if (s.CourseID == undefined) {
        dbconn.query('INSERT INTO Course(CourseName) values(?)', [s.CourseName], (err, res) => {
            if (err) {
                console.log('Data not insert', err);
                result(err, null);
            }

        });
    }
    else {
        console.log("update course set CourseName = ? where CourseID = ?", [s.CourseName, s.CourseID], (err, res) => {
            if (err) {
                console.log('error find data', err);
                result(err, null);
            }
            else {
                console.log('data update success');
                result(null, res);
            }
        });
    }
};
module.exports = Course;