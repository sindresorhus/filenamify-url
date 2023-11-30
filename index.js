import filenamify from 'filenamify';
import humanizeUrl from 'humanize-url';

export default function filenamifyUrl(url, options) {
	if (!(typeof url === 'string' || url instanceof URL)) {
		throw new TypeError('Expected a string or URL instance');
	}

	return filenamify(decodeURIComponent(humanizeUrl(url.toString())), options);
}
