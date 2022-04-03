
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
		name: 'ReportList'
	},
	children: [
		{
            path: 'list',
            name: 'ReportList',
            meta: {
                title: "ROUTER.REPORT"
            },
            component: () => import(
                '../../pages/ReportProblem/report.vue'
            )
		}
	]
};

export default Notification;
