<template>
  <div id="place">
    <div class="title">
      <span>Địa điểm</span>
      <button>Tạo dãy trọ</button>
    </div>
    <div class="container">
        <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col" class="col-1">ID</th>
                <th scope="col" class="col-1">Tên khu vực</th>
                <th scope="col" class="col-1">Tên dãy trọ</th>
                <th scope="col" class="col-1">Địa chỉ</th>
                <th scope="col" class="col-1">Ngày tạo</th>
                <th scope="col" class="col-1"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td class="actions">
                  <div class="btn btn-warning" >
                    <i class="fa fa-edit"></i>
                  </div>
                  <div class="btn btn-danger" >
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
export default {

}
</script>

<style scoped>
#place .title {
  position: fixed;
  width: 100%;
  top: 50px;
  background: #557B83;
  height: 40px;
  color: white;
  font-weight: 500;
  padding-left: 20px;
  display: flex;
  align-items: center;

}
#place .title button{
  border: none;
  border-radius: 5px;
  margin-left: 1050px;
}
.container{
    margin-top: 140px;
}
.container table{
  text-align: center;
}
.rooms-content table .actions a{
  text-decoration: none;
  color: white;
}
.container .actions > div {
  height: 35px;
  width: 40px;
  margin-left: 5px;
}
</style>