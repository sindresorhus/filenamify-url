import test from 'ava';
import m from './';

test(t => {
	t.is(m('sindresorhus.com'), 'sindresorhus.com');
	t.is(m('sindresorhus.com/foo/bar?foo=bar&baz=faz'), 'sindresorhus.com!foo!bar!baz=faz&foo=bar');
	t.is(m('sindresorhus.com/foo/bar?foo=bar&baz=faz'), 'sindresorhus.com!foo!bar!baz=faz&foo=bar');
	t.is(m('http://user:pass@www.sindresorhus.com/foo/bar/'), 'sindresorhus.com!foo!bar');
	t.is(m('http://user@sindresorhus.com'), 'sindresorhus.com');
	t.is(m('sindresorhus.com/foo', {replacement: '🐴'}), 'sindresorhus.com🐴foo');
	t.is(m('http://www.sindresorhus.com/?query=pageres*|<>:"\\'), 'sindresorhus.com!query=pageres');
});
