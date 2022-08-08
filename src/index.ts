import express, { Request, Response } from 'express';
import { router } from './router';

const PORT = 9876;

const app = express();
app.use(express.static('public'));

const listener = app.listen(PORT, () => {
	console.log(`Picacg-bff is listening on port : ${JSON.stringify(listener.address())}`);
});

app.get('/*', async (request: Request, response: Response): Promise<any> => {
	response.setHeader('Access-Control-Allow-Origin', '*');

	const pathname = request.path;

	const controller = router[pathname];
	response.send(await controller(request, response));
});
