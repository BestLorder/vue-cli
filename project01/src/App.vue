<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div>
      <router-link to="/">首页</router-link>|
      <router-link to="/Hi">Hi页面</router-link>|
      <router-link :to="{name:'A',params:{username:'Lorder'}}">A页面</router-link>|
      <router-link to="/Hi/B">B页面</router-link>
      <router-link to="/E/123">E页面</router-link>
      <router-link to="/F">F页面</router-link>
      <router-link to="/goE/666">goE页面</router-link>
      <router-link to="/Hi/BBB">BBB页面</router-link>
    </div>
    <button @click="goBack">后退</button>
    <button @click="goGo">前进</button>
    <button @click="goHome">回到首页</button>
    <transition name="fade" mode="out-in"><router-view></router-view></transition>
    <router-view id="left" name="left"></router-view>
    <router-view id="right" name="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
    methods:{
      goBack(){
          this.$router.go(-1);
      },
        goGo(){
            this.$router.go(1);
        },
        goHome(){
          this.$router.push('/Hi/B');
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#left{
  float: left;
  background: #42b983;
  height: 100px;
  width: 100px;
}
#right{
  float: right;
  background: peru;
  height: 100px;
  width: 100px;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
