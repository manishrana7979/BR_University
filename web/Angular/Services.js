app.service("angularService", function ($http) {

    this.getSystemLogin = function (id) {
        return $http.get("http://localhost:3000/api/v2/login/login/" + id);
    }
    this.doSysLogin = function (obj) {
        return $http.post('http://localhost:3000/api/login/syslogin', JSON.stringify(obj));
    }


    // student //
    this.getStudentList = function () {
        return $http.get("http://localhost:3000/api/login/studentlist/student/");
    }
    this.SubmitStudent = function (obj) {
        return $http.post('http://localhost:3000/api/login/studentlist/submitstudent/', JSON.stringify(obj));
    }
    this.deleteStudentBuyId = function (id) {
        return $http.get("http://localhost:3000/api/login/studentlist/deletestudent/" + id);
    }


    //college//
    this.getCollegeList = function () {
        return $http.get("http://localhost:3000/api/login/collegelist/college/");
    }


    //notice//
    this.getNoticeList = function () {
        return $http.get("http://localhost:3000/api/login/noticelist/notice/");
    }
    this.SubmitNotice = function (obj) {
        return $http.post('http://localhost:3000/api/login/noticelist/submitnotice/', JSON.stringify(obj));
    }
    this.deleteNoticeById = function (id) {
        return $http.get("http://localhost:3000/api/login/noticelist/deletenotice/" + id);
    }


    //professor//
    this.getProfessorList = function () {
        return $http.get("http://localhost:3000/api/login/professorlist/professor/");
    }
    this.SubmitProfessor = function (obj) {
        return $http.post('http://localhost:3000/api/login/professorlist/submitprofessor/', JSON.stringify(obj));
    }
    this.deleteProfessorById = function (id) {
        return $http.get("http://localhost:3000/api/login/professorlist/deleteprofessor/" + id);
    }


    //Course//
    this.getCourseList = function () {
        return $http.get("http://localhost:3000/api/login/courselist/course/");
    }
    this.deleteGalleryById = function (id) {
        return $http.get("http://localhost:3000/api/login/courselist/deletecourse/" + id);
    }

    // Gallery 
    this.getGalleryList = function () {
        return $http.get("http://localhost:3000/api/login/gallerylist/gallery/");
    }
    this.SubmitGallery = function (obj) {
        return $http.post('http://localhost:3000/api/login/gallerylist/submitgallery/', JSON.stringify(obj));
    }
    this.deleteGalleryById = function (id) {
        return $http.get("http://localhost:3000/api/login/gallerylist/deletegallery/" + id);
    }


// ContactUs
this.getContactList = function () {
    return $http.get("http://localhost:3000/api/login/contactlist/contact/");
}
this.SubmitContact = function (obj) {
    return $http.post("http://localhost:3000/api/login/contactlist/submitcontact/", JSON.stringify(obj));
}
this.deleteContactBuyId = function (id) {
    return $http.get("http://localhost:3000/api/login/contactlist/deletecontact/" + id);
}





});