<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
          label="Nombre"
          placeholder="Nombre del Equipo"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="Entrenador"
          placeholder="Nombre del Entrenador"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="Asistente"
          placeholder="Nombre del Asistente"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn text outlined color="primary" @click="next">
          Next
          <v-icon right>fa-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NewTeamDetails",
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
    next() {
      this.$emit("next");
    }
  }
};
</script>

<style scoped></style>
