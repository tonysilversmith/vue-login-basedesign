<template>
  <button :class="bttn">
    <slot>{{ btntxt }}</slot>
  </button>
</template>

<script>
export default {
  name: "BButton",
  props: {
    btntxt: {
      type: String,
      default: "default_value",
    },
  },
  data() {
    return {
      bttn: "bttn",
    };
  },

  render() {
    return <Button />;
  },
};
</script>

<style scoped>
.bttn {
  color: white;
  height: 45px;
  width: 150px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  background-color: blueviolet;
  border: black;
  border-radius: 23px;
  transition: ease-in-out 300ms;
}
.bttn:hover {
  color: black;
  width: 190px;
  background-color: transparent;
  border: 12px blueviolet;
  box-shadow: 10px 5px 5px blueviolet;
  transition: ease-in-out 300ms;
}
.bttn:active {
  color: black;
  height: 47px;
  width: 195px;
  background-color: transparent;
  border: 12px blueviolet;
  box-shadow: 10px 5px 20px 10px rgb(105, 24, 182);
  transition: ease-in 50ms;
}
</style>