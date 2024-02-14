<template>
  <div class="container-xl">
    <header  class="text-center">
      <div  class="text-center">
        <Title title="Flight Prices" />
      </div>
    </header>

    <main>
      <Flight v-if="showTable" :flightDataInternal="flightsData" />
    </main>
  </div>
</template>

<script setup lang="ts">
import Title from '@/components/Title/Title.vue';
import Flight from '@/components/Flight/Flight.vue';
import { fetchResources } from '@/api/fetchResources';
import type { FlightDataInternal } from '@/models/flightModels';
import { mapFlightDataResponse } from '@/utils/mapFlightDataResponse';
import { mock } from '@/utils/MOCK/MOCK';
import { ref } from 'vue';

/** Whether to show the table. */
let showTable = ref(false);

let flightsData: FlightDataInternal[] = [];

/** Load flight data. */
const loadData = async (): Promise<void> => {
  let data = await fetchResources();
  if (!data?.length) data = mapFlightDataResponse(mock.data);

  flightsData = data;
  showTable.value = true;
};

loadData();
</script>

