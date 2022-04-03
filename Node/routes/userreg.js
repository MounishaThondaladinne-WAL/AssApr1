var express = require("express");
var router = express.Router();
var registerController = require("../controllers/userreg");
router.get("/", registerController.getUsers);
router.post("/", registerController.RegsiterUser);
router.get("/checkusername/:username", registerController.checkUsername);
router.get("/checkemail/:email", registerController.checkEmail);
router.post("/login", registerController.loginUser);
module.exports = router;
