import type { FlightResponse } from '@/models/flightModels';

export const mock: FlightResponse = {
  data: {
    '2024-02': {
      origin: 'MOW',
      destination: 'LED',
      airline: '5N',
      departure_at: '2024-02-14T09:10:00+03:00',
      return_at: '2024-02-14T17:00:00+03:00',
      expires_at: '2024-02-13T11:33:31Z',
      price: 3040,
      flight_number: 275,
      transfers: 0
    },
    '2024-03': {
      origin: 'MOW',
      destination: 'PKV',
      airline: 'A4',
      departure_at: '2024-03-19T08:00:00+03:00',
      return_at: '2024-03-20T10:35:00+03:00',
      expires_at: '2024-02-13T11:33:31Z',
      price: 3063,
      flight_number: 7037,
      transfers: 0
    },
    '2024-04': {
      origin: 'MOW',
      destination: 'LED',
      airline: '5N',
      departure_at: '2024-04-02T07:15:00+03:00',
      return_at: '2024-04-10T19:20:00+03:00',
      expires_at: '2024-02-13T11:33:31Z',
      price: 5140,
      flight_number: 295,
      transfers: 0
    },
    '2024-05': {
      origin: 'MOW',
      destination: 'LED',
      airline: 'A4',
      departure_at: '2024-05-19T08:00:00+03:00',
      return_at: '2024-05-29T20:35:00+03:00',
      expires_at: '2024-02-13T11:33:31Z',
      price: 5393,
      flight_number: 7019,
      transfers: 0
    },
    '2024-06': {
      origin: 'MOW',
      destination: 'ARH',
      airline: '5N',
      departure_at: '2024-06-20T11:25:00+03:00',
      return_at: '2024-06-30T17:25:00+03:00',
      expires_at: '2024-02-13T11:33:31Z',
      price: 5800,
      flight_number: 215,
      transfers: 0
    },
    '2024-07': {
      origin: 'MOW',
      destination: 'ARH',
      airline: '5N',
      departure_at: '2024-07-16T10:35:00+03:00',
      return_at: '2024-07-21T17:25:00+03:00',
      expires_at: '2024-02-13T11:33:31Z',
      price: 6795,
      flight_number: 215,
      transfers: 0
    },
    '2024-08': {
      origin: 'MOW',
      destination: 'ARH',
      airline: '5N',
      departure_at: '2024-08-26T14:40:00+03:00',
      return_at: '2024-09-08T17:25:00+03:00',
      expires_at: '2024-02-13T11:33:31Z',
      price: 5799,
      flight_number: 217,
      transfers: 0
    },
    '2024-09': {
      origin: 'MOW',
      destination: 'ARH',
      airline: '5N',
      departure_at: '2024-09-02T14:40:00+03:00',
      return_at: '2024-09-08T17:25:00+03:00',
      expires_at: '2024-02-13T11:33:31Z',
      price: 4804,
      flight_number: 217,
      transfers: 0
    },
    '2024-10': {
      origin: 'MOW',
      destination: 'PKV',
      airline: 'A4',
      departure_at: '2024-10-11T08:00:00+03:00',
      return_at: '2024-10-14T10:30:00+03:00',
      expires_at: '2024-02-13T11:33:31Z',
      price: 4157,
      flight_number: 7037,
      transfers: 0
    },
    '2024-11': {
      origin: 'MOW',
      destination: 'KUF',
      airline: 'S7',
      departure_at: '2024-11-07T15:35:00+03:00',
      return_at: '2024-11-08T19:10:00+04:00',
      expires_at: '2024-02-13T11:33:31Z',
      price: 7588,
      flight_number: 1073,
      transfers: 0
    },
    '2024-12': {
      origin: 'MOW',
      destination: 'KUF',
      airline: 'S7',
      departure_at: '2024-12-04T15:35:00+03:00',
      return_at: '2024-12-09T19:10:00+04:00',
      expires_at: '2024-02-13T11:33:31Z',
      price: 7580,
      flight_number: 1073,
      transfers: 0
    },
    '2025-01': {
      origin: 'MOW',
      destination: 'KUF',
      airline: 'S7',
      departure_at: '2025-01-08T15:35:00+03:00',
      return_at: '2025-01-13T19:10:00+04:00',
      expires_at: '2024-02-13T11:33:31Z',
      price: 7587,
      flight_number: 1073,
      transfers: 0
    }
  },
  currency: 'rub',
  success: true
};
