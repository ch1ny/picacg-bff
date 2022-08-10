import { Request, Response } from 'express';
import controller from './controller';

export const router: Record<
	string,
	Record<string, (request: Request, response: Response) => Promise<any>>
> = {
	all: {
		'/login': controller.auth.getToken,
		'/collections': controller.collections.getCollections,
	},
	get: {},
	post: {},
};
