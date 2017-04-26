/**
 * Created by matthias on 21.04.17.
 */
var assert = require('assert');
var knexdb = require(process.cwd() + '/server/knexdb.js');

function runTest() {

    // knexdb.printUsers();
    // test2('simon');
}

function test1() {
    knexdb.deleteUser('matthias');
}

function test2(username) {
    knexdb.findUser(username).then(function (user) {
        if (user.length === 0) {
            knexdb.createUser(username, 12, 'de')
                .then(function () {
                    console.log('--success');
                }, function () {
                    console.log('--failed');
                })
        } else {
            console.log('user already exists');
        }
    });
}

exports.runTests = runTest;