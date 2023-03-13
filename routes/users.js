var express = require("express");
var router = express.Router();
const { postData, axiosData } = require("../helpers/fetchPost");

/* POST login. */
router.post("/v1/login", async function (req, res, next) {
  try {
    console.log(req.method);
    console.log(`http://172.30.101.6:8009${req.originalUrl}`);
    const resp = await postData(`http://172.30.101.6:8009${req.originalUrl}`, {
      headers: req.headers,
      body: req.body,
    });
    res.send(resp);
  } catch (error) {
    console.error(error);
    res.send("success: false");
  }
});

module.exports = router;
