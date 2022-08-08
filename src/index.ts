import express, { Request, Response } from 'express';
import controller from './controller';

const PORT = 9876;

const app = express();
app.use(express.static('public'));

const listener = app.listen(PORT, () => {
	console.log(`Picacg-bff is listening on port : ${JSON.stringify(listener.address())}`);
});

app.get('/*', async (request: Request, response: Response): Promise<any> => {
	response.setHeader('Access-Control-Allow-Origin', '*');

	const pathname = request.path;

	switch (pathname) {
		case '/login':
			const { email, password } = request.query as {
				email: string;
				password: string;
			};
			const token = await controller.auth.getToken(email, password);
			response.send(token);
	}
});
