const express = require('express');
const app = express();
const {resolve} = require("path");

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(42069, function () {
	console.log('Example app listening on port 3000!');
	nw.Window.open(resolve("../frontend/index.html"), {}, function(win) {});
});
