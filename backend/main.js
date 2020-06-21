const express = require('express');
const app = express();
const {resolve} = require("path");

/*app.get('/', function (req, res) {
	res.send('Hello World!');
});*/

app.use(express.static('../frontend'));

app.listen(42069, function () {
	console.log('Example app listening on port 3000!');
	nw.Window.open("http://127.0.0.1:42069/index.html", {}, function(win) {
		win.setPosition(center);
		win.resizeTo(250,250)
		//win.show(true);
	});
});
