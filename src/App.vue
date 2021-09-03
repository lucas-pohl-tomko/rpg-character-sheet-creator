<template>
  <div class="ui pointing menu">
      <router-link class="active item" to="/">Characters</router-link>
      <router-link class="item" to="/CreateChar">Create Character</router-link>
      <router-link class="item" to="#">My Character</router-link>
  </div>
  
  <div class="pusher">
    <!-- Site content !-->
    <router-view/>
  </div>

</template>
<style>
  .ui.pointing.menu{
    opacity: 0.7;
  }
</style>
