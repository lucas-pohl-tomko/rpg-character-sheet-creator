<template>
  <div class="ui secondary pointing menu">
      <router-link class="active item" to="/"><h3 class="ui header">Characters</h3></router-link>
      <router-link class="item" to="/CreateChar"><h3 class="ui header">Create Character</h3></router-link>
      <router-link class="item" to="#"><h3 class="ui header">My Character</h3></router-link>
  </div>
  
  <div class="pusher">
    <!-- Site content !-->
    <router-view/>
  </div>

</template>
<style>
</style>
