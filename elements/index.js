var express = require('express');
var app = express();
app.set('port', 3000);
app.use(express.static(__dirname + '/app'));
app.listen(3000);