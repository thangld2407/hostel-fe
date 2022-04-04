const LANGUAGE = 'StudyAppLanguage';
const TOKEN = 'access_token';
import cookies from 'js-cookie';
export function setToken(tokenKey, value) {
	cookies.set(tokenKey, value);
}
export function getTokenAccess(tokenName) {
	return cookies.get(tokenName)
}
export default {
	LANGUAGE,
	TOKEN
};
