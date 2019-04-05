import {expectType} from 'tsd';
import filenamifyUrl = require('.');

expectType<string>(filenamifyUrl('http://sindresorhus.com/foo?bar=baz'));
expectType<string>(
	filenamifyUrl('http://sindresorhus.com/foo', {replacement: '🐴'})
);
