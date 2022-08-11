import fetch from 'node-fetch';
import { Service } from '../core';

class Image extends Service {
	constructor() {
		super();
	}

	async proxyImage(picUrl: string) {
		return await fetch(picUrl, {
			method: 'GET',
			headers: {
				accept: 'application/vnd.picacomic.com.v1+json',
				'User-Agent': 'okhttp/3.8.1',
				'Content-Type': 'application/json; charset=UTF-8',
				'Response-Type': 'arraybuffer',
				'api-key': 'C69BAF41DA5ABD1FFEDC6D2FEA56B',
				'app-build-version': '45',
				'app-channel': '3',
				'app-platform': 'android',
				'app-uuid': 'defaultUuid',
				'app-version': '2.2.1.3.3.4',
				'image-quality': 'original',
				nonce: '4ce7a7aa759b40f794d189a88b84aba8',
			},
		}).then((res) => res.buffer());
	}
}

export const image = new Image();
