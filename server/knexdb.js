(function () {
    var knexdb = require('knex')({
        client: 'pg',
        connection: {
            user: 'matthias',
            database: 'test',
            port: 5432,
            host: 'localhost',
            password: 'admin'
        },
        debug: false,
        pool: {
            min: 1,
            max: 2
        }
    });


    exports.findUser = function (username) {
        return knexdb('users').where({username: username});
    };

    exports.createUser = function (username, age, country) {
        return knexdb('users').insert({username: username, age: age, country: country})
            .then(function () {
                console.log('user: ' + username + 'created successfully');
            }, function () {
                console.log('creation of user: ' + username + ' failed');
            });
    };

    exports.deleteUser = function (username) {
        return knexdb('users').where('username', username).del()
            .then(function (count) {
                console.log(count);
            }, function () {
                console.log('cant delete user: ' + username);
            });
    };

    exports.getUsers = function () {
        return knexdb.select().from('users');
    }
})();

