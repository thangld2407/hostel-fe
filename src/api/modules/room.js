import * as RequestApi from '../request';

const URL = '/room';

export function postRoom(data) {
	return RequestApi.postOne(URL, data);
}

export function getRoomTable(params) {
	return RequestApi.getAll(URL, params);
}

export function editRoom(id, data) {
	return RequestApi.putOne(`${URL}/${id}`, data);
}
export function getOneRoom(id) {
	return RequestApi.getOne(`${URL}/${id}`);
}

export function deleteRoom(id) {
	return RequestApi.deleteOne(`${URL}/${id}`);
}
