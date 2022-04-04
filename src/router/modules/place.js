import Layout from '@/layout';
const Area = {
	path: '/manage-place',
	name: 'PlaceManagement',
	meta: {
		title: 'ROUTER.PLACE',
		icon:"fas fa-map-marker"
	},
	component: Layout,
	redirect: {
		name: 'PlaceManagementList'
	},
	children: [
		{
            path: 'list',
            name: 'PlaceManagementList',
            meta: {
                title: "ROUTER.AREA"
            },
            component: () => import(
                '../../pages/Place/index.vue'
            )
		}
	]
};

export default Area;