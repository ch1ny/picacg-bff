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
}

export const comics = new Comics();
