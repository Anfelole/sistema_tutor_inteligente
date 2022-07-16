<template>
   
  <pagina-view>
    <div class="fondoMain">
    <center>
    <div class="fondoData">
    <br><br><br>
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
    
    </div>
    </center>
    </div>
  </pagina-view>
  


</template>

<style>



.title{
  color: aliceblue;
  font-style: italic;
}

.fondoData{
  border-radius: 40px ;
  border: #0f0f0f5d;
  width: 20rem;
  height: 24rem;
  background: #4d4f53a4; 
  
  
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

