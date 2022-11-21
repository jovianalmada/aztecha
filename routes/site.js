const path = require("path");

const express = require("express");

const siteController = require("../controllers/site");

const router = express.Router();

router.get("/", siteController.getIndex);

router.get("/about", siteController.getAbout);

router.get("/services", siteController.getServices);

module.exports = router;
