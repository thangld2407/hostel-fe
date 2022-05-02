import * as RequestApi from '../request';

const URL = 'invoice';

export function postInvoice(data) {
	return RequestApi.postOne(`${URL}/create`, data);
}

export function getInvoice() {
	return RequestApi.getAll(`${URL}/getall`);
}
export function editInvoice(data) {
	return RequestApi.putOne(`${URL}/update`, data);
}
export function UploadInvoice(data) {
	return RequestApi.postOne(`${URL}/upload`, data);
}