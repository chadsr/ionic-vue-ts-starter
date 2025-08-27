<template>
  <ion-page data-pageid="home">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Test App</ion-title>
      </ion-toolbar>
    </ion-header>
    <explore-container />
  </ion-page>
</template>

<script setup lang="ts">
import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
