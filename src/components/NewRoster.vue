<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
          label="Arquero"
          placeholder="Nombre y apellido del Arquero"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" v-for="n in 12" :key="n">
        <v-text-field
          :label="n.toString()"
          placeholder="Nombre y Apellido"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="Arquero"
          placeholder="Arquero"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn text outlined color="primary" @click="prev" class="mr-2">
          <v-icon left>fa-arrow-left</v-icon>
          Previous
        </v-btn>
        <v-btn dark color="primary" @click="done">
          Terminar
          <!--          <v-icon right>fa-arrow-right</v-icon>-->
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NewRoster",
  props: {
    backgroundColor: {
      type: String,
      default: "white"
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    done() {
      this.$emit("done");
    },
    prev() {
      this.$emit("prev");
    }
  }
};
</script>

<style scoped></style>
