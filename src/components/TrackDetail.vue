<template lang="pug">
.container
  .columns
    .column.is-5.is-offset-4
      vm-track(:track="track")
</template>

<script>
import trackServices from '@/services/track.js'
import VmTrack from '@/components/Track.vue'
export default {
    components: { VmTrack },
    data () {
      return {
        track: {}
      }
    },
    created () {
      const id = this.$route.params.id

      trackServices.getById(id)
        .then( res => {
          this.track = res
        })
    }
  }
</script>

<style lang="scss" scoped>
.columns{
  margin: 20px;
}
</style>
