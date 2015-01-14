'use strict';
var test = require('ava');
var filenamifyUrl = require('./');

test(function (t) {
	t.assert(filenamifyUrl('sindresorhus.com') === 'sindresorhus.com');
	t.assert(filenamifyUrl('sindresorhus.com/foo/bar?foo=bar&baz=faz') === 'sindresorhus.com!foo!bar!baz=faz&foo=bar');
	t.assert(filenamifyUrl('sindresorhus.com/foo/bar?foo=bar&baz=faz') === 'sindresorhus.com!foo!bar!baz=faz&foo=bar');
	t.assert(filenamifyUrl('http://user:pass@www.sindresorhus.com/foo/bar/') === 'sindresorhus.com!foo!bar');
	t.assert(filenamifyUrl('http://user@sindresorhus.com') === 'sindresorhus.com');
	t.assert(filenamifyUrl('sindresorhus.com/foo', {replacement: '🐴'}) === 'sindresorhus.com🐴foo');
	t.assert(filenamifyUrl('http://www.sindresorhus.com/?query=pageres*|<>:"\\') === 'sindresorhus.com!query=pageres');
	t.end();
});
