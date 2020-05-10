<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <game-action></game-action>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GameAction from "./GameAction";

export default {
  name: "ScoreSheet",
  components: {
    "game-action": GameAction
  },
  props: {},
  data() {
    return {
      teamSelector: false
    };
  },
  mounted() {
    //
  },
  computed: {
    teamColor() {
      return this.teamSelector ? "blue" : "white";
    }
  },
  methods: {}
};
</script>

<style scoped></style>
