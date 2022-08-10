import { Request, Response } from 'express';
import { Controller } from '../core';
import service from '../service';

class Collections extends Controller {
	constructor() {
		super();
	}

	async getCollections(request: Request, response: Response): Promise<ICollections> {
		return await service.collections.getCollections(request.query.token as string);
	}
}

export const collections = new Collections();
