import axios from 'axios';
import i18n from '@/lang';
import { getLanguage } from '@/lang/helper/getLang';
import { MakeToast } from '@/toast/toastMessage';

const baseURL = process.env.VUE_APP_BASE_URL;

const service = axios.create({
	baseURL: baseURL,
	timeout: 100000
});

service.interceptors.request.use(
	config => {
		config.headers['Accept-Language'] = getLanguage();
		config.headers['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6eyJfaWQiOiI2MjQ2YmM3OWU1MzJjMzM2NmUxYzk1MDciLCJyb2xlX2lkIjp7Il9pZCI6IjYyNDQ3YWNlYzYzNjVlNTBiY2MyZDM5ZiIsInJvbGVfbmFtZSI6ImFkbWluIiwiX192IjowfSwidXNlcl9pZCI6eyJfaWQiOiI2MjQ2YmM3OWU1MzJjMzM2NmUxYzk1MDYiLCJmdWxsbmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluMjQwNyIsImNyZWF0ZWRBdCI6IjIwMjItMDQtMDFUMDg6NDg6NTcuNTEzWiIsInVwZGF0ZUF0IjoiMjAyMi0wNC0wMVQwODo0ODo1Ny41MTNaIiwiX192IjowfSwiX192IjowfSwiaWF0IjoxNjQ4ODA0MjgzfQ.Aa9rFuU6TY2b4hLstP8EGCqKP-fzNC3bnjDeJ6aBfLM`
		return config;
	},
	error => {
		Promise.reject(error);
	}
);

service.interceptors.response.use(
	response => {
		return response.data;
	},
	error => {
		const isCheckTitle = i18n.te(error.response.data.title);
		const isCheckContent = i18n.te(error.response.data.message);

		if (isCheckTitle && isCheckContent) {
			MakeToast({
				variant: 'danger',
				title: i18n.t(error.response.data.title),
				content: i18n.t(error.response.data.message)
			});
		}

		return Promise.reject(error);
	}
);

export { service };
