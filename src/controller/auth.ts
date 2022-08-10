import { Request, Response } from 'express';
import { Controller } from '../core';
import service from '../service';

class Auth extends Controller {
	constructor() {
		super();
	}

	async getToken(request: Request, response: Response) {
		const { email, password } = request.query as {
			email: string;
			password: string;
		};
		return await service.auth.getToken(email, password);
	}
}

export const auth = new Auth();
