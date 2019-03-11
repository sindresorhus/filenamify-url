import {expectType} from 'tsd-check';
import filenamifyUrl from '.';

expectType<string>(filenamifyUrl('http://sindresorhus.com/foo?bar=baz'));
expectType<string>(
	filenamifyUrl('http://sindresorhus.com/foo', {replacement: '🐴'})
);
