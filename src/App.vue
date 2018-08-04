<template lang="pug">
  #app
    vm-header
    vm-notifications(v-show="showNotification")
      p(slot="body") No se encontraron Resultados
    vm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
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
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            vm-track(
              :class="{'is-active': t.id == selectedTrack}",
              :track="t", 
              @select="setSelectedTrack"
              )
    vm-footer
</template>
<script>
import trackService from '@/services/track.js'
import VmFooter from '@/components/layout/Footer.vue'
import VmHeader from '@/components/layout/Header.vue'
import VmTrack from '@/components/Track.vue'
import VmLoader from '@/components/shared/Loader.vue'
import VmNotifications from '@/components/shared/Notifications.vue'

export default {
  name: 'app',
  components: {
    VmFooter,
    VmHeader,
    VmTrack,
    VmLoader,
    VmNotifications
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: ''
    }
  },
  methods: {
    search () {
      if(!this.searchQuery){ return }
      this.isLoading = true // Se muestra el componente de carga mientras se busca
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false // se oculta
        })
    },
    setSelectedTrack (id) { // id es el this.track.id enviado desde Track.vue
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(()=>{
          this.showNotification = false
        }, 2000)
      }
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .result {
    margin-top: 50px;
  }
  .is-active{
    border: 3px #23d160 solid;

  }
</style>
