const express = require("express");

const router = express.Router();

const {getFavouriteSongs,getAuth, callback} = require('../controllers/spotify');




router.use((req, res, next) => {
  // ["http://localhost:5173","https://progettocapolavoro.web.app"]
  res.setHeader("Access-Control-Allow-Origin","https://progettocapolavoro.web.app");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

router.get("/favouriteSongs",getFavouriteSongs);
router.get("/auth",getAuth)
router.get("/callback",callback)



module.exports = router;
