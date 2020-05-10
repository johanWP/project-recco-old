<template>
  <v-container>
    <v-row>
      <v-col lg="6" md="12" class="text-center">
        <v-time-picker
          v-model="action.time"
          class="mt-4"
          format="24hr"
          min="00:00"
          max="08:00"
        ></v-time-picker>
      </v-col>
      <v-col lg="6" md="12">
        <v-container>
          <v-row>
            <v-col>
              <player-buttons
                teamColor="white"
                v-model="action.player"
              ></player-buttons>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <player-buttons
                teamColor="blue"
                v-model="action.player"
              ></player-buttons>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="6" md="12">
        <v-btn
          v-for="gameAction in gameActions"
          :key="gameAction.label"
          class="ma-2"
          @click="setAction(gameAction)"
        >
          {{ gameAction.label }}
        </v-btn>
      </v-col>
      <v-col lg="6" md="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Tiempo</th>
                <th class="text-left">Jugador</th>
                <th class="text-left">Equipo</th>
                <th class="text-left">Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ action.time }}</td>
                <td>{{ action.player.number }}</td>
                <td>
                  <v-icon
                    :color="action.player.color === 'blue' ? 'info' : 'black'"
                  >
                    {{ teamIcon }}
                  </v-icon>
                </td>
                <td>
                  {{ action.value }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn large color="default" class="mr-2">
          <v-icon left>fa-eraser</v-icon>
          Borrar
        </v-btn>
        <v-btn large color="warning">
          <v-icon left>fa-save</v-icon>
          Guardar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PlayerButtons from "./PlayerButtons";
export default {
  name: "GameAction",
  components: {
    "player-buttons": PlayerButtons
  },
  props: {},
  data() {
    return {
      teamSelector: false,
      time: "",

      action: {
        time: "",
        player: {
          color: null,
          number: null
        },
        label: "",
        value: ""
      },
      gameActions: [
        {
          label: "EXP",
          value: "EXP"
        },
        {
          label: "PEN",
          value: "PEN"
        },
        {
          label: "GOL",
          value: "GOL"
        },
        {
          label: "EXP 4'",
          value: "EXP4"
        },
        {
          label: "T. AMA",
          value: "T.AMA"
        }
      ]
    };
  },
  mounted() {
    //
  },
  computed: {
    teamColor() {
      return this.teamSelector ? "blue" : "white";
    },
    teamIcon() {
      return this.teamSelector ? "fas fa-circle" : "far fa-circle";
    }
  },
  methods: {
    setAction(gameAction) {
      this.action.label = gameAction.label;
      this.action.value = gameAction.value;
    }
  }
};
</script>

<style scoped></style>
