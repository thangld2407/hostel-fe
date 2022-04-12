<template>
  <div id="manageRoom">
    <div class="right-content">
      <div class="title">
        <span>{{$t('ROOM.TITLE')}}</span>
        <b-button variant="light" @click="handleModal()" v-b-modal.modal-1>Create Room</b-button>
      </div>
      <div class="rooms-content">
        <div class="zone-header-page">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              :placeholder="$t('ROOM.SEARCH.PLACEHOLDER')"
              id="product-search"
            />
          </div>
          <div class="form-group">
            <div class="col">
              <select class="form-control" id="search-option-1">
                <option value="0">{{$t('ROOM.SELECT_ROOM.TOTAL')}}</option>
                <option value="1">{{$t('ROOM.SELECT_ROOM.RENTED')}}</option>
                <option value="2">{{$t('ROOM.SELECT_ROOM.EMPTY')}}</option>
              </select>
            </div>
          </div>
          <button><i class="fa fa-search"></i>{{$t('ROOM.SEARCH.TITLE')}}</button>
        </div>
        <div class="container">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col" class="col-1">{{$t('ROOM.TABLE.NAME')}}</th>
                <th scope="col" class="col-2">{{$t('ROOM.TABLE.PRICE')}}</th>
                <th scope="col" class="col-1">{{$t('ROOM.TABLE.STATUS')}}</th>
                <th scope="col" class="col-4">{{$t('ROOM.TABLE.DESCRIPTION')}}</th>
                <th scope="col" class="col-1"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in list" :key="index">
                <td>{{ item.room_name }}</td>
                <td>{{ item.price }}</td>
                <td>
                  <div class="btn btn-success" v-if="item.status">Active</div>
                  <div class="btn btn-danger" v-else>Trống</div>
                </td>
                <td>{{ item.description }}</td>
                <td class="actions">
                  <div class="btn btn-info" @click="handleDetailRoom(item._id)">
                    <i class="fas fa-info-circle"></i>
                  </div>
                  <div class="btn btn-warning" @click="handleModal(item._id)">
                    <i class="fa fa-edit"></i>
                  </div>
                  <div @click="handleDeleteRoom(item._id)" class="btn btn-danger">
                    <i class="fa fa-trash"></i>
                  </div>
                </td>
              </tr>
          
            </tbody>
          </table>
          <b-modal
            id="modal-1"
            v-model="showModal"
            :title="action === 'CREATE' ? $t('ROOM.FORM.TITLE') : $t('ROOM.FORM.EDIT')"
            centered
          >
            <div class="row mt-2">
              <div class="col-md-12 col-sm-12 col-lg-12">
                <label for="">{{$t('ROOM.FORM.NAME')}}</label>
                <b-form-input v-model="new_room.name"></b-form-input>
              </div>
              <div class="col-md-12 col-sm-12 col-lg-12">
                <label for="">{{$t('ROOM.FORM.ROOM_PRICE')}}</label>
                <b-form-input v-model="new_room.price"></b-form-input>
              </div>
              <div class="col-md-12 col-sm-12 col-lg-12 mt-2">
                <label for="">{{$t('ROOM.FORM.ELECTRICITY_PRICE')}}</label>
                <b-form-input disabled></b-form-input>
              </div>
              <div class="col-md-12 col-sm-12 col-lg-12 mt-2">
                <label for="">{{$t('ROOM.FORM.WATER_PRICE')}}</label>
                <b-form-input disabled></b-form-input>
              </div>
              <div class="col-md-12 col-sm-12 col-lg-12">
                <label for="">{{$t('ROOM.FORM.DESCRIPTION')}}</label>
                <b-form-textarea
                  id="textarea-rows"
                  rows="4"
                  v-model="new_room.description"
                ></b-form-textarea>
              </div>
              <div class="col-md-12 col-sm-12 col-lg-12">
                <label for="">{{$t('ROOM.FORM.STATUS')}}</label>
                <input
                  v-model="new_room.status"
                  type="radio"
                  style="margin: 0px 5px 0px 15px"
                  :value="false"
                />{{$t('ROOM.FORM.EMPTY')}}
              </div>
            </div>
            <template #modal-footer>
              <div>
                <b-button
                  class="btn btn-primary"
                  v-if="action === 'CREATE'"
                  @click="handleCreateRoom()"
                >
                  {{$t('ROOM.FORM.CREATE')}}
                </b-button>

                <b-button
                  class="btn btn-primary"
                  v-if="action === 'EDIT'"
                  @click="handleEditRoom()"
                >
                  {{$t('ROOM.FORM.SAVE')}}
                </b-button>

                <b-button class="btn btn-danger" @click="showModal = false">
                  {{$t('ROOM.FORM.CLOSE')}}
                </b-button>
              </div>
            </template>
			</b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { MakeToast } from '@/toast/toastMessage';
import { isEmptyOrWhiteSpace } from '../../utils/validate';
import { getRoomTable, postRoom, deleteRoom, getOneRoom, editRoom } from '@/api/modules/room';
export default {
  name: "ManageRoom",
  data() {
    return {
     
      new_room:{
        name: "",
        price: "",
        status: false,
        description: "",
        
      },
      isLoading: false,
      showModal: false,
      list:[],
      action: '',
      ids: 0,
      
      }
    
  },
  created() {
			this.handleGetListRoom();
	},
  methods: {
    async handleDetailRoom(item) {
				this.$router.push(`/detail-room/list/${item}`);
			},
			async handleModal(id) {
				this.ids = id;
				if (this.ids) {
					this.action = 'EDIT';
					await getOneRoom(id)
						.then(res => {
							this.new_room.price = res.data.price;
							this.new_room.description = res.data.description;
							this.new_room.status = res.data.status;
						})
						.catch(err => {
							console.log(err);
						});
				} else {
					this.isResetDataModal();
					this.action = 'CREATE';
					console.log('CREATE');
				}
				this.showModal = true;
			},
			async handleGetListRoom() {
				this.isLoading = true;
				await getRoomTable()
					.then(res => {
							this.list = res.data
              console.log(this.list);
							this.isLoading = false;
						}
					)
					.catch(err => {
						console.log(err);
					});
			},
			async handleCreateRoom() {
				const data = {
					price: this.new_room.price,
					description: this.new_room.description,
					status: this.new_room.status,
				};
				console.log(data);
				if (
					isEmptyOrWhiteSpace(data.price) ||
					isEmptyOrWhiteSpace(data.description) 
				) {
					MakeToast({
						variant: 'warning',
						title: 'Warning',
						content: '123'
					});
				} else {
					await postRoom(data)
						.then(res => {
              // this.new_room.id = res.data.id
              console.log(res);
								MakeToast({
									variant: 'success',
									title: this.$t('TOAST.SUCCESS'),
									content: this.$t('MANAGER.FORM.SUCCESS')
								});
								this.handleGetListRoom();
								this.showModal = false;
								this.isResetDataModal();
							}
						)
						.catch(err => {
							console.log(err);
						});
				}
			},
			async handleEditRoom() {
				this.action = 'EDIT';
				const data = {
          room_id:this.ids,
					price: this.new_room.price,
					description: this.new_room.description,
					status: this.new_room.status,
				};
				if (
					isEmptyOrWhiteSpace(data.price) ||
					isEmptyOrWhiteSpace(data.description) 
				) {
					MakeToast({
						variant: 'warning',
						title: 'Warning',
						content: this.$t('MANAGER.FORM.MESSAGE.SPACE')
					});
				} else {
					console.log(data);
					await editRoom( data)
						.then(res => {
								MakeToast({
									variant: 'success',
									title: this.$t('TOAST.SUCCESS'),
									content: '123'
								});
								this.handleGetListRoom();
								this.showModal = false;
								this.isResetDataModal();
							}
						)
						.catch(err => {
							console.log(err);
						});
				}
			},
			handleDeleteRoom(id) {
				this.$bvModal
					.msgBoxConfirm('Do you want to delete this room?', {
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
							deleteRoom({room_id:id})
								.then(res => {
										MakeToast({
											variant: 'success',
											title: this.$t('TOAST.SUCCESS'),
											content: 'Successfully to delete this room'
										});
										this.handleGetListRoom();
									console.log(res);
								})
								.catch(err => {
									console.log(err);
                  	{
										MakeToast({
											variant: 'warning',
											title: this.$t('TOAST.WARNING'),
											content: 'You can not delete this room'
										});
									}
								});
						}
					});
      },
      isResetDataModal() {
				console.log('RESET DATA');
				this.new_room = {
					price: '',
					description: '',
					status: '',
				};
			},
  },
};
</script>

<style scoped>
.right-content {
  position: relative;
  top: 100px;
}
.right-content .title {
  z-index: 1;
  position: fixed;
  width: 100%;
  top: 50px;
  background: #557B83;
  height: 40px;
  line-height: 40px ;
  color: white;
  padding-left: 20px;
}
.right-content .title button{
  padding: 1px;
  float: right;
  margin: 5px 320px 0px 0px;
}
.rooms-content .zone-header-page {
  display: flex;
  margin: 25px;
  height: 40px;
  z-index: 0;
}
.rooms-content button {
  background: #1572a1;
  color: white !important;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 38px;
}
.rooms-content table{
  text-align: center;
}
.rooms-content table .actions {
  display: flex;
  padding: 0;
  margin-top: 12px;
  border: none;
  justify-content: center;
}
.rooms-content table .actions a{
  text-decoration: none;
  color: white;
}
.rooms-content .actions > div {
  height: 35px;
  width: 40px;
  margin-left: 5px;
}
</style>
