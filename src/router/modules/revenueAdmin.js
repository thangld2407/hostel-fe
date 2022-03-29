import Layout from '@/layout';
const Revenue = {
	path: '/admin-revenue',
	name: 'RevenueAdmin',
	meta: {
		title: 'ROUTER.REVENUE',
		icon:"fas fa-dollar-sign"
	},
	component: Layout,
	redirect: {
		name: 'RevenueAdmin'
	},
	children: [
		{
            path: 'index',
            name: 'RevenueAdmin',
            meta: {
                title: "ROUTER.REVENUE"
            },
            component: () => import(
                '../../pages/Revenue/revenueAdmin/index.vue'
            )
		}
	]
};

export default Revenue;