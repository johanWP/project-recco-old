<template>
  <v-layout flex align-center justify-center>
    <v-card class="white" outlined>
      <v-card-text class="title pa-5">
        <router-link to="/new-game">Juego Nuevo</router-link>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: "Home",
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped></style>
