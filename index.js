'use strict';

const filenamify = require('filenamify');
const humanizeUrl = require('humanize-url');

const filenamifyUrl = (string, options) => {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	return filenamify(humanizeUrl(string), options);
};

module.exports = filenamifyUrl;
module.exports.default = filenamifyUrl;
