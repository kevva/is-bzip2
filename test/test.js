'use strict';

var isBzip2 = require('../');
var path = require('path');
var readChunk = require('read-chunk');
var test = require('ava');

test('should detect BZIP2 from buffer', function (t) {
	t.plan(2);

	readChunk(path.join(__dirname, 'fixtures/test.bz2'), 0, 4, function (err, buf) {
		t.assert(!err, err);
		t.assert(isBzip2(buf));
	});
});
