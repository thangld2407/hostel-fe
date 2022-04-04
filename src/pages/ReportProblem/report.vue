<template>
  <div id="report">
    <div class="title">
      <p>Báo cáo sự cố</p>
    </div>
    <div class="content">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Nội dung:"
        label-for="input-1"
      >
        <b-form-textarea
          id="input-1"
          rows="4"
          v-model="form.content"
          type="email"
          placeholder="Nhập nội dung"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          content: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  
}
</script>

<style scoped>
#report .title {
  position: fixed;
  width: 100%;
  top: 50px;
  background: #557B83;
  height: 40px;
  line-height: 40px;
  color: white;
  font-weight: 500;
  padding-left: 20px;
}
#report .content{
    margin: 120px 300px 0px 50px;
}
#report .content button{
    margin-left: 10px;
}
</style>