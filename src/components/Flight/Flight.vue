<template>
  <form class="form">
    <label for="search"
      >Search
      <input
        class="form-control"
        id="search"
        v-model="searchedTerm"
        @input="(event) => searchTerm(event.target.value)"
        type="text"
        placeholder="Search"
        aria-label="default input example"
      />
    </label>
    <label for="filterByDestination"
      >Filter by destination
      <select
        class="form-select"
        name="Destination"
        @change="(event) => filterByDestinationOrAirline(event.target.value, Title.destination)"
        id="filterByDestination"
        aria-label="Filter by destination"
      >
        <option :value="EMPTY_VALUE" selected>Select destination</option>
        <option :value="data" v-for="(data, i) in destinations" :key="i">{{ data }}</option>
      </select>
    </label>
    <label for="filterByAirlines"
      >Filter by airlines
      <select
        class="form-select"
        id="filterByAirlines"
        name="Airline"
        @change="(event) => filterByDestinationOrAirline(event.target.value, Title.airline)"
        aria-label="Filter by airlines"
      >
        <option :value="EMPTY_VALUE">Select airline</option>
        <option :value="airline" v-for="airline in airlines" :key="airline">{{ airline }}</option>
      </select>
    </label>
    <div class="price">
      <p>Filter by price</p>
      <div>
        <label for="priceFrom">From:</label>
        <input
          type="number"
          v-model="minPrice"
          id="priceFrom"
          name="priceFrom"
          ref="minPriceRef"
          min="0"
          placeholder="Minimum price"
          @input="filterByParams"
        />

        <label for="priceTo">To:</label>
        <input
          type="number"
          v-model="maxPrice"
          id="priceTo"
          name="priceTo"
          min="0"
          placeholder="Maximum price"
          @input="filterByParams"
        />
      </div>
    </div>
  </form>
  <Table :tableData="flightDataToDisplay" :tableHeaders="headers" />
</template>

<script setup lang="ts">
import type { FlightDataInternal } from '@/models/flightModels';
import type { Ref, UnwrapRef } from 'vue';
import { ref } from 'vue';
import Table from '../Flight/Table/Table.vue';
import { Header } from '@/classes/Header.class';
import { Title } from '@/enums/title.enum';

/** Placeholder value for empty selection. */
const EMPTY_VALUE = '__EMPTY__';

/** Props for the component. */
const props = defineProps<{
  flightDataInternal: FlightDataInternal[];
}>();

/** The flight data to display. */
const flightDataInternal: FlightDataInternal[] = props.flightDataInternal;

/** Reference to the flight data to display. */
let flightDataToDisplay: Ref<UnwrapRef<FlightDataInternal[]>>;

/** Array of destination names. */
let destinations: string[];

/** Searched term. */
let searchedTerm: string;

/** Array of airline names. */
let airlines: string[];

/** Minimum price filter value. */
let minPrice: number | null;

/** Maximum price filter value. */
let maxPrice: number | null;

/** Array of table headers. */
let headers: Header[];

/** Initialize component data. */
initialize();

function initialize() {
  flightDataToDisplay = ref(structuredClone(flightDataInternal));
  headers = buildHeaders();
  destinations = getDestinationsOrAirlines(Title.destination);
  airlines = getDestinationsOrAirlines(Title.airline);
}

/** Get array of destination or airline names. */
function getDestinationsOrAirlines(key: Title.destination | Title.airline): string[] {
  return Array.from(
    new Set(
      flightDataInternal.map((flight: FlightDataInternal) => {
        return flight[key];
      })
    )
  );
}

/** Build table headers. */
function buildHeaders(): Header[] {
  return Object.keys(flightDataInternal[0]).map((key: string) => {
    return new Header(resolveHeaderTitle(Title[key]), Title[key]);
  });
}

/** Resolve header title. */
function resolveHeaderTitle(header: Title): string {
  return {
    [Title.date]: 'Date',
    [Title.origin]: 'Origin',
    [Title.destination]: 'Destination',
    [Title.airline]: 'Airline',
    [Title.departure_at]: 'Departure',
    [Title.return_at]: 'Return',
    [Title.expires_at]: 'Expires',
    [Title.price]: 'Price',
    [Title.flight_number]: 'Flight Number',
    [Title.transfers]: 'Transfers'
  }[header];
}

/** Handle search term change. */
function searchTerm(value: string | null): void {
  const fieldsToCheck = [
    Title.origin,
    Title.destination,
    Title.airline,
    Title.price,
    Title.flight_number
  ];

  flightDataToDisplay.value = flightDataInternal.filter((flight: FlightDataInternal) => {
    return Object.keys(flight)
      .filter((key: Title) => fieldsToCheck.includes(key))
      .some((key) => {
        return String(flight[key]).toLowerCase().includes(value?.toLowerCase());
      });
  });
}

/** Handle filtering by price range. */
function filterByParams(): void {
  if (minPrice < 0 || maxPrice < 0) {
    alert('Number cannot be negative');
    if (minPrice < 0) minPrice = null;
    else maxPrice = null;
  }

  flightDataToDisplay.value = flightDataInternal.filter((flight: FlightDataInternal) => {
    if (minPrice && maxPrice) {
      return flight.price >= minPrice && flight.price <= maxPrice;
    } else if (minPrice) {
      return flight.price >= minPrice;
    } else if (maxPrice) {
      return flight.price <= maxPrice;
    }

    return true;
  });
}

/** Handle filtering by destination or airline. */
function filterByDestinationOrAirline(
  value: FlightDataInternal[Title.destination] | FlightDataInternal[Title.airline] | null,
  key: Title.destination | Title.airline
): void {
  if (value && value !== EMPTY_VALUE) {
    flightDataToDisplay.value = flightDataInternal.filter(
      (flight: FlightDataInternal) => flight[key] === value
    );
  } else {
    flightDataToDisplay.value = structuredClone(flightDataInternal);
  }
}
</script>
<style>
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.price {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
