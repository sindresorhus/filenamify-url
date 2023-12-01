import {Options} from 'filenamify';

/**
Convert a URL to a valid filename.

@param url - A URL to convert to a valid filename.
@returns A valid filename for `url`.

@example
```
import filenamifyUrl from 'filenamify-url';

filenamifyUrl('http://sindresorhus.com/foo?bar=baz');
//=> 'sindresorhus.com!foo!bar=baz'

filenamifyUrl('http://sindresorhus.com/foo', {replacement: '🐴'});
//=> 'sindresorhus.com🐴foo'

filenamifyUrl(new URL('http://sindresorhus.com'));
//=> 'sindresorhus.com'
```
*/
export default function filenamifyUrl(url: string | URL, options?: Options): string;

export {Options} from 'filenamify';
