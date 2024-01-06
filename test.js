const express = require("express");

const server = express();

server.get("/:id.html", (req, res) => {
    console.log(req.params.id);
})

server.listen(9000, () => {
    console.log("服务器启动成功");
});