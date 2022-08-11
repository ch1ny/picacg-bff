import { Request, Response } from 'express';
import controller from './controller';

export const router: Record<
	string,
	Record<string, (request: Request, response: Response) => Promise<any>>
> = {
	all: {
		'/login': controller.auth.getToken,
		'/collections': controller.collections.getCollections,
		'/categories': controller.categories.getCategories,
		'/categories/detail': controller.categories.getCategoryDetail,
		'/comics/info': controller.comics.getComicsInfo,
		'/comics/chapter': controller.comics.getComicsChapters,
		'/comics/pics': controller.comics.getComicsPics,
		'/image/proxy': controller.image.proxyImage,
	},
	get: {},
	post: {},
};
