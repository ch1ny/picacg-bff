export interface IToken {
	error?: string;
	detail?: string;
	code: number;
	message: string;
	data: {
		token: string;
	};
}
