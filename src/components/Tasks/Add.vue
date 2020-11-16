<template>
  <div class="add-task">
    <div class="add-task-form form">
      <div class="form-control name-control">
        <label class="form-control__label input-label" for="name"></label>
        <input
          v-model="name"
          name="name"
          class="form-control__input input"
          type="text"
          placeholder="Название"
        />
      </div>
      <div class="form-control description-control">
        <label
          class="form-control__label input-label"
          for="description"
        ></label>
        <textarea
          name="name"
          v-model="description"
          class="form-control__input input"
          type="text"
          placeholder="Описание"
        />
      </div>

      <div class="form-control add-button-control">
        <button @click="addTaskHandler()" class="Добавить">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      name: "",
      description: "",
    };
  },
  methods: {
    async addTaskHandler() {
      //TODO: validation here
      if (this.name !== "" && this.description !== "") {
        try {
          await this.$store.dispatch("addTask", {
            name: this.name,
            description: this.description,
          });

          this.name = "";
          this.description = "";
        } catch (e) {
          console.log("errorHandler");
        }
      }
    },
  },
};
</script>

<style lang="scss">

.add-task{
  width: 50%;
}

.form-control {
  // display: flex;
  // flex-direction: column;
  padding: 0.5rem;
}

.name-control {
  flex: 3;
}

.description-control {
  flex: 7;

  textarea {
    width: 100%;
    height: 100%;
    min-width: 100px;
    display: inline-block;
  }
}

.add-button-control{
  display: flex;
  justify-content: flex-end;
}
</style>