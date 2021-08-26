import {expectType} from 'tsd';
import filenamifyUrl from './index.js';

expectType<string>(filenamifyUrl('http://sindresorhus.com/foo?bar=baz'));
expectType<string>(
	filenamifyUrl('http://sindresorhus.com/foo', {replacement: '🐴'}),
);
