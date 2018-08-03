<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container 
          input.input.is-large(
            type="text",
            placeholder="Buscar Canciones",
            v-model="searchQuery"
            )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
          p
            small {{searchMessage}}
      .container.result
        .columns
          .column(v-for="t in tracks") {{t.name}} - {{t.artist}}
</template>
<script>
import trackService from './services/track.js'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  methods: {
    search () {
      trackService.search(this.searchQuery)
        .then(res => {
          console.log(res)
        })
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .result {
    margin-top: 50px;
  }
</style>
