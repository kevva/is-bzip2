'use strict';

module.exports = function (buf) {
	if (!buf || buf.length < 3) {
		return false;
	}

	return buf[0] === 66 && buf[1] === 90 && buf[2] === 104;
};
