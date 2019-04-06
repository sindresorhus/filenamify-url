import {Options as FilenamifyOptions} from 'filenamify';

declare namespace filenamifyUrl {
	type Options = FilenamifyOptions;
}

declare const filenamifyUrl: {
	/**
	Convert a URL to a valid filename.

	@param input - A URL to convert to a valid filename.
	@returns A valid filename for `input`.

	@example
	```
	import filenamifyUrl = require('filenamify-url');

	filenamifyUrl('http://sindresorhus.com/foo?bar=baz');
	//=> 'sindresorhus.com!foo!bar=baz'

	filenamifyUrl('http://sindresorhus.com/foo', {replacement: '🐴'});
	//=> 'sindresorhus.com🐴foo'
	```
	*/
	(input: string, options?: filenamifyUrl.Options): string;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function filenamifyUrl(input: string, options?: Options): string;
	// export = filenamifyUrl;
	default: typeof filenamifyUrl;
};

export = filenamifyUrl;
