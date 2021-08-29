<template>
<div class="ui content">
  <div class="ui special cards" >
    <div class="card" v-for="character of characters" :key="character.id">
      <div class="blurring dimmable image">
        <div class="ui dimmer">
          <div class="content">
            <div class="center">
              <div class="ui inverted button">Add Friend</div>
            </div>
          </div>
        </div>
        <div class="image">
          <img class="ui image" :src="character.img_url">
        </div>
      </div>
      <div class="content">
        <a class="header">{{character.name}}</a>
        <div class="meta">
          <p>race: {{character.system_unique.dnd_5th_001.race}}</p>
          <p>class: {{character.system_unique.dnd_5th_001.class}}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import Character from './services/characters'

export default {
  
  data(){
    return {
      characters: []
    }
  },
  mounted(){
    Character.list().then(response => {
      console.log(response.data)
      this.characters = response.data
    })
  }

}

</script>

<style>

</style>
