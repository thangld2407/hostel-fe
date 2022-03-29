import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from './modules/login';
import errorRoute from './modules/error';
import Dashboard from './modules/dashboard';
import AccountManagement from './modules/account';
import Room from './modules/room';
import RoomRegister from './modules/RoomRegister';
import Notification from "./modules/Notification";
import RoomDetail from "./modules/DetailRoom"
import Customer from "./modules/customer"
import RevenueAdmin from "./modules/revenueAdmin"
import Area from "./modules/area"
import RevenueBuilder from "./modules/revenueBuilder"
import DashboardRenter from "./modules/dashboardRenter"
import Bill from "./modules/bill"
import Report from "./modules/report"

export const constantRoutes = [
	Login,
	{
		path: '/',
		redirect: { name: 'Dashboard' },
		hidden: true
	},
	Dashboard,
	Room,
	RoomRegister,
	Notification,
	errorRoute,
	RoomDetail,
	Customer,
	RevenueAdmin,
	AccountManagement,
	Area,
	RevenueBuilder,
	DashboardRenter,
	Bill,
	Report,
	{
		path: '*',
		hidden: true,
		redirect: { name: 'PageNotFound' }
	}
];

export const asyncRoutes = [];

const createRouter = () =>
	new VueRouter({
		scrollBehavior: () => ({ y: 0 }),
		routes: constantRoutes
	});

const router = createRouter();

export function resetRouter() {
	const newRouter = createRouter();
	router.matcher = newRouter.matcher;
}

export default router;
