/**
 * Created by matthias on 21.04.17.
 */
var express = require('express');
var routes = require('./routes/index');

var app = express();

app.use('/test', express.static(process.cwd() + '/test'));
app.use('/server', express.static(process.cwd() + '/server'));

routes(app);

app.listen(3000, function () {
    console.log("listening on port 3000");
    var test = require(process.cwd() + '/test/manual');
    test.runTests();
});