<template>
	<div class="account">
		<div class="title">Quản lý tài khoản</div>
		<div class="account-content">
			<div class="panel-heading">
				<p><i class="fas fa-user"></i>Nhân viên</p>
				<button @click="handleModal()" v-b-modal.modal-xl>Create User</button>
			</div>
			<table class="table table-bordered">
				<thead>
					<tr>
						<th scope="col" class="col-1">STT</th>
						<th scope="col" class="col-2">Tên nhân viên</th>
						<th scope="col" class="col-2">Email</th>
						<th scope="col" class="col-1">Chức năng</th>
						<th scope="col" class="col-1">Khu vực</th>
						<th scope="col" class="col-2">Địa điểm làm việc</th>
						<th scope="col" class="col-1"></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in listUser" :key="index">
						<th scope="row">{{ index + 1 }}</th>
						<td>{{ item.user_id.username }}</td>
						<td>{{ item.user_id.email }}</td>
						<td>{{ item.role_id.role_name }}</td>
						<td>{{ hostel_name }}</td>
						<td>{{ item.hostel_id }}</td>
						<td>
							<div class="btn btn-warning" @click="handleModal(item._id)">
								<i class="fas fa-edit"></i>
							</div>
							<div
								type="button"
								class="btn btn-danger"
								@click="handleDeleteUser(item._id)"
							>
								<i class="fa fa-trash"></i>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<b-modal
				id="modal-xl"
				size="xl"
				v-model="showModal"
				:title="action === 'CREATE' ? 'Create Account' : 'EDIT Account'"
				centered
			>
				<div class="modal-body">
					<div class="container-fluid">
						<div class="row">
							<div class="col col-sm-6">
								<div class="col-6 col-sm-12">
									<div>
										<label for="">Tên người dùng</label>
										<b-form-input
											type="text"
											v-model="new_account.username"
										></b-form-input>
									</div>
									<div>
										<label for="">Tên người dùng</label>
										<b-form-input
											type="text"
											v-model="new_account.fullname"
										></b-form-input>
									</div>
									<div>
										<label for="">Email</label>
										<b-form-input
											:readonly="action === 'EDIT' ? true : false"
											v-model="new_account.email"
										></b-form-input>
									</div>
									<div>
										<label for="">Password</label>
										<b-form-input
											type="password"
											v-model="new_account.password"
										></b-form-input>
									</div>
									<div>
										<label for="">Role</label>
										<b-form-select v-model="new_account.role_id">
											<b-form-select-option :value="null"
												>Chọn role</b-form-select-option
											>
											<b-form-select-option
												v-for="(role, index) in options"
												:key="index"
												:value="role._id"
											>
												{{ role.role_name }}
											</b-form-select-option>
										</b-form-select>
									</div>
									<div>
										<label for="">Khu vực</label>
										<b-form-select v-model="selected" @change="handleFilterByArea()">
											<b-form-select-option :value="null"
												>Chọn khu vực</b-form-select-option
											>
											<b-form-select-option
												v-for="(area, index) in options_area"
												:key="index"
												:value="area._id"
											>
												{{ area.area_name }}
											</b-form-select-option>
										</b-form-select>
									</div>
									<div>
										<label for="">Địa điểm làm việc</label>
										<b-form-select
											:selected="new_account.hostel_id"
											v-model="new_account.hostel_id"
										>
											<b-form-select-option :value="null"
												>Chọn địa điểm</b-form-select-option
											>
											<b-form-select-option
												v-for="(hostel, index) in options_hostel"
												:key="index"
												:value="hostel._id"
											>
												{{ hostel.hostel_name }}
											</b-form-select-option>
										</b-form-select>
									</div>
								</div>
							</div>
							<div class="col col-sm-6">
								<div class="col-6 col-sm-12">
									<div>
										<label for="">CMND</label>
										<b-form-input
											type="text"
											v-model="new_account.id_card_number"
										></b-form-input>
									</div>
									<div>
										<label for="">Ngày Sinh</label>
										<b-form-input
											v-model="new_account.date_of_birth"
										></b-form-input>
									</div>
									<div>
										<label for="">SĐT</label>
										<b-form-input
											v-model="new_account.telephone"
										></b-form-input>
									</div>
									<div>
										<label for="">Gender</label>
										<b-form-select v-model="new_account.gender">
											<b-form-select-option :value="null"
												>Chọn giới tính</b-form-select-option
											>
										</b-form-select>
									</div>
									<div>
										<label for="">Ngày thuê</label>
										<b-form-input
											v-model="new_account.rental_date"
											type="date"
										></b-form-input>
									</div>
									<div>
										<label for="">Quê quán</label>
										<b-form-input v-model="new_account.hometown"></b-form-input>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<template #modal-footer>
					<div>
						<b-button
							class="btn btn-primary"
							v-if="action === 'CREATE'"
							@click="handleCreateUser()"
						>
							Tạo
						</b-button>

						<b-button
							class="btn btn-primary"
							v-if="action === 'EDIT'"
							@click="handleEditUser()"
						>
							Lưu
						</b-button>

						<b-button class="btn btn-danger" @click="showModal = false">
							Đóng
						</b-button>
					</div>
				</template>
			</b-modal>
		</div>
	</div>
</template>

<script>
	import { isEmptyOrWhiteSpace } from '../../utils/validate';
	import { getUserTable, postUser, deleteUser, getOneUser, editUser } from '@/api/modules/user';
	import { MakeToast } from '@/toast/toastMessage';
	import { getListRole } from '@/api/modules/role';
	import { getHostelTable, getOneHostel } from '@/api/modules/hostel';
	import { getAreaTable } from '@/api/modules/area';
	export default {
		name: 'ManageAccount',
		data() {
			return {
				listUser: [],
				selected: null,
				hostel_name: '',
				new_account: {
					username: '',
					fullname:'',
					email: '',
					password: '',
					role_id: null,
					area: null,
					hostel_id: null,
					id_card_number: '',
					date_of_birth: '',
					telephone: '',
					hometown: '',
					gender: '',
					rental_date: ''
				},
				isLoading: false,
				roles: [],
				options: [],
				options_area: [],
				options_hostel: [],
				action: '',
				showModal: false,
				ids: 0,
			};
		},
		created() {
			this.handleGetListUser();
			this.getRole();
			this.getHostel(), 
			this.getArea();
		},
		methods: {
			async handleModal(id) {
				console.log(id, 'EDIT');
				this.ids = id;
				if (this.ids) {
					(this.action = 'EDIT')

				} else {
					this.isResetDataModal();
					this.action = 'CREATE';
					console.log('CREATE');
				}
				this.showModal = true;
			},
			async getRole() {
				await getListRole()
					.then(res => {
						this.options = res.data;
					})
					.catch(err => {
						console.log(err);
					});
			},
			async getHostel() {
				await getHostelTable()
					.then(res => {
						this.options_hostel = res.data;
					})
					.catch(err => {
						console.log(err);
					});
				await getOneHostel(id)
					.then(res => {
						this.new_account.hostel_id;
					})
					.catch(err => {
						console.log(err);
					});
			},
			async getArea() {
				await getAreaTable()
					.then(res => {
						this.options_area = res.data;
					})
					.catch(err => {
						console.log(err);
					});
			},
			async handleGetListUser() {
				this.isLoading = true;
				await getUserTable()
					.then(res => {
						console.log(res.statusCode);
						this.listUser = res.data.user;
						
						this.listUser.map(item => {
							this._id = item.user_id._id;
							console.log(this._id ,'abc');
						})
						
						this.listUser.map(item => {
							getOneHostel({ id: item.user_id.hostel_id })
								.then(result => {
									this.hostel_name = result.data.hostel_name;
									this.area_id = result.data.area_id
									console.log(this.hostel_name ,'123a');
								})
								.catch(err => {
									console.log(err);
								});
						});
						this.isLoading = false;
					})
					.catch(err => {
						console.log(err);
					});
			},
			
			async handleCreateUser() {
				const data = {
					username: this.new_account.username,
					fullname: this.new_account.fullname,
					email: this.new_account.email,
					password: this.new_account.password,
					role_id: this.new_account.role_id,
					hostel_id: this.new_account.hostel_id,
					id_card_number: this.new_account.id_card_number,
					date_of_birth: this.new_account.date_of_birth,
					telephone: this.new_account.telephone,
					hometown: this.new_account.hometown,
					gender: this.new_account.gender,
					rental_date: this.new_account.rental_date
				};
				console.log(data);
				if (
					isEmptyOrWhiteSpace(data.username) ||
					isEmptyOrWhiteSpace(data.email) ||
					isEmptyOrWhiteSpace(data.password) ||
					this.new_account.role_id === null
				) {
					MakeToast({
						variant: 'warning',
						title: 'Warning',
						content: '123'
					});
				} else {
					await postUser(data)
						.then(res => {
							this.listUser = res.data;
							MakeToast({
								variant: 'success',
								title: this.$t('TOAST.SUCCESS'),
								content: this.$t('MANAGER.FORM.SUCCESS')
							});
							this.handleGetListUser();
							this.showModal = false;
							this.isResetDataModal();
						})
						.catch(err => {
							console.log(err);
						});
				}
			},
			async handleEditUser() {
				this.action = 'EDIT';
				const data = {
					user_id: this.op,
					username:this.new_account.username,
					fullname: this.new_account.fullname,
					email: this.new_account.email,
					password: this.new_account.password,
					role_id: this.new_account.role_id,
					hostel_id: this.new_account.hostel_id,
					id_card_number: this.new_account.id_card_number,
					date_of_birth: this.new_account.date_of_birth,
					telephone: this.new_account.telephone,
					hometown: this.new_account.hometown,
					gender: this.new_account.gender,
					rental_date: this.new_account.rental_date
				};
				if (
					isEmptyOrWhiteSpace(data.fullname) ||
					isEmptyOrWhiteSpace(data.email) ||
					isEmptyOrWhiteSpace(data.password)
					// this.new_account.role === null
				) {
					MakeToast({
						variant: 'warning',
						title: 'Warning',
						content: this.$t('MANAGER.FORM.MESSAGE.SPACE')
					});
				} else {
					console.log(data);
					await editUser(data)
						.then(res => {
								MakeToast({
									variant: 'success',
									title: this.$t('TOAST.SUCCESS'),
									content: '123'
								});
								this.handleGetListUser();
								this.showModal = false;
								this.isResetDataModal();
							
						})
						.catch(err => {
							console.log(err);
						});
				}
			},
			handleDeleteUser() {
				this.$bvModal
					.msgBoxConfirm('Do you want to delete this user?', {
						title: 'Warning',
						size: 'sm',
						buttonSize: 'sm',
						okVariant: 'danger',
						okTitle: 'OK',
						cancelTitle: 'Cancel',
						footerClass: 'p-2',
						hideHeaderClose: false,
						centered: true
					})
					.then(value => {
						if (value === true) {
							deleteUser({ user_id: this._id })
							console.log(user_id,'poi')
								.then(res => {
										MakeToast({
											variant: 'success',
											title: this.$t('TOAST.SUCCESS'),
											content: 'Successfully to delete this user'
										});
										this.handleGetListUser();
									
									console.log(res);
								})
								.catch(err => {
									console.log(err);
									MakeToast({
											variant: 'warning',
											title: this.$t('TOAST.WARNING'),
											content: 'You can not delete this user'
										});
								});
						}
					});
			},
			isResetDataModal() {
				console.log('RESET DATA');
				this.new_account = {
					username: '',
					fullname:'',
					email: '',
					password: '',
					role_id: null,
					area: null,
					hostel_id: null,
					id_card_number: '',
					date_of_birth: '',
					telephone: '',
					hometown: '',
					gender: '',
					rental_date: ''
				};
			},
			handleFilterByArea() {
				this.listUser = this.listUser.filter(item => {
					if (item.user.user_id.hostel_id === this.selected) {
						return item;
					} else if (this.selected === null) {
						this.getHostel();
					} else {
						console.log('No data');
					}
				});
			}
		}
	};
</script>

<style scoped>
	.account .title {
		z-index: 1;
		position: fixed;
		width: 100%;
		top: 50px;
		background: #557b83;
		height: 40px;
		line-height: 40px ;
		color: white;
		padding-left: 20px;
	}
	.account .account-content {
		position: relative;
		top: 80px;
		margin: 30px;
	}
	.account-content table {
		text-align: center;
	}
	.account-content table div {
		margin: 10px;
	}
	.account-content table div:nth-child(1) {
		margin-right: 5px;
		width: 40px;
	}
	.account-content .panel-heading {
		height: 40px;
		display: flex;
		background: #337ab7;
		color: white;
		align-items: center;
		justify-content: flex-start;
	}
	.account-content .panel-heading p,
	.account-content .panel-heading i {
		margin: 0px 10px 0px 10px;
	}
</style>
