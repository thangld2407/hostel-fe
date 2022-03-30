import Layout from '@/layout';

const Dashboard = {
	path: '/dashboard-renter',
	name: 'DashboardRenter',
	meta: {
		title: 'ROUTER.DASHBOARD',
		icon:"fas fa-tachometer-alt",
	},
	component: Layout,
	redirect: {
		name: 'DashboardRenter'
	},
	children: [
		{
			path: 'index',
			name: 'DashboardRenter',
			meta: {
				title: 'ROUTER.DASHBOARD',
			},
			component: () => import('../../pages/Dashboard/DashboardRenter/index.vue')
		}
	]
};

export default Dashboard;
