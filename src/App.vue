<template lang="pug">
  #app
    vm-header
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
      .container
        p
          small {{searchMessage}}
      .container.result
        .columns
          .column(v-for="t in tracks")
            | {{t.name}} - {{t.artists[0].name}}
    vm-footer
</template>
<script>
import trackService from './services/track.js'
import VmFooter from './components/layout/Footer.vue'
import VmHeader from './components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    VmFooter,
    VmHeader
  },
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  methods: {
    search () {
      if(!this.searchQuery){ return }
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
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
