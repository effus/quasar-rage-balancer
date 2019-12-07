<template>
  <q-page class="fit">
    <q-bar class="bg-black text-white">
      <div class="cursor-pointer">Clicks <q-badge :label="0"></q-badge></div>
      <div class="cursor-pointer" v-on:click="onStartNewClick">Start new</div>
      <div class="cursor-pointer" v-on:click="onResetClick">Reset</div>
      <div class="cursor-pointer">What?</div>
      <div class="cursor-pointer">LANG</div>
    </q-bar>
    <q-card class="btn-wrapper" :class="bgQuasarClass">
      <q-btn label="Rage button" no-wrap size="xl" push :color="rageBtnQuasarColor" @click="onRageBtnClick"></q-btn>
      {{bgQuasarClass}}
      [ {{$store.getters.getLastMeasure}} ]
    </q-card>
  </q-page>
</template>

<script>
import {QBtn, QCard, QBar} from 'quasar';

const RageThemeMapping = [
  {until: 5, theme: 'bg-white'},
  {until: 15, theme: 'bg-red-1'},
  {until: 40, theme: 'bg-red-3'},
  {until: 50, theme: 'bg-red-4'},
  {until: 55, theme: 'bg-red-5'},
  {until: 75, theme: 'bg-red-9'},
  {until: 85, theme: 'bg-red-10'},
  {until: 95, theme: 'bg-brown-10'},
  {until: 100, theme: 'bg-grey-10'}
];

export default {
  name: 'PageIndex',
  components: {
    QBtn, QCard, QBar
  },
  data: function() {
    return {
      isCoolDown: false
    }
  },
  computed: {
    rageBtnQuasarColor: function() {
      return 'grey-1 text-black';
    },
    bgQuasarClass: function() {
      let prevPercent = 0;
      for (let i in RageThemeMapping) {
        if (this.$store.getters.getRagePercent >= prevPercent && this.$store.getters.getRagePercent <= RageThemeMapping[i].until) {
          return RageThemeMapping[i].theme;
        }
        prevPercent = RageThemeMapping[i].until;
      }
      return 'white';
    }
  },
  methods: {
    onRageBtnClick: function() {
      this.$store.dispatch('IncreaseRage');
    },
    onStartNewClick: function() {
      this.$store.dispatch('NewMeasure');
    },
    onResetClick: function() {
      this.$store.dispatch('ResetStore');
    }
  }
}
</script>

<style lang="scss">
.btn-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 3rem;
  bottom: 0;
  border-radius: 0;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 2fr 1fr 2fr;
  button.q-btn {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 2;
  }
}
.cursor-pointer {
  &:hover {
    color: #cfcf0f;
  }  
}
</style>