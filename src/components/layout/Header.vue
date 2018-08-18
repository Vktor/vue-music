<template lang="pug">
    section.hero.is-success
        .hero-head
            header.nav
                .container
                    .nav-left
                        .nav-item
                            strong 📻 Vue Music
                    .nav-right.nav-menu
                        router-link.nav-item(to="/") Buscar
                        router-link.nav-item(to="about") Nosotros

        .hero-body
            .container.has-text-centered
                h1.title Vue Music App
                h2.subtitle Canciones Vue-nisimas
                vm-player
</template>
<script>
import VmPlayer from '@/components/Player.vue'

export default {
    components:{
        VmPlayer
    }
}
</script>
