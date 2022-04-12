import { getUser } from '@/api/modules/auth';
import { removeToken } from '@/utils/auth';
import { resetRouter } from '@/router';
import Cookies from 'js-cookie';
import ConstCookie from '@/const/cookie';

const state = {
	_id: '',
	fullname: '',
	email: '',
	token: '',
	role_id: {}
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
		state.role_id = roles;
	},
	SET_TOKEN: (state, token) => {
		state.token = token;
	}
};

const actions = {
	doLogout({ commit }) {
		commit('SET_ID', '');
		commit('SET_NAME', '');
		commit('SET_EMAIL', '');
		commit('SET_ROLES', {});
		commit('SET_TOKEN','')

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
