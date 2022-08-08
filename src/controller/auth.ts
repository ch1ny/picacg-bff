import { HmacSHA256 } from 'crypto-js';
import fetch from 'node-fetch';
import { PicAcgConstants } from '../constants';

class Auth {
	constructor() {}

	private getSign(url: string, timestamp: string, nonce: string, method: 'GET' | 'POST'): string {
		const key = `${url}${timestamp}${nonce}${method}C69BAF41DA5ABD1FFEDC6D2FEA56B`;
		return HmacSHA256(
			key.toLowerCase(),
			'~d}$Q7$eIni=V)9\\RK/P.RM4;9[7|@/CA}b~OW!3?EV`:<>M7pddUBL5n|0/*Cn'
		).toString();
	}

	async getToken(email: string, password: string) {
		const requestUrl = `${PicAcgConstants.Url}auth/sign-in`;
		const requestTime = (new Date().getTime() / 1000).toFixed(0);
		const token: IToken = await fetch(requestUrl, {
			method: 'POST',
			headers: {
				...PicAcgConstants.Headers,
				time: requestTime,
				signature: this.getSign(
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
