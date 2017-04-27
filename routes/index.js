
module.exports = function (app) {

    var logger = function (req, res, next) {
        console.log("logging");
        next();
    };

    app.use(logger);

    app.get('/', function (req, res) {
        res.send('hello world');
    });

    app.use('/users', require('./users'));
};
