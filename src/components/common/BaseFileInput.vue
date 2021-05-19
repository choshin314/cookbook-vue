<template>
  <div>
    <label :for="$attrs.id">{{ label || "Select File" }}</label>
    <div class="preview-div" v-if="previewImg">
      <img :src="previewImg" alt="" />
    </div>
    <input
      :id="$attrs.id || $attrs.name || ''"
      v-bind="$attrs"
      type="file"
      :accept="$attrs.accept || 'image/png, image/jpeg, image/jpg'"
      v-on="listeners"
      :files="files"
    />
  </div>
</template>

<script>
import inputMixin from "@/mixins/inputMixin";
export default {
  name: "BaseFileInput",
  mixins: [inputMixin],
  computed: {
    previewImg() {
      return this.files ? URL.createObjectURL(this.files[0]) : null;
    },
    files() {
      return this.value;
    }
  }
};
</script>

<style lang="scss" scoped>
.preview-div {
  overflow: hidden;
  & > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
</style>
