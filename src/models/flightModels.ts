export interface FlightData {
  origin: string;
  destination: string;
  airline: string;
  departure_at: string;
  return_at: string;
  expires_at: string;
  price: number;
  flight_number: number;
  transfers: number;
}

export interface FlightOptions {
  [date: string]: FlightData;
}

export interface FlightResponse {
  data: FlightOptions;
  currency: string;
  success: boolean;
}

export interface FlightDataInternal extends FlightData {
  date: string;
}
