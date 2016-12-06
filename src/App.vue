<template>
  <div id="app">
    <oa-header></oa-header>
    <div class="app_section"> 
        <transition name="fade" mode="out-in">
             <router-view class="view"></router-view>
        </transition>    
    </div>
  </div>
</template>

<script>
    //import Hello from './components/Hello'
    import OaHeader from './components/Header.vue'
    export default {
        name: 'app',
        components: {
            //Hello
            OaHeader
        }
    }
</script>

<style>
    /*#app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }*/
    
    .fade-enter-active,
    .fade-leave-active {
        transition: all .2s ease;
    }
    
    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>