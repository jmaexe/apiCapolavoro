const express = require("express");

const router = express.Router();

const {getAll,getCharacterById,getAllCharactersCrew, getMoreInfo} = require('../controllers/onepiece');


router.use((req, res, next) => {
  // https://progettocapolavoro.web.app
  res.setHeader("Access-Control-Allow-Origin", "https://progettocapolavoro.web.app");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

router.get("/",getAll);

router.get("/character/:id",getCharacterById)

router.get("/allCharactersStrawHats",getAllCharactersCrew)

router.get("/moreinfo",getMoreInfo)
module.exports = router;
