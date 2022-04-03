import * as RequestApi from '../request';

const URL = 'user';

export function postUser(data) {
	return RequestApi.postOne(URL, data);
}

export function getUserTable() {
	return RequestApi.getAll(`${URL}/getall`);
}

export function editUser(id, data) {
	return RequestApi.putOne(`${URL}/${id}`, data);
}
export function getOneUser(id) {
	return RequestApi.getOne(`${URL}/${id}`);
}

export function deleteUser(id) {
	return RequestApi.deleteOne(`${URL}/${id}`);
}
