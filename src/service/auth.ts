import fetch from 'node-fetch';
import { Service } from '.';
import { PicAcgConstants } from '../constants';
import { getSignature } from '../util';

class Auth extends Service {
	constructor() {
		super();
	}

	async getToken(email: string, password: string) {
		const requestUrl = `${PicAcgConstants.Url}auth/sign-in`;
		const requestTime = (new Date().getTime() / 1000).toFixed(0);
		const token: IToken = await fetch(requestUrl, {
			method: 'POST',
			headers: {
				...PicAcgConstants.Headers,
				time: requestTime,
				signature: getSignature(
					'auth/sign-in',
					requestTime,
					PicAcgConstants.Headers.nonce,
					'POST'
				),
			},
			body: JSON.stringify({ email, password }),
		}).then((res) => res.json() as Promise<any>);

		return token;
	}
}

export const auth = new Auth();
