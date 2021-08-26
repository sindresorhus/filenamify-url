import filenamify from 'filenamify';
import humanizeUrl from 'humanize-url';

export default function filenamifyUrl(string, options) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	return filenamify(decodeURIComponent(humanizeUrl(string)), options);
}
