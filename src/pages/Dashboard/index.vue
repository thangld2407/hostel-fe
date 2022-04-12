<template>
	<div class="dashboard">
		<div class="dashboard-header">
			<div class="header-box">
				<h2><i class="fas fa-home"></i> {{$t('DASHBOARD.BOX.TOTAL_ROOM')}} </h2>
				<h3> {{list.length}} </h3>
			</div>
			<div class="header-box">
				<h2><i class="fas fa-bed"></i> {{$t('DASHBOARD.BOX.RENTED_ROOM')}} </h2>
				<h3> {{list.filter(room => room.status).length}} </h3>
			</div>
			<div class="header-box">
				<h2> <i class="fas fa-bed-alt"></i>{{$t('DASHBOARD.BOX.EMPTY_ROOM')}} </h2>
				<h3> {{list.filter(room => !room.status).length}} </h3>
			</div>
			<div class="header-box">
				<h2> <i class="fas fa-history"></i>{{$t('DASHBOARD.BOX.TOTAL_DEPT_ROOM')}} </h2>
				<h3> 50 </h3>
			</div>
		</div>
		<div class="dashboard-content">
			<div class="row">
				<div class="col-md-6 col-sm-12 col-lg-6">
					<table class="table border">
						<thead class="text-center">
							<th colspan="2">{{$t('DASHBOARD.TABLE.EMPTY_ROOM')}}</th>
						</thead>
						<thead>
							<th>{{$t('DASHBOARD.TABLE.ID')}}</th>
							<th>{{$t('DASHBOARD.TABLE.PRICE')}}</th>
						</thead>
						<tbody>
							<tr v-for="room in list.filter(room => !room.status)" :key="room.id">
								<td>{{room.room_name}}</td>
								<td>{{room.price}}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="col-md-6 col-sm-12 col-lg-6">
					<table class="table border">
						<thead class="text-center">
							<th colspan="2">{{$t('DASHBOARD.TABLE.DEPT_ROOM')}}</th>
						</thead>
						<thead>
							<th>{{$t('DASHBOARD.TABLE.ID')}}</th>
							<th>{{$t('DASHBOARD.TABLE.PRICE')}}</th>
						</thead>
						<tbody>
							<tr>
								<td>ROOM 2001</td>
								<td>100,000,000$</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getRoomTable } from '@/api/modules/room';
	export default {
		name: 'Dashboard',
		data(){
			return{
				list:[
					{status:true}
				],
			}
		},
		created(){
			this.handleGetListRoom()
		},
		methods:{
			async handleGetListRoom() {
				await getRoomTable()
					.then(res => {
						this.list = res.data
						console.log(this.list);
					}
					)
					.catch(err => {
						console.log(err);
					});
			},
		}
	};
</script>
