const express=require("express");
const { restart } = require("nodemon");
const router=express.Router();
const authController=require("../controllers/authController")
const leaveController=require("../controllers/leaveController")

//Student request for leaves
router.post("/leaveRequest",authController.protect,authController.restrict("Admin","Teacher"), leaveController.leaverequest)
//admin add request for leave
router.post("/leaveRequest/:user_id",authController.protect,authController.restrict("Student","Teacher"), leaveController.Admin_leaverequest)
//view leaves requests
router.get("/view_Request",authController.protect,authController.restrict("Student","Teacher"), leaveController.view_leaveRequest)
//admin accept leave requests
router.post("/Accept_request/:user_id",authController.protect,authController.restrict("Student","Teacher"), leaveController.Accept_leaveRequest)
//reject leave request
router.delete("/Delete_request/:user_id",authController.protect,authController.restrict("Student","Teacher"),leaveController.Reject_leaveRequest)
//accept delete request
router.post("/AR_request/:user_id",authController.protect,authController.restrict("Student","Teacher"),leaveController.Accept_Reject_leaveRequest)
router.get("/view_leaves",leaveController.view_leave)
//admin delete leaves
router.delete("/deleteLeave/:user_id",authController.protect,authController.restrict("Student","Teacher"),leaveController.deleteLeave)


module.exports=router;