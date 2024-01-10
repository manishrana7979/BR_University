const express = require('express');
const router = express.Router();
const contoller = require('../controller/unicontroller');

const studentcontoller = require('../controller/studentcontroller')
router.get('/student/',studentcontoller.getAllStudent);
router.get('/deletestudent/:id',studentcontoller.DeleteStudentById);
router.post('/submitstudent/',studentcontoller.SubmitStudent);

const coursecontoller = require('../controller/coursecontroller')
router.get('/course/',coursecontoller.getAllCourse);
router.get('/deletecourse/:id',coursecontoller.DeleteCourseById);
router.post('/submitcourse/',coursecontoller.SubmitCourse);

const collegecontroller  = require('../controller/collegeconteoller')
router.get('/college/', collegecontroller.getAllCollege);

const professorcontroller = require('../controller/professorcontroller')
router.get('/professor/', professorcontroller.getAllProfessor);
router.get('/deleteprofessor/:id',professorcontroller.DeleteProfessorById);
router.post('/submitprofessor/',professorcontroller.SubmitProfessor);

const noticecontroller = require('../controller/noticecontroller')
router.get('/notice/',noticecontroller.getAllNotice);
router.get('/deletenotice/:id',noticecontroller.DeleteNoticeById);
router.post('/submitnotice/',noticecontroller.SubmitNotice);

const gallerycontoller = require('../controller/gallerycontroller')
router.get('/gallery/',gallerycontoller.getAllGallery);
router.get('/deletegallery/:id',gallerycontoller.DeleteGalleryById);
router.post('/submitgallery/',gallerycontoller.SubmitGallery);

const contactcontoller = require('../controller/contactuscontroller')
router.get('/contact/',contactcontoller.getAllContact);
router.get('/deletecontact/:id',contactcontoller.DeleteContactById);
router.post('/submitcontact/',contactcontoller.SubmitContact);

router.get('/list/',contoller.getAllAcadmic);
router.get('/login/:id', contoller.systemLogin);
router.post('/syslogin', contoller.SysLogin);


router.post('/submitprofessor/',professorcontroller.SubmitProfessor);
module.exports=router;