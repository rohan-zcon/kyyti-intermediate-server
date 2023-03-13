var express = require("express");
var router = express.Router();
const ax = require("../helpers/fetchPost");
/* POST login. */

router.post("/*", async function (req, res, next) {
  try {
    if (req.originalUrl === "/auth/v1/login") {
      const u = { port: 8009, path: req.originalUrl };
      const resp = await ax(u, {
        headers: req.header,
        body: req.body,
      });

      return res.send(resp);
    }

    const u = { path: req.originalUrl };

    const resp = await ax(u, {
      headers: req.header,
      body: req.body,
    });

    res.send(resp);
  } catch (error) {
    console.error(error);
    res.send("success: false");
  }
});

module.exports = router;
