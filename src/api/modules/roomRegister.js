import * as RequestApi from '../request';

const URL = 'room/rent';

export function RegisterRoom(data) {
	return RequestApi.postOne(`${URL}/register`, data);
}

export function getHostelTable() {
	return RequestApi.getAll(`${URL}/getall`);
}

export function getOneHostel(id) {
	return RequestApi.getOne(`${URL}/getone`,id);
}

export function deleteHostel(id) {
	return RequestApi.deleteOne(`${URL}/delete`,id);
}