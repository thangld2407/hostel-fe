import { postLogin, getUser } from '@/api/modules/auth';
import { isLogged, setLogged, removeToken } from '@/utils/auth';
import { resetRouter } from '@/router';

const state = {
	id: '',
	name: '',
	email: '',
	token: isLogged(),
	roles: []
};

const mutations = {
	SET_ID: (state, id) => {
		state.id = id;
	},
	SET_NAME: (state, name) => {
		state.name = name;
	},
	SET_EMAIL: (state, email) => {
		state.email = email;
	},
	SET_ROLES: (state, roles) => {
		state.roles = roles;
	}
};

const actions = {
	doLogin({ commit }, account) {
		return new Promise((resolve, reject) => {
			const URL = `/auth/login`;

			commit('SET_ID', 1);
			commit('SET_NAME', 'Thang');
			commit('SET_EMAIL', 'Win');
			commit('SET_ROLES', 'Admin');

			setLogged('1');
			resolve();
		});
	},
	getUserInfo({ commit }) {
		return new Promise((resolve, reject) => {
			const URL = `/auth/user`;

			commit('SET_ID', 1);
			commit('SET_NAME', 'Thang');
			commit('SET_EMAIL', 'Win');
			commit('SET_ROLES', 'Admin');

			resolve('DATA');
		});
	},
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
