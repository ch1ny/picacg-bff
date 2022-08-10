import { Request, Response } from 'express';
import { Controller } from '../core';
import service from '../service';

class Categories extends Controller {
	constructor() {
		super();
	}

	async getCategories(request: Request, response: Response) {
		return await service.categories.getComicCategories(request.query.token as string);
	}

	async getCategoryDetail(request: Request, response: Response) {
		const { token, page, title, sort } = request.query;
		return await service.categories.getComicBlockDetail(
			`${token}`,
			parseInt(`${page}`),
			`${title}`,
			sort as 'ua' | 'dd' | 'da' | 'ld' | 'vd'
		);
	}
}

export const categories = new Categories();
