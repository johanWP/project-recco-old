<template>
  <div>
    <v-btn
      v-for="n in 12"
      :key="n + 1"
      :color="teamColor === 'blue' ? 'info' : 'white'"
      class="ma-2"
      @click="setPlayer(n + 1)"
    >
      {{ n + 1 }}
    </v-btn>
    <v-btn color="error" class="ma-2" @click="setPlayer(1)">
      1
    </v-btn>
    <v-btn
      :color="teamColor === 'blue' ? 'info' : 'white'"
      class="ma-2"
      @click="setPlayer('team')"
    >
      Timeout
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "PlayerButtons",
  props: {
    teamColor: {
      type: String,
      default: "white"
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    setPlayer(playerNumber) {
      this.$emit("input", { color: this.teamColor, number: playerNumber });
    }
  }
};
</script>

<style scoped></style>
