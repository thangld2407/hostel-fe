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
				<!-- <div class="form-group row">
                    <legend >Thông tin người cho thuê</legend>
                       <label class="col-sm-2 form-control-label">Họ Tên</label>
                       <div class="col-sm-10">
                           <input type="text" class="form-control" required placeholder="Nhập Họ Tên Người Thuê" v-model="room.user_id">
                       </div>
                   </div>
                   <div class="form-group row">
                       <label class="col-sm-2 form-control-label">CMND</label>
                       <div class="col-sm-10">
                           <input type="text" class="form-control" placeholder="Nhập CMND" required v-model="room.cmnd">
                       </div>
                   </div>
                   <div class="form-group row">
                       <label class="col-sm-2 form-control-label">Ngày Sinh</label>
                       <div class="col-sm-10">
                           <input type="date" class="form-control" placeholder="Nhập Ngày Sinh"  required v-model="room.dob">
                       </div>
                   </div>
                   <div class="form-group row">
                       <label class="col-sm-2 form-control-label">Quê Quán</label>
                       <div class="col-sm-10">
                           <input type="text" class="form-control" placeholder="Nhập Quê Quán" required v-model="room.address">
                       </div>
                   </div>
                   <div class="form-group row">
                       <label class="col-sm-2 form-control-label">Điện Thoại</label>
                       <div class="col-sm-10">
                           <input type="text" class="form-control" placeholder="Nhập số điện thoại" v-model="room.phone">
                       </div>
                   </div>


                    <div class="form-group row">
                        <label class="col-sm-2">Giới Tính</label>
                        <div class="col-sm-10">
                            <div class="radio">
                                <label>
                                    <input type="radio" value="1" checked >
                                     Nam
                                </label>
                            </div>
                            <div class="radio">
                                <label>
                                    <input type="radio" value="0" >
                                     Nữ
                                </label>
                            </div>
                        </div>
                    </div> -->

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
					<label class="col-sm-2">Dịch Vụ</label>
					<div class="col-sm-10">
						<!-- <div class="checkbox">
							<label>
								<input type="checkbox" value="1" /> Internet (220 000 VND)
							</label>
						</div>

						<input
							type="text"
							class="form-control"
							placeholder="Nhập giá tiền các dịch vụ khác(phát sinh , rác ,gửi xe ,....)"
						/> -->
						<div class="zone-table-answer">
							<b-table-simple :bordered="true" :outlined="false" :fixed="false">
								<b-thead>
									<b-tr>
										<b-th class="zone-min-width">
											<span>Name</span>
										</b-th>

										<b-th>
											<span>Price</span>
										</b-th>

										<b-th class="zone-min-width">
											<span>Actions</span>
										</b-th>
									</b-tr>
								</b-thead>

								<b-tbody>
									<b-tr>
										<b-td class="zone-min-width">
											<b-form-input />
										</b-td>

										<b-td>
											<b-form-input />
										</b-td>

										<b-td class="zone-min-width">
											<b-button @click="handleDeleteAnswer(indexAnswer)">
												Delete
											</b-button>
										</b-td>
									</b-tr>
								</b-tbody>
							</b-table-simple>
						</div>
						<div class="zone-add-quiz">
							<div @click="handleAddService()">+</div>
						</div>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-sm-offset-2 col-sm-10">
						<button
							name="btnSubmit"
							type="submit"
							class="btn btn-primary"
							@click="handleRegister()"
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
				other_service: [
					{
						name: '',
						price: ''
					}
				],
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
					room_id: this.room.room_id
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
								content: this.$t('MANAGER.FORM.SUCCESS')
							});
							this.$router.push(`/manage-room/list`);
						})
						.catch(err => {
							console.log(err);
							MakeToast({
								variant: 'success',
								title: this.$t('TOAST.WARNING'),
								content: this.$t('MANAGER.FORM.SUCCESS')
							});
						});
				}
			},
			handleAddService() {
				const SERVICE = {
					name: '',
					price: ''
				};

				this.Quiz.question_answers.push(SERVICE);
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
