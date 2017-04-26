/**
 * Created by matthias on 21.04.17.
 */
var express = require('express');
var routes = require('./routes/index');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use('/test', express.static(process.cwd() + '/test'));
app.use('/server', express.static(process.cwd() + '/server'));

routes(app);

app.listen(5000, function () {
    console.log("listening on port 3000");
    var test = require(process.cwd() + '/test/manual');
    test.runTests();
});