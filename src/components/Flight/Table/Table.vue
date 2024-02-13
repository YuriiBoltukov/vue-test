<template>
  <div>
    <table class="custom-table" table-data="flightDataToDisplay">
      <thead>
        <tr>
          <th v-for="header in tableHeaders" :key="header.value">{{ header.text }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tableRow, index) in tableData" :key="index">
          <td v-for="header in tableHeaders" :key="header.value">
            <template v-if="isDate(header.value)">
              {{ formatDate(tableRow[header.value]) }}
            </template>
            <template v-else>
              {{ tableRow[header.value] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { FlightDataInternal } from '@/models/flightModels';
import type { Header } from '@/classes/Header.class';
import { formatDate } from '@/utils/formatDate';
import { Title } from '@/enums/title.enum';

/** Props for the component. */
defineProps<{
  tableData: FlightDataInternal[];
  tableHeaders: Header[];
}>();

/** Titles that represent date values. */
const DATE_TITLES: Title[] = [Title.departure_at, Title.return_at, Title.expires_at];

/** Check if a given title represents a date value. */
function isDate(value: Title): boolean {
  if (typeof value !== 'string') return false;
  return DATE_TITLES.includes(value);
}
</script>

<style scoped>
.custom-table {
  border-collapse: collapse;
  width: 100%;
}

.custom-table th {
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
}

.custom-table td {
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
}

.custom-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.custom-table tbody tr:hover {
  background-color: #ddd;
}
</style>
