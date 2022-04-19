const express=require("express");
const router=express.Router();
const authController=require("../controllers/authController")
const attendenceController=require("../controllers/attendanceController")

//admin enroll the student for attendance
router.post("/Attendence",authController.protect, authController.restrict("Student","Teacher"),attendenceController.Attendence)
//student request for attendance
router.post("/RequestAttendance",authController.protect,authController.restrict("Admin","Teacher"), attendenceController.requestAttendance)
//teacher view student attendance request
router.get("/viewStudentRequests", authController.protect,authController.restrict("Student","Admin"), attendenceController.viewAttendanceRequest )
//1.admin view student attendance request
router.get("/admin_view_attendance_request",authController.protect,authController.restrict("Student","Teacher"), attendenceController.viewAttend_Request)
//teacher or admin view specific student request
router.get("/view_studentspecific_request/:attendance_student_id",authController.protect,authController.restrict("Student"), attendenceController.view_Specific_Student_Request)
//teacher or admin accept or reject the attendance request
router.post("/AR_Studentrequest/:attendance_student_id/:status",authController.protect,authController.restrict("Student"), attendenceController.Accept_Reject_Student_Request)
//teacher or admin accept the attendance request 
router.post("/Accept_request/:attendance_student_id",authController.protect,authController.restrict("Student"),  attendenceController.Accept_Student_Request)
//teacher or admin  reject the attendance request
router.post("/Reject_student_Request/:attendance_student_id",authController.protect,authController.restrict("Student"),attendenceController.Reject_Student_Request)
//student view attendance
router.get("/viewAttendance",authController.protect, attendenceController.viewAttendance)
//admin view attendance of all student 
router.get("/Admin_viewAttendance",authController.protect,authController.restrict("Teacher","Student"), attendenceController.Admin_viewAttendance)
//admin view specific student attendance
router.get("/Admin_view/:attendance_student_id",authController.protect,authController.restrict("Teacher","Student"),attendenceController.Admin_view_SpecificStudent_Attendance)
//admin change attendance
router.patch("/ChangeAttendance/:user_id",authController.protect, authController.restrict("Teacher","Student"),attendenceController.changeattendance)

module.exports=router;