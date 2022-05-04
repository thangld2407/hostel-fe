<template>
	<div id="roomRegister">
		<div class="right-content">
			<div class="title">Room registration</div>
			<div>
				<div class="card-body">
					<h5>Khách Thuê</h5>
					<b-form-select v-model="room.user_id">
						<b-form-select-option :value="null">Chọn role</b-form-select-option>
						<b-form-select-option
							v-for="(user, index) in options.filter(
								user => user.role_id.role_name === 'customer'
							)"
							:key="index"
							:value="user.user_id._id"
							>{{ user.user_id.username }}</b-form-select-option
						>
					</b-form-select>
				</div>
			</div>
			<form>
				<div class="form-group row">
					<legend>Thông tin đăng ký nhà trọ</legend>
					<label class="col-sm-2 form-control-label">Ngày Thuê</label>
					<div class="col-sm-10">
						<input type="date" class="form-control" v-model="room.date" />
					</div>
				</div>

				<div class="form-group row">
					<label class="col-sm-2 form-control-label">Chọn Phòng Đăng Ký</label>
					<div class="col-sm-10">
						<select v-model="room.room_id">
							<option value="null">Chọn phòng</option>
							<option
								v-for="room in list.filter(room => !room.status)"
								:key="room.id"
								:value="room._id"
								>{{ room.room_name }}</option
							>
						</select>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-sm-offset-2 col-sm-10">
						<button name="btnSubmit" class="btn btn-primary" @click="handleRegister()"
							>Đồng Ý</button
						>
						<!-- <router-link to="/manage-room"><button name="btnSubmit" type="submit" class="btn btn-primary" >Đồng Ý</button></router-link> -->
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import { getRoomTable, getOneRoom } from '@/api/modules/room';
	import { getUserTable, getOneUser } from '@/api/modules/user';
	import { RegisterRoom } from '@/api/modules/roomRegister';
	import { MakeToast } from '@/toast/toastMessage';
	import { isEmptyOrWhiteSpace } from '../../utils/validate';
	export default {
		name: 'roomRegister',
		data() {
			return {
				list: [],
				options: [],
				selected: null,
				room: {
					user_id: '',
					room_id: '',
					date: ''
					// phone:'',
					// dob:'',
					// cmnd:'',
					// address:''
				}
			};
		},
		created() {
			this.handleGetListRoom();
			this.getUser();
		},
		methods: {
			clickAdd() {
				console.log(this.room);
			},
			async handleGetListRoom() {
				await getRoomTable()
					.then(res => {
						this.list = res.data;
						console.log(this.list);
					})
					.catch(err => {
						console.log(err);
					});
			},
			async getUser() {
				await getUserTable()
					.then(res => {
						this.options = res.data;
					})
					.catch(err => {
						console.log(err);
					});
			},
			async handleRegister() {
				const data = {
					user_id: this.room.user_id,
					room_id: this.room.room_id,
					date: this.room.date
				};
				console.log(data);
				if (isEmptyOrWhiteSpace(data.user_id) || isEmptyOrWhiteSpace(data.room_id)) {
					MakeToast({
						variant: 'warning',
						title: 'Warning',
						content: this.$t('ROOM.FORM.MESSAGE.SPACE')
					});
				} else {
					await RegisterRoom(data)
						.then(res => {
							MakeToast({
								variant: 'success',
								title: this.$t('TOAST.SUCCESS'),
								content: this.$t('REGISTER.SUCCESS')
							});
							this.$router.push(`/manage-room/list`);
						})
						.catch(err => {
							console.log(err);
						});
				}
			}
		}
	};
</script>

<style scoped>
	.right-content {
		margin-top: 100px;
	}
	.right-content .title {
		position: fixed;
		width: 100%;
		top: 50px;
		background: #557b83;
		height: 40px;
		line-height: 40px !important;
		color: white;
		font-weight: 500;
		padding-left: 20px;
		z-index: 1;
	}
	.right-content form {
		margin: 50px 150px 0px 50px;
	}
	.right-content .zone-add-quiz {
		background-color: orange;
		border-radius: 50%;
		width: 25px;
		height: 25px;
	}
	.right-content .zone-add-quiz div {
		color: white;
		text-align: center;
		font-weight: 700;
	}
</style>
