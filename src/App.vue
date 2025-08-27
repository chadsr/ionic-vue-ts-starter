<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import ExploreContainer from './components/ExploreContainer.vue';

export default defineComponent({
  components: {
    IonApp,
    IonRouterOutlet,
  },
});
</script>
