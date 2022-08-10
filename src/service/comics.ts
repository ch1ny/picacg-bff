import fetch from 'node-fetch';
import { PicAcgConstants } from '../constants';
import { Service } from '../core';
import { IComics, IComicsChapter, IComicsPics } from '../types';
import { generateHeader } from '../util';

class Comics extends Service {
	constructor() {
		super();
	}

	/**
	 * 获取漫画详情
	 * @param token token
	 * @param id 漫画 id
	 * @returns
	 */
	async getComicsInfo(token: string, id: string): Promise<IComics> {
		return await fetch(`${PicAcgConstants.Url}/comics/${id}`, {
			headers: generateHeader(`comics/${id}`, 'GET', token),
		}).then((res) => res.json());
	}

	/**
	 * 获取漫画章节
	 * @param token token
	 * @param id 漫画 id
	 * @param page 漫画分页，从 1 开始
	 * @returns
	 */
	async getComicsEps(token: string, id: string, page: number): Promise<IComicsChapter> {
		return await fetch(`${PicAcgConstants.Url}/comics/${id}/eps?page=${page}`, {
			headers: generateHeader(`comics/${id}/eps?page=${page}`, 'GET', token),
		}).then((res) => res.json());
	}

	/**
	 * 获取当前漫画章节指定页数所有图片
	 * @param token token
	 * @param id 漫画 id
	 * @param epsId 漫画分页，从 1 开始
	 * @param page 漫画页数，哔咔一组图集按 40 张图片计算
	 * @returns
	 */
	async getComicsPics(
		token: string,
		id: string,
		epsId: string,
		page: number
	): Promise<IComicsPics> {
		return await fetch(
			`${PicAcgConstants.Url}/comics/${id}/order/${epsId}/pages?page=${page}`,
			{
				headers: generateHeader(
					`comics/${id}/order/${epsId}/pages?page=${page}`,
					'GET',
					token
				),
			}
		).then((res) => res.json());
	}
}

export const comics = new Comics();
