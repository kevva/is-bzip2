/*global describe, it */
'use strict';

var assert = require('assert');
var fs = require('fs');
var isBzip = require('../');
var path = require('path');

describe('isBzip()', function () {
    function check(file) {
        return isBzip(fs.readFileSync(file));
    }

    it('should detect TAR from buffer', function (cb) {
        assert(check(path.join(__dirname, 'fixtures/test.bz2')));
        cb();
    });
});
