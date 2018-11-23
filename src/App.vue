<template>

  <div id="app">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    <div class="router">
      <transition name="animate">

        <router-view/>

      </transition>
    </div>

  </div>
</template>

<script>


</script>

<style scoped>
  #app .router {
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
  }

  @media screen and (min-width: 961px){
    #app .router{
      margin-left: 100px;
      margin-right: 100px;
    }
  }

  .router > div{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }



  .router .forward.animate-enter-active{
    animation: forward-left-animation-in .5s linear;


  }

  .router .forward.animate-leave-active{
    animation: forward-left-animation-out .5s linear;

  }

  .router .back.animate-enter-active{
    animation: back-left-animation-in .5s linear;


  }

  .router .back.animate-leave-active{
    animation: back-left-animation-out .5s linear;

  }

  @keyframes forward-left-animation-out {
    0%   { left: 0; }
    100% { left: -100%; }
  }

  @keyframes forward-left-animation-in {
    0%   { left: 120%; }
    100% { left: 0; }
  }

  @keyframes back-left-animation-out {
    0%   { left: 0; }
    100% { left: 100%; }
  }

  @keyframes back-left-animation-in {
    0%   { left: -120%; }
    100% { left: 0; }
  }
</style>
