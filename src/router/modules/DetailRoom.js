
import Layout from '@/layout';
const RoomDetail = {
	path: '/detail-room',
	name: 'RoomDetail',
  meta: {
		
	},
	component: Layout,
	redirect: {
		name: 'RoomDetailIndex'
	},
	children: [
		{
            path: 'list/:room',
            name: 'RoomDetailIndex',
            component: () => import(
                '../../pages/Detail/detailRoom.vue'
            )
		}
	]
};

export default RoomDetail;

