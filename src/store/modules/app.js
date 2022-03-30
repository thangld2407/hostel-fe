import Cookies from 'js-cookie';
import { getLanguage } from '@/lang/helper/getLang';
import ConstCookie from '@/const/cookie';

const state = {
	language: getLanguage(),
	list: [
		{
			id:1,
			price:12,
			description:"abc"
		}
	],
  	room_info:[],
	list_account:[]
};

const mutations = {
	SET_LANGUAGE: (state, language) => {
		state.language = language;
		Cookies.set(ConstCookie['LANGUAGE'], language);
	}
};

const actions = {
	setLanguage({ commit }, language) {
		commit('SET_LANGUAGE', language);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
