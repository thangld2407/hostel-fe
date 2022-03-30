
import Layout from '@/layout';
const Notification = {
	path: '/report',
	name: 'Report',
	meta: {
		title: 'ROUTER.REPORT',
		icon:"fas fa-bug"
	},
	component: Layout,
	redirect: {
		name: 'Report'
	},
	children: [
		{
            path: 'index',
            name: 'Report',
            meta: {
                title: "ROUTER.REPORT"
            },
            component: () => import(
                '../../pages/Report/report.vue'
            )
		}
	]
};

export default Notification;
