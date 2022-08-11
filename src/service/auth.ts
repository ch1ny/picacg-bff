import fetch from 'node-fetch';
import { PicAcgConstants } from '../constants';
import { Service } from '../core';
import { IToken } from '../types';
import { generateHeader } from '../util';

class Auth extends Service {
	constructor() {
		super();
	}

	async getToken(email: string, password: string): Promise<IToken> {
		const token: IToken = await fetch(`${PicAcgConstants.Url}/auth/sign-in`, {
			method: 'POST',
			headers: generateHeader('auth/sign-in', 'POST'),
			body: JSON.stringify({ email, password }),
		}).then((res) => res.json() as Promise<any>);

		return token;
	}
}

export const auth = new Auth();
