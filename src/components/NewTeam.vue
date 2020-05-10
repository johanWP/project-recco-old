<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <transition name="slide-fade">
          <new-team-details
            v-if="currentStep === 1 && !isReady"
            @next="nextStep"
          ></new-team-details>
        </transition>
        <transition name="slide-fade">
          <new-roster
            v-if="currentStep === 2 && !isReady"
            @prev="prevStep"
            @done="ready()"
          ></new-roster>
        </transition>
        <div>
          <v-icon
            v-if="isReady"
            color="secondary"
            size="120"
            align-center
            justify-center
            >fa-check-circle</v-icon
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewRoster from "./NewRoster";
import NewTeamDetails from "./NewTeamDetails";

export default {
  name: "NewTeam",
  components: {
    "new-roster": NewRoster,
    "new-team-details": NewTeamDetails
  },
  props: {
    caps: {
      type: String,
      default: "white"
    }
  },
  data() {
    return {
      currentStep: 1,
      isReady: false
    };
  },
  computed: {},
  methods: {
    nextStep() {
      this.currentStep += 1;
    },
    prevStep() {
      this.currentStep -= 1;
    },
    ready() {
      this.isReady = true;
      // guardar el juego y redirigir a la planilla
      const args = { caps: this.caps, ready: this.isReady };
      this.$emit("ready", args);
    }
  }
};
</script>

<style scoped></style>
