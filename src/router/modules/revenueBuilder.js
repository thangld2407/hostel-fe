import Layout from '@/layout';
const Revenue = {
	path: '/builder-revenue',
	name: 'RevenueBuilder',
	meta: {
		title: 'ROUTER.REVENUE',
		icon:"fas fa-dollar-sign"
	},
	component: Layout,
	redirect: {
		name: 'RevenueBuilder'
	},
	children: [
		{
            path: 'index',
            name: 'RevenueBuilder',
            meta: {
                title: "ROUTER.REVENUE"
            },
            component: () => import(
                '../../pages/Revenue/revenueBuilder/index.vue'
            )
		}
	]
};

export default Revenue;