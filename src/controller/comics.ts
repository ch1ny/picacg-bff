import { Request, Response } from 'express';
import { Controller } from '../core';
import service from '../service';

class Comics extends Controller {
	constructor() {
		super();
	}

	async getComicsInfo(request: Request, response: Response) {
		const { token, id } = request.query as {
			token: string;
			id: string;
		};
		return await service.comics.getComicsInfo(token, id);
	}

	async getComicsChapters(request: Request, response: Response) {
		const { token, id, page } = request.query as {
			token: string;
			id: string;
			page: string;
		};
		return await service.comics.getComicsEps(token, id, parseInt(page));
	}

	async getComicsPics(request: Request, response: Response) {
		const { token, id, chapterId, page } = request.query as {
			token: string;
			id: string;
			chapterId: string;
			page: string;
		};
		return await service.comics.getComicsPics(token, id, chapterId, parseInt(page));
	}
}

export const comics = new Comics();
