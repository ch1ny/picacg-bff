import { PicAcgConstants } from '../constants';
import { getSignature } from './getSignature';

export const generateHeader = (apisig: string, method: 'GET' | 'POST', token?: string) => {
	const time = (new Date().getTime() / 1000).toFixed(0);

	return {
		...PicAcgConstants.Headers,
		time,
		signature: getSignature(apisig, time, PicAcgConstants.Headers.nonce, method),
		...(token ? { authorization: token } : {}),
	};
};
