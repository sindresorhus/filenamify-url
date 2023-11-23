# filenamify-url

> Convert a URL to a valid filename

## Install

```sh
npm install filenamify-url
```

## Usage

```js
import filenamifyUrl from 'filenamify-url';

filenamifyUrl('http://sindresorhus.com/foo?bar=baz');
//=> 'sindresorhus.com!foo!bar=baz'

filenamifyUrl('http://sindresorhus.com/foo', {replacement: '🐴'});
//=> 'sindresorhus.com🐴foo'

filenamifyUrl(new URL('http://sindresorhus.com'));
//=> 'sindresorhus.com'
```

## API

### filenamifyUrl(url, options?)

Accepts a URL and returns a valid filename.

#### url

Type: `string | URL`

A URL to convert to a valid filename.

#### options

Type: `object`

See the [`filenamify` options](https://github.com/sindresorhus/filenamify#options).

## Related

- [filenamify-cli](https://github.com/sindresorhus/filenamify-cli) - CLI for this module
- [filenamify](https://github.com/sindresorhus/filenamify) - Convert a string to a valid safe filename
- [slugify](https://github.com/sindresorhus/slugify) - Slugify a string
