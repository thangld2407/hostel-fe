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

	return  '';
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
	SET_TOKEN:(state, token)=>{
		state.accessToken = token;
		Cookies.set(ConstCookie['TOKEN'], token);
	}
	
};

const actions = {
	doLogin({ commit }, account) {
		return new Promise((resolve, reject) => {
			const URL = `auth/login`;

			postLogin(URL, account)
				.then(res => {
					console.log(res)
					if (res['status'] !== 200) {
						reject();
					}

					const DATA = res['data'];
					console.log(DATA.role_id);
					commit('SET_ID', DATA['role_id']['_id']);
					commit('SET_NAME', DATA['user_id']['fullname']);
					commit('SET_EMAIL', DATA['user_id']['email']);
					commit('SET_ROLES', DATA['role_id']['role_name']);
					commit('SET_TOKEN', res.accessToken)

					setLogged('1');
					resolve();
				})
				.catch(err => {
					reject(err);
				});
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
