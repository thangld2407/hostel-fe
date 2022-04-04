import { postLogin, getUser } from '@/api/modules/auth';
import { isLogged, setLogged, removeToken } from '@/utils/auth';
import { resetRouter } from '@/router';
import Cookies from 'js-cookie';
import ConstCookie from '@/const/cookie';

export function getToken() {
	const Token = Cookies.get(ConstCookie['accesss_token']);

	if (Token) {
		return Token;
	}

	return '';
}
const state = {
	_id: '',
	fullname: '',
	email: '',
	token: getToken(),
	role_name: []
};

const mutations = {
	SET_ID: (state, id) => {
		state._id = id;
	},
	SET_NAME: (state, name) => {
		state.fullname = name;
	},
	SET_EMAIL: (state, email) => {
		state.email = email;
	},
	SET_ROLES: (state, roles) => {
		state.role_name = roles;
	},
	SET_TOKEN: (state, token) => {
		state.accessToken = token;
		Cookies.set(ConstCookie['TOKEN'], token);
	}
};

const actions = {
	doLogout({ commit }) {
		commit('SET_ID', '');
		commit('SET_NAME', '');
		commit('SET_EMAIL', '');
		commit('SET_ROLES', []);

		removeToken();
		resetRouter();
	},
	resetToken({ commit }) {
		return new Promise(resolve => {
			commit('SET_ROLES', []);
			removeToken();
			resolve();
		});
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
