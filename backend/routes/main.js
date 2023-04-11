const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const authController = require("../controllers/auth");
const { ensureAuth,  ensureGuest } = require("../middleware/auth");

router.get("/", homeController.getIndex);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/user", authController.getUser);

module.exports = router;


// step 1 - cd into the correct directory (either frontend or backend)
// step 2 - npm run dev for frontend
// step 3 - if cd into backend (nodemon - ) npm run start
