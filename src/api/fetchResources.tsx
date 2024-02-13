import axios from 'axios';
import type { FlightDataInternal, FlightResponse } from '@/models/flightModels';
import { mapFlightDataResponse } from '@/utils/mapFlightDataResponse';

/** The URL for fetching flight data. */
const URL: string = 'https://api.travelpayouts.com/v1/prices/monthly';

/** The API token for authentication. */
const TOKEN: string = 'b060afdc4b6c296653c6a16c277c53ef';

/**
 * Fetch flight data from the API.
 * @returns {Promise<FlightDataInternal[]>} A promise that resolves with the fetched flight data.
 */
export async function fetchResources(): Promise<FlightDataInternal[]> {
  try {
    const response = await axios.get<FlightResponse>(URL, {
      params: {
        token: TOKEN
      }
    });
    return mapFlightDataResponse(response.data.data);
  } catch (error) {
    console.error('Error fetching flight prices:', error);
    return [];
  }
}
