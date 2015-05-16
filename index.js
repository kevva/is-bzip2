'use strict';

module.exports = function (buf) {
	if (!buf || buf.length < 3) {
		return false;
	}

	return buf[0] === 0x42 && buf[1] === 0x5a && buf[2] === 0x68;
};
