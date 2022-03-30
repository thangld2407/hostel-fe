<template>
<div id="createRoom">
    <button v-b-modal.modal-prevent-closing>Create Room</button>
    <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Submit Your Name"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
    >
              
    <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Giá phòng">
        <b-form-input  v-model="new_room.price" required></b-form-input>
        </b-form-group>
        <b-form-group label="Giá điện">
          <b-form-input required disabled></b-form-input>
        </b-form-group>
        <b-form-group label="Giá nước">
          <b-form-input required disabled></b-form-input>
        </b-form-group>
        <b-form-group label="Mô tả">
          <b-form-textarea
							id="textarea-rows"
							rows="4"
							v-model="new_room.description"
						></b-form-textarea>
        </b-form-group>
        <b-form-group>
          <label>Trạng Thái</label>
          <input
            v-model="new_room.status"
            type="radio"
            style="margin: 0px 5px 0px 15px"
            checked
          />Trống
        </b-form-group>
      </form>
			</b-modal>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: "createRoom",
      nameState: null,
      submittedNames: [],
      new_room: {
        id: "",
        price: "",
        status: "",
        descreption: "",
      },
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
        this.new_room = Object.assign({}, this.itemEdit);
      } else {
        this.new_room = {};
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
        (this.new_room = {
          id: "",
          price: "",
          status: "",
          descreption: "",
        });
    },
    handleOk(bvModalEvt) {
      this.$emit("save", this.new_room);
      console.log(this.new_room);
      this.new_room = {
        id: "",
        price: "",
        status: "",
        descreption: "",
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
#createRoom button{
  margin-left: 1000px;
  border: none;
  border-radius: 3px;
  height: 30px;
  background: whitesmoke;
}
</style>