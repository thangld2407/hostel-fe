
import Layout from '@/layout';
const RoomDetail = {
	path: '/detail-room',
	name: 'RoomDetail',
  meta: {
		
	},
	component: Layout,
	redirect: {
		name: 'RoomDetail'
	},
	children: [
		{
            path: 'index',
            name: 'RoomDetail',
            component: () => import(
                '../../pages/Detail/detailRoom.vue'
            )
		}
	]
};

export default RoomDetail;

