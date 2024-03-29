const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.render("test30");
})
app.get("/user_info", function (req, res) {
    var userId = req.query.userId;
    var name = req.query.name;
    var userPw = req.query.userPw;
    var comment = req.query.comment;
    res.send(`아이디 : ${userId}, 이름 : ${name}, 비밀번호 : ${userPw}, 코멘트 : ${comment}`);
})

app.listen(port, () => {
    console.log("Server Port : ", port);
})