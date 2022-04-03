import router from '@/router';
import store from '@/store';
import getPageTitle from '@/utils/getPageTitle';
import { setRoutes } from '@/utils/setRoutes';
import { getTokenAccess } from '../const/cookie';
import { getToken } from '../store/modules/auth';

const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
	document.title = getPageTitle(to.meta.title);

	const isUserLogged = getTokenAccess('access_token');
	console.log(isUserLogged);
	if (isUserLogged) {
		if (to.path === '/login') {
			next({ path: '/' });
		} else {
			const hasRoles = store.getters.roles;

			if (hasRoles) {
				next();
			} else {
				try {
					// const res = await store.dispatch('auth/getUserInfo');
					const ROLES = res['roles'];
					const accessRoutes = await store.dispatch('permission/generateRoutes', {
						roles: ROLES,
						permissions: []
					});
					console.log(accessRoutes, "accessRoutes");
					setRoutes(accessRoutes);
					next({ ...to, replace: true });
				} catch {
					await store.dispatch('auth/resetToken');
					next(`/login`);
				}
			}
		}
	} else {
		if (whiteList.indexOf(to.matched[0] ? to.matched[0].path : '') !== -1) {
			next();
		} else {
			next(`/login`);
		}
	}
});
