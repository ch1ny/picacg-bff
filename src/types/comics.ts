export interface IComics {
	code: number;
	message: string;
	data: {
		comic: {
			_id: string;
			_creator: {
				_id: string;
				gender: string;
				name: string;
				verified: boolean;
				exp: number;
				level: number;
				characters: string[];
				role: string;
				avatar: {
					originalName: string;
					path: string;
					fileServer: string;
				};
				title: string;
				slogan: string;
				character: string;
			};
			title: string;
			description: string;
			thumb: {
				originalName: string;
				path: string;
				fileServer: string;
			};
			author: string;
			chineseTeam: string;
			categories: string[];
			tags: string[];
			pagesCount: number;
			epsCount: number;
			finished: boolean;
			updated_at: string;
			created_at: string;
			allowDownload: boolean;
			allowComment: boolean;
			totalLikes: number;
			totalViews: number;
			viewsCount: number;
			likesCount: number;
			isFavourite: boolean;
			isLiked: boolean;
			commentsCount: number;
		};
	};
}

export interface IComicsChapter {
	code: number;
	message: string;
	data: {
		eps: {
			docs: {
				_id: string;
				title: string;
				order: number;
				updated_at: string;
				id: number;
			}[];
			total: number;
			limit: number;
			page: number;
			pages: number;
		};
	};
}

export interface IComicsPics {
	code: number;
	message: string;
	data: {
		pages: {
			docs: {
				_id: string;
				media: {
					originalName: string;
					path: string;
					fileServer: string;
				};
				id: string;
			}[];
			total: number;
			limit: number;
			page: number;
			pages: number;
		};
		ep: {
			_id: string;
			title: string;
		};
	};
}
