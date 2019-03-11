# filenamify-url [![Build Status](https://travis-ci.org/sindresorhus/filenamify-url.svg?branch=master)](https://travis-ci.org/sindresorhus/filenamify-url)

> Convert a URL to a valid filename


## Install

```
$ npm install filenamify-url
```


## Usage

```js
const filenamifyUrl = require('filenamify-url');

filenamifyUrl('http://sindresorhus.com/foo?bar=baz');
//=> 'sindresorhus.com!foo!bar=baz'

filenamifyUrl('http://sindresorhus.com/foo', {replacement: '🐴'});
//=> 'sindresorhus.com🐴foo'
```


## API

### filenamifyUrl(input, [options])

Accepts a URL and returns a valid filename.

#### input

Type: `string`

A URL to convert to a valid filename.

#### options

Type: `Object`

See the [`filenamify` options](https://github.com/sindresorhus/filenamify#options).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
