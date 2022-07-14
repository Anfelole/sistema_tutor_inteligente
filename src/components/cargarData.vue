<template>
<center>
<div class="fondo2">
  <pagina-view>
    <h1 class="title">Selecciona tu dataset y luego has click en el boton <b>cargar</b></h1>
    <v-file-input
    accept=".csv"
    label="File input">
    
    </v-file-input>
      <v-btn
      :loading="loading"
      :disabled="loading"
      color="success"
      class="ma-2 white--text"
      @click="loader = 'loading'"
    >
      Cargar
      <v-icon
        right
        dark
      >
        mdi-cloud-upload
      </v-icon>
    </v-btn>
  </pagina-view>
</div></center>
</template>

<style>
.title{
  color: aliceblue;
  font-style: italic;
}

.fondo2{
  border-radius: 40px ;
  border: #0f0f0f5d;
  width: 100%;
  height: 100%;
  background: url("https://c4.wallpaperflare.com/wallpaper/676/51/744/face-portrait-digital-art-robot-wallpaper-thumb.jpg"); 
}

</style>

<script>
import PaginaView from "@/views/PaginaView.vue";

export default {
  data () {
      return {
        loader: null,
        loading: false,
      }
    },
  
  
  name: 'evaluacion',

  components: {
    PaginaView
},

watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
}

}
</script>

