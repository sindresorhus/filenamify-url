'use strict';
const filenamify = require('filenamify');
const humanizeUrl = require('humanize-url');

const filenamifyUrl = (string, options) => {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	return filenamify(decodeURIComponent(humanizeUrl(string)), options);
};

module.exports = filenamifyUrl;
// TODO: Remove this for the next major release
module.exports.default = filenamifyUrl;
