<template>
  <div>
    <pagina-view>
      
<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="anchoFlor"
            :rules="nameRules"
            :counter="10"
            label="Ancho de la flor, ejemplo: 4.0"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="altoFlor"
            :rules="nameRules"
            :counter="10"
            label="Altura de la flor, ejemplo: 4.0"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="largoFlor"
            :rules="nameRules"
            :counter="10"
            label="Largo de la flor, ejemplo: 4.0"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="1"
          md="3"
        >
          <v-text-field
            v-model="grosorFlor"
            :rules="nameRules"
            :counter="10"
            label="Grosor de la flor, ejemplo: 4.0"
            required
          ></v-text-field>
        </v-col>
        
      </v-row>
    </v-container>
  </v-form>



      <v-btn
      :loading="loading"
      :disabled="loading"
      color="success"
      class="ma-2 white--text"
      @click="loader = 'loading'"
    >
      PREDECIR
      <v-icon
        right
        dark
      >
        mdi-wrench
      </v-icon>
    </v-btn>
    <br><br>
    <v-simple-table ligth>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            Tipo de flor
          </th>
          <th class="text-center">
            Porcentaje de precision
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in resultados"
          :key="item.flor"
        >
          <td>{{ item.flor }}</td>
          <td>{{ item.score }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

</template>
    </pagina-view>
  </div>

</template>

<style>


</style>

<script>
import PaginaView from "@/views/PaginaView.vue";

export default {
  name: 'contenidos',

  components: {
    PaginaView
  },
    data: () => ({

      
        loader: null,
        loading: false,
      

        resultados: [
          {
            // 
            flor: 'xxxx xxxx',
            score: 0.0,
          }
        ],
      

      valid: false,

      anchoFlor: '',
      altoFlor: '',
      largoFlor: '',
      grosorFlor: '',

      nameRules: [
        v => !!v || 'El valor es obligatorio',
        v => v.length <= 3 || 'El numero debe ser ingresado en forma decimal, ejemplo: 4.0',
      ],
    }),
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