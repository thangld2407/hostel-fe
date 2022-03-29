<template>
  <div id="roomRegister">
    <div class="right-content">
      <div class="title">Room registration</div>
                    <form @submit.prevent="" enctype="multipart/form-data">
                   <div class="form-group row">
                    <legend >Thông tin người cho thuê</legend>
                       <label class="col-sm-2 form-control-label">Họ Tên</label>
                       <div class="col-sm-10">
                           <input type="text" class="form-control" required placeholder="Nhập Họ Tên Người Thuê" v-model="room_info.name">
                       </div>
                   </div>
                   <div class="form-group row">
                       <label class="col-sm-2 form-control-label">CMND</label>
                       <div class="col-sm-10">
                           <input type="text" class="form-control" placeholder="Nhập CMND" required v-model="room_info.identity_card">
                       </div>
                   </div>
                   <div class="form-group row">
                       <label class="col-sm-2 form-control-label">Ngày Sinh</label>
                       <div class="col-sm-10">
                           <input type="date" class="form-control" placeholder="Nhập Ngày Sinh"  required v-model="room_info.dob">
                       </div>
                   </div>
                   <div class="form-group row">
                       <label class="col-sm-2 form-control-label">Quê Quán</label>
                       <div class="col-sm-10">
                           <input type="text" class="form-control" placeholder="Nhập Quê Quán" required v-model="room_info.address">
                       </div>
                   </div>
                   <div class="form-group row">
                       <label class="col-sm-2 form-control-label">Điện Thoại</label>
                       <div class="col-sm-10">
                           <input type="text" class="form-control" placeholder="Nhập số điện thoại"  v-model="room_info.phone">
                       </div>
                   </div>


                    <div class="form-group row">
                        <label class="col-sm-2">Giới Tính</label>
                        <div class="col-sm-10">
                            <div class="radio">
                                <label>
                                    <input type="radio" value="1" checked v-model="room_info.gender">
                                     Nam
                                </label>
                            </div>
                            <div class="radio">
                                <label>
                                    <input type="radio" value="0" v-model="room_info.gender">
                                     Nữ
                                </label>
                            </div>
                        </div>
                    </div>

                   <div class="form-group row">
                    <legend>Thông tin đăng ký nhà trọ</legend>
                       <label class="col-sm-2 form-control-label">Ngày Thuê</label>
                       <div class="col-sm-10">
                           <input type="date" class="form-control" placeholder="Nhập Nhgày Thuê"  v-model="room_info.start_at">
                       </div>
                   </div>

                   <div class="form-group row">
                       <label class="col-sm-2 form-control-label">Chọn Phòng Đăng Ký</label>
                       <div class="col-sm-10">
                           <select name="sophong">
                               <option value="" v-for="item in options" :key="item.id" >{{item.id}}</option>

                           </select>
                       </div>
                   </div>                  

                   <div class="form-group row">
                       <label class="col-sm-2">Dịch Vụ</label>
                       <div class="col-sm-10">
                           <div class="checkbox">
                               <label>
                                   <input type="checkbox" value="1" v-model="room_info.service"> Internet (220 000 VND)
                               </label>
                           </div>

                           <input type="text" class="form-control" placeholder="Nhập giá tiền các dịch vụ khác(phát sinh , rác ,gửi xe ,....)" v-model="room_info.service_other">
                       </div>

                   </div>
                   <div class="form-group row">
                       <div class="col-sm-offset-2 col-sm-10">
                           <router-link to="/manage-room"><button name="btnSubmit" type="submit" class="btn btn-primary" @click="save">Đồng Ý</button></router-link>
                       </div>
                   </div>
               </form>
      </div>
  </div>
</template>

<script>

export default {
  name: "roomRegister",
  components: {
   
  },
  data(){
      return{}
  },
  computed:{
      options(){
          return this.$store.state.app.list
          
      },
    room_info(){
      return this.$store.state.app.room_info
    }
    
  },
  methods:{
      save(){
          console.log(this.room_info);
          this.room_info={
              name:'',
              identity_card:'',
              dob:'',
              address:'',
              phone:'',
              gender:'',
              start_at:'',
              room_number:'',
              service:'',
              service_other:'',

          }
      }
  }
// created(){
//     this.options = this.$store.state.app.list
// }
};
</script>

<style scoped>
.right-content{
  margin-top: 100px;
}
.right-content .title {
  position: fixed;
  width: 100%;
  top: 50px;
  background: #557B83;
  height: 40px;
  line-height: 40px !important;
  color: white;
  font-weight: 500;
  padding-left:20px ;
  z-index: 1;
}
.right-content form{
  margin: 50px 150px 0px 50px;
}
</style>
