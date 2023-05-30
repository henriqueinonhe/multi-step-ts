import { Override } from "./utils";

export type TicketFlow =
  | TicketFlowAtPickingMovie
  | TicketFlowAtPickingMovieDate
  | TicketFlowAtSelectingSeats
  | TicketFlowAtCheckout;

export type Movie = {
  id: string;
  name: string;
  pricePerTicket: number;
  date: string;
};

export type Seat = {
  id: string;
  identifier: string;
};

export type TicketFlowAtPickingMovie = {
  step: typeof TicketFlowSteps.PickingMovie.PickingMovie;
};

export type TicketFlowAtPickingMovieDate = {
  step: typeof TicketFlowSteps.PickingMovie.PickingDate;
  movie: Override<
    Movie,
    {
      date?: undefined;
      pricePerTicket?: undefined;
    }
  >;
};

export type TicketFlowAtSelectingSeats = {
  step: typeof TicketFlowSteps.SelectingSeats;
  movie: Movie;
};

export type TicketFlowAtCheckout = {
  step: typeof TicketFlowSteps.Checkout;
  movie: Movie;
  seats: Array<Seat>;
};

export const TicketFlowSteps = {
  PickingMovie: {
    PickingMovie: "PickingMovie",
    PickingDate: "PickingDate",
  },
  SelectingSeats: "SelectingSeats",
  Checkout: "Checkout",
} as const;
