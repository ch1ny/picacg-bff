import fetch from 'node-fetch';
import { PicAcgConstants } from '../constants';
import { Service } from '../core';
import { getSignature } from '../util';

class Collections extends Service {
	constructor() {
		super();
	}

	async getCollections(token: string): Promise<ICollections> {
		const requestTime = (new Date().getTime() / 1000).toFixed(0);
		return await fetch(`${PicAcgConstants.Url}collections`, {
			headers: {
				...PicAcgConstants.Headers,
				time: requestTime,
				signature: getSignature(
					'collections',
					requestTime,
					PicAcgConstants.Headers.nonce,
					'GET'
				),
				authorization: token,
			},
		}).then((res) => res.json());
	}
}

export const collections = new Collections();
