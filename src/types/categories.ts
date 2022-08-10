export interface ICategories {
	code: number;
	message: string;
	data: {
		categories:
			| {
					title: string;
					thumb: {
						originalName: string;
						path: string;
						fileServer: string;
					};
					isWeb: boolean;
					active: boolean;
					link: string;
			  }
			| {
					_id: string;
					title: string;
					description: string;
					thumb: {
						originalName: string;
						path: string;
						fileServer: string;
					};
			  }[];
	};
}

export interface ICategoryDetail {
	code: number;
	message: string;
	data: {
		comics: {
			docs: {
				_id: string;
				title: string;
				author: string;
				totalViews: number;
				totalLikes: number;
				pagesCount: number;
				epsCount: number;
				finished: boolean;
				categories: string[];
				thumb: {
					fileServer: string;
					path: string;
					originalName: string;
				};
				id: string;
				likesCount: number;
			}[];
			total: number;
			limit: number;
			page: number;
			pages: number;
		};
	};
}
