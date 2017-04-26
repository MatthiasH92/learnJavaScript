
module.exports = function (app) {

    var logger = function (req, res, next) {
        console.log("logging");
        next();
    };

    app.use(logger);

    app.get('/', function (req, res) {
        res.send('hello world');
    });

    app.get('/star*', function (req, res) {
        res.send('stars');
    });

    app.get('/first/:first/second/:second', function (req, res) {
        res.send(req.param('first') + ' ' + req.param('second'));
    });

    app.all('/all', function (req, res, next) {
        res.send('all');
        next();
    });

    app.use('/users', require('./users'));
};
