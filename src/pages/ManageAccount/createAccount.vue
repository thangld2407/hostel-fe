<template>
<div id="createAccount">
    <button v-b-modal.modal-prevent-closing>Create Account</button>
    <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Submit Your Name"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
    >
              
    <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Tên người dùng">
        <b-form-input type="text"  v-model="new_account.name" required></b-form-input>
        </b-form-group>
        <b-form-group label="SĐT">
          <b-form-input required v-model="new_account.phone"></b-form-input>
        </b-form-group>
        <b-form-group label="Email">
          <b-form-input required v-model="new_account.email"></b-form-input>
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input type="password" required v-model="new_account.password"></b-form-input>
        </b-form-group>
        <b-form-group label="Role">
          <b-form-select v-model="new_account.role">
						<b-form-select-option :value="null">Chọn role</b-form-select-option>
							<b-form-select-option
								v-for="(role, index) in options"
								:key="index"
								:value="role.id"
							>
								{{ role.name }}
							</b-form-select-option>
						</b-form-select>
        </b-form-group>
      </form>
			</b-modal>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: "createAccount",
      nameState: null,
      submittedNames: [],
      new_account: {
        name: "",
        phone: "",
        email: "",
        password: "",
        role:''
      },
      options:[
        {name: 'ADMIN'},
        {name: 'MANAGER'},
        {name: 'BUILDER'},
        {name: 'TENANT'},
      ]
    };
  },
  props: {
    itemEdit: {
      type: Object,
      default: null,
    },
  },
  watch: {
    itemEdit() {
      if (this.itemEdit) {
        this.new_account = Object.assign({}, this.itemEdit);
      } else {
        this.new_account = {};
      }
    },
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      (this.nameState = null),
        (this.new_account = {
          name: "",
          phone: "",
          email: "",
          password: "",
          role:null
        });
    },
    handleOk(bvModalEvt) {
      this.$emit("save", this.new_account);
      console.log(this.new_account);
      this.new_account = {
        name: "",
        phone: "",
        email: "",
        password: "",
        role:null
      };
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};

</script>
<style scopped>
#createAccount button{
  margin-left: 850px;
  border: none;
  border-radius: 3px;
  height: 25px;
  background: whitesmoke;
}
</style>