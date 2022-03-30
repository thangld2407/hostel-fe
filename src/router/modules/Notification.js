
import Layout from '@/layout';
const Notification = {
	path: '/notification',
	name: 'Notification',
	meta: {
		title: 'ROUTER.NOTIFICATION',
		icon:"fas fa-bell"
	},
	component: Layout,
	redirect: {
		name: 'Notification'
	},
	children: [
		{
            path: 'index',
            name: 'Notification',
            meta: {
                title: "ROUTER.NOTIFICATION"
            },
            component: () => import(
                '../../pages/Notification/Notification.vue'
            )
		}
	]
};

export default Notification;
