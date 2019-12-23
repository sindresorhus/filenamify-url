import test from 'ava';
import filenamifyUrl from '.';

test('main', t => {
	t.is(filenamifyUrl('sindresorhus.com'), 'sindresorhus.com');
	t.is(filenamifyUrl('sindresorhus.com/foo/bar?foo=bar&baz=faz'), 'sindresorhus.com!foo!bar!baz=faz&foo=bar');
	t.is(filenamifyUrl('sindresorhus.com/foo/bar?foo=bar&baz=faz'), 'sindresorhus.com!foo!bar!baz=faz&foo=bar');
	t.is(filenamifyUrl('http://user:pass@www.sindresorhus.com/foo/bar/'), 'sindresorhus.com!foo!bar');
	t.is(filenamifyUrl('http://user@sindresorhus.com'), 'sindresorhus.com');
	t.is(filenamifyUrl('sindresorhus.com/foo', {replacement: '🐴'}), 'sindresorhus.com🐴foo');
	t.is(filenamifyUrl('http://www.sindresorhus.com/?query=pageres*|<>:"\\'), 'sindresorhus.com!query=pageres');
});
