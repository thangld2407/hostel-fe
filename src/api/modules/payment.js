import * as RequestApi from '../request';

const URL = 'payment';

export function Payment(data) {
	return RequestApi.postOne(`${URL}/create-url`, data);
}

export function getIssuesTable() {
	return RequestApi.getAll(`${URL}/getall`);
}