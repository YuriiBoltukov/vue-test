import type { FlightData, FlightDataInternal, FlightOptions } from '@/models/flightModels';

/**
 * Function for bringing data to the desired format
 * @param response
 */
export function mapFlightDataResponse(response: FlightOptions): FlightDataInternal[] {
  return Object.entries(response).map((el: [string, FlightData]): FlightDataInternal => {
    return {
      date: el[0],
      ...el[1]
    };
  });
}
