const express=require("express");
const router=express.Router();
const authController=require("./../controllers/authController")
const holidayController=require("../controllers/holidayController")

router.post("/addHoliday",authController.protect,authController.restrict("Student","Teacher"), holidayController.addHoliday)
//view holiday
router.get("/view_holiday",authController.protect, holidayController.viewHoliday)
//admin delete holiday
router.delete("/delete_holiday/:holiday_employee_id",authController.protect,authController.restrict("Student","Teacher"),holidayController.deleteHoliday);
router.put("/editholiday",authController.protect,authController.restrict("Student","Teacher"),holidayController.editHoliday)


module.exports=router;