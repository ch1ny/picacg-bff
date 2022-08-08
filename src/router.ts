import { Request, Response } from 'express';
import controller from './controller';

export const router: Record<string, (request: Request, response: Response) => Promise<any>> = {
	'/login': controller.auth.getToken,
	'/collections': controller.collections.getCollections,
};
