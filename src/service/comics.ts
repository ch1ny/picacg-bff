import fetch from 'node-fetch';
import { PicAcgConstants } from '../constants';
import { Service } from '../core';
import { generateHeader } from '../util';

class Comics extends Service {
	constructor() {
		super();
	}

	/**
	 * 获取各个分区
	 * @param token token
	 * @returns 所有分区
	 */
	async getComicCategories(token: string) {
		return await fetch(`${PicAcgConstants.Url}/categories`, {
			headers: generateHeader('categories', 'GET', token),
		}).then((res) => res.json());
	}

	/**
	 * 获取分区详情
	 * @param token token
	 * @param page 分页数，从 1 开始
	 * @param title 分区标题
	 * @param sort 排序方式：ua => 默认，dd= > 新到旧，da => 旧到新，ld => 最多爱心，vd => 最多指名
	 * @returns
	 */
	async getComicBlockDetail(
		token: string,
		page: number,
		title: string,
		sort: 'ua' | 'dd' | 'da' | 'ld' | 'vd'
	) {
		return await fetch(`${PicAcgConstants.Url}/comics?page=${page}&c=${title}&s=${sort}`, {
			headers: generateHeader(`comics?page=${page}&c=${title}&s=${sort}`, 'GET', token),
		}).then((res) => res.json());
	}

	/**
	 * 获取漫画详情
	 * @param token token
	 * @param id 漫画 id
	 * @returns
	 */
	async getComicInfo(token: string, id: string) {
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
	async getComicEps(token: string, id: string, page: number) {
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
	async getComicPics(token: string, id: string, epsId: string, page: number) {
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
