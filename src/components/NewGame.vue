<template>
  <v-container>
    <transition name="slide-fade">
      <v-row v-if="currentStep === 1">
        <v-col lg="6" sm="12">
          <new-team @ready="ready" caps="white"></new-team>
        </v-col>
        <v-col lg="6" sm="12" class="primary-border">
          <new-team @ready="ready" caps="blue"></new-team>
        </v-col>
      </v-row>
    </transition>
    <v-row>
      <v-col>
        <v-btn color="primary" :disabled="!gameIsReady" @click="startGame"
          >Comenzar</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewTeam from "./NewTeam";

export default {
  name: "NewGame",
  components: {
    "new-team": NewTeam
  },
  props: {},
  data() {
    return {
      currentStep: 1,
      whiteIsReady: false,
      blueIsReady: false
    };
  },
  computed: {
    gameIsReady() {
      return this.whiteIsReady && this.blueIsReady;
    }
  },
  methods: {
    nextStep: function() {
      this.currentStep += 1;
    },
    ready(payload) {
      if (payload.caps === "white") {
        this.whiteIsReady = payload.ready;
      } else {
        this.blueIsReady = payload.ready;
      }
    },
    startGame() {
      this.$router.push({ name: "game", params: { gameId: "dummy" } });
    }
  }
};
</script>

<style scoped></style>
