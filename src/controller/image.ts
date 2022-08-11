import { Request, Response } from 'express';
import { Controller } from '../core';
import service from '../service';

class Image extends Controller {
	constructor() {
		super();
	}

	async proxyImage(request: Request, response: Response) {
		const url = decodeURIComponent(request.query.url as string);
		return await service.image.proxyImage(url);
	}
}

export const image = new Image();
