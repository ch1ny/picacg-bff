import { Request, Response } from 'express';
import { Controller } from '../core';
import service from '../service';

class Comics extends Controller {
	constructor() {
		super();
	}

	async getComicInfo(request: Request, response: Response) {
		const { token, id } = request.query as {
			token: string;
			id: string;
		};
		return await service.comics.getComicInfo(token, id);
	}

	async getComicChapters(request: Request, response: Response) {
		const { token, id, page } = request.query as {
			token: string;
			id: string;
			page: string;
		};
		return await service.comics.getComicEps(token, id, parseInt(page));
	}

	async getComicPics(request: Request, response: Response) {
		const { token, id, chapterId, page } = request.query as {
			token: string;
			id: string;
			chapterId: string;
			page: string;
		};
		return await service.comics.getComicPics(token, id, chapterId, parseInt(page));
	}
}

export const comics = new Comics();
