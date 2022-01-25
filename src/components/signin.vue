<template>
  <div class="center">
    <form action="submit" method="post">
      <table>
        <tr>
          <td>Username</td>
          <td>
            <input
              type="text"
              name="snusername"
              id="snusrname"
              placeholder="Username"
            />
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td>
            <input
              type="password"
              name="snpassword"
              id="snpasswd"
              placeholder="Password"
            />
          </td>
        </tr>
        <tr>
          <td>Email</td>
          <td>
            <input type="email" name="email" id="email" />
          </td>
        </tr>
      </table>
      <button class="button" v-on:click="clicked()">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    clicked() {
      console.log("Clicked");
      event.preventDefault();
    },
  },
  render() {
    return (
      <>
        <Signin />
      </>
    );
  },
};
</script>

<style scoped>
@font-face {
  font-family: "fontello";
  src: url("/fonts/fontello.eot");
  src: url("/fonts/fontello.eot") format("embedded-opentype"),
    url("/fonts/fontello.woff") format("woff"),
    url("/fonts/fontello.ttf") format("truetype"),
    url("/fonts/fontello.svg") format("svg");
  font-weight: normal;
  font-style: normal;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43vh;
}
.button {
  color: white;
  height: 40px;
  width: 100px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  background-color: blueviolet;
  border: black;
  border-radius: 23px;
}
.button:hover {
  color: black;
  background-color: transparent;
  border: 12px blueviolet;
  box-shadow: 10px 5px 5px blueviolet;
  transition: ease-in-out 500ms;
}
input[type="text"],
[type="password"],
[type="email"] {
  border-radius: 45px;
  border-style: dashed;
  padding: 13px;
  margin: 16px;
  backdrop-filter: blur(5px);
  font-family: "fontello";
  /* filter: blur(1px); */
  background: transparent;
  text-decoration: none;
  /* -webkit-text-security: square; */
  letter-spacing: 2px;
}

input[type="password"] {
  font-family: "fontello";
  font-style: normal;
  font-weight: normal;
  color: blueviolet;
  font-size: 16px;

  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;

  /* Font smoothing. That was taken from TWBS */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* Uncomment for 3D effect */
  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */

  /* add spacing to better separate each image */
  letter-spacing: 2px;
}
</style>