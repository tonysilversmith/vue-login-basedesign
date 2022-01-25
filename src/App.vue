<template>
  <div>
    <div>
      <div v-bind:class="mainFont">Eagle</div>
      <div v-bind:disabled="hi">Watchu Lookin at? Login now..</div>
    </div>
    <div :class="flexcenter">
      <BButton btntxt="Log In" @click="loginclick()"></BButton>
      <BButton btntxt="Sign Up" @click="signinclick()"></BButton>
    </div>
    <div class="logpos">
      <Login v-bind:class="addclassln" />
      <Signin v-bind:class="addclasssn" id="signpos" />
    </div>
    <!-- <div class="logpos"></div> -->
    <Footer />
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import Footer from "./components/footer.vue";
import BButton from "./components/BButton.vue";
import Login from "./components/login.vue";
import Signin from "./components/signin.vue";

export default {
  name: "App",
  components: {
    Footer,
    BButton, // this component was creating problems..
    Login,
    Signin,
  },
  data() {
    return {
      name: "hello",
      hi: true,
      mainFont: "txtawe",
      buttonBox: "bttn",
      flexcenter: "fc",
      login: true,
      addclassln: "blurredeverything",
      signin: true,
      addclasssn: "blurredeverything",
    };
  },
  methods: {
    loginclick() {
      if (this.login === true) {
        this.addclassln = "showeverything";
        this.addclasssn = "blurredeverything";
        this.login = !this.login;
      } else {
        this.addclassln = "blurredeverything";
        this.login = !this.login;
      }
    },
    signinclick() {
      if (this.signin === true) {
        this.addclasssn = "showeverything";
        this.addclassln = "blurredeverything";
        this.signin = !this.signin;
      } else {
        this.addclasssn = "blurredeverything";
        this.signin = !this.signin;
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
  background: url("https://source.unsplash.com/1600x900/?beach,sunset,trees");
  background-repeat: no-repeat;
  background-size: 100%;
  background-size: cover;
  overflow: hidden;
}
#app {
  font-size: 30px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;
}
.txtawe {
  font-family: Brush Script MT, Brush Script Std, cursive;
  font-size: 110px;
}
.bttn {
  margin: 20px;
  padding: 10px;
  background: none;
  border-radius: 0px;
}
.fc {
  display: flex;
  align-items: center;
  justify-content: center;
}
.blurredeverything {
  filter: blur(100px);
  transition: ease-in-out 400ms;
  z-index: -1;
}
.showeverything {
  height: 35vh;
  border: 1px dotted blueviolet;
  border-radius: 10px;
  filter: blur(0px);
  backdrop-filter: blur(10px);
  transition: ease-in-out 400ms;
  z-index: 1;
}
.logpos {
  margin: 60px 0px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
#signpos {
  position: absolute;
  top: 40vh;
}
@media only screen and (max-width: 600px) {
  #signpos {
    position: absolute;
    top: 30vh;
  }
}
</style>
