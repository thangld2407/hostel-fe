<template>
  <div class="account">
      <div class="title">Quản lý tài khoản</div>
      <div class="container">
        <div class="panel-heading">
          <p><i class="fas fa-user"></i>Nhân viên</p>
          <CreateAccount :itemEdit="accountEdit" @save="clickAdd"/>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col" class="col-1">STT</th>
              <th scope="col" class="col-2">Tên nhân viên</th>
              <th scope="col" class="col-2">Email</th>
              <th scope="col" class="col-2">SĐT</th>
              <th scope="col" class="col-2">Chức năng</th>
              <th scope="col" class="col-1"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in list_account" :key="item.id">
              <th scope="row">{{item.id}}</th>
              <td>{{item.name}}</td>
              <td>{{item.email}}</td>
              <td>{{item.phone}}</td>
              <td>{{item.role}}</td>
              <td>
                <div
                  type="button"
                  class="btn btn-warning"
                  @click="clickEdit(item)">
                  <i class="fas fa-edit"></i> 
                </div>
                <div
                  type="button"
                  class="btn btn-danger"
                  @click="clickDelete(item)">
                  <i class="fa fa-trash"></i> 
                </div>
						  </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
import CreateAccount from "./createAccount.vue"
import { MakeToast } from '@/toast/toastMessage';
export default {
    name: "ManageAccount",
    components:{CreateAccount},
    methods: {
    clickAdd(itemSave) {
      
      // this.list.push(itemSave)
      let index = this.list_account.findIndex((e) => e.id === itemSave.id);
      if (index >= 0) {
        this.list_account.splice(index, 1, itemSave);
      } else {
        var max = 0;
        var newId = 0;
        for (let i = 0; i < this.list_account.length; i++) {
          if (this.list_account[i].id > max) {
            max = this.list_account[i].id;
          }
        }
        newId = max + 1;
        itemSave.id = newId;
        this.list_account.push(itemSave);
        MakeToast({
							variant: 'success',
							title: this.$t('TOAST.SUCCESS'),
							content: this.$t('MANAGER.SUCCESS')
						})
      }
      return;
    },
    clickDelete(itemDelete) {
      const choice = confirm("Are you sure ???");
      if (choice == true) {
        for (let i = 0; i < this.list_account.length; i++) {
          if (itemDelete.id === this.list_account[i].id) {
            this.list_account.splice(i, 1);
          }
        }
      }
    },
    clickEdit(itemEdit) {
      this.accountEdit = itemEdit;
      this.$bvModal.show("modal-prevent-closing");
    },
  },
  computed:{
    list_account(){
      return this.$store.state.app.list_account
      
    }
    
  },
  data() {
    return {
      accountEdit: {},
      }
    
  },
}
</script>

<style scoped>
.account .title {
  position: fixed;
  width: 100%;
  top: 50px;
  background: #557B83;
  height: 40px;
  line-height: 40px !important;
  color: white;
  font-weight: 500;
  padding-left:20px ;

}
.account .container{
  margin-top: 120px;
}
.container table{
  text-align: center;
}
.container table div:nth-child(1){
  margin-right: 5px;
  width: 40px;
}
.container .panel-heading{
  height: 40px;
  display: flex;
  background: #337ab7;
  color: white;
  align-items: center;
  justify-content: flex-start;
}
.container .panel-heading p , .container .panel-heading i {
  margin: 0px 10px 0px 10px;
}
</style>