import fetch from 'node-fetch';
import { PicAcgConstants } from '../constants';
import { Service } from '../core';
import { generateHeader } from '../util';

class Collections extends Service {
	constructor() {
		super();
	}

	async getCollections(token: string): Promise<ICollections> {
		return await fetch(`${PicAcgConstants.Url}/collections`, {
			headers: generateHeader('collections', 'GET', token),
		}).then((res) => res.json());
	}
}

export const collections = new Collections();
