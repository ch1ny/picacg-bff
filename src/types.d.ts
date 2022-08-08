export {};

declare global {
	interface IToken {
		error?: string;
		detail?: string;
		code: number;
		message: string;
		data: {
			token: string;
		};
	}

	interface ICollections {
		code: number;
		data: {
			collections: {
				comics: {
					_id: string;
					author: string;
					categories: string[]; //标签
					epsCount: number;
					finished: boolean; //是否完结
					pagesCount: number; //总页数
					thumb: {
						fileServer: string;
						originalName: string;
						path: string;
					};
					title: string;
					totalLikes: number;
					totalViews: number;
				}[];

				title: string;
			}[];
		};
		message: string;
	}
}
