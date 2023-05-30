export type TicketFlow =
  | TicketFlowAtPickingMovie
  | TicketFlowAtPickingMovieDate
  | TicketFlowAtSelectingSeats
  | TicketFlowAtCheckout;

export type Movie = {
  id: string;
  name: string;
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
  movie: Movie;
};

export type TicketFlowAtSelectingSeats = {
  step: typeof TicketFlowSteps.SelectingSeats;
  movie: Movie;
  pricePerTicket: number;
  date: string;
};

export type TicketFlowAtCheckout = {
  step: typeof TicketFlowSteps.Checkout;
  movie: Movie;
  pricePerTicket: number;
  date: string;
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

export const createInitialTicketFlow = (): TicketFlowAtPickingMovie => ({
  step: TicketFlowSteps.PickingMovie.PickingMovie,
});

type PickMovieParameters = {
  movie: Movie;
};

export const pickMovie = (
  ticketFlow: TicketFlowAtPickingMovie,
  { movie }: PickMovieParameters
): TicketFlowAtPickingMovieDate => ({
  ...ticketFlow,
  step: TicketFlowSteps.PickingMovie.PickingDate,
  movie,
});

type PickDateParameters = {
  date: string;
  pricePerTicket: number;
};

export const pickDate = (
  ticketFlow: TicketFlowAtPickingMovieDate,
  { date, pricePerTicket }: PickDateParameters
): TicketFlowAtSelectingSeats => ({
  ...ticketFlow,
  step: TicketFlowSteps.SelectingSeats,
  date,
  pricePerTicket,
});

type PickSeatsParameters = {
  seats: Array<Seat>;
};

export const pickSeats = (
  ticketFlow: TicketFlowAtSelectingSeats,
  { seats }: PickSeatsParameters
): TicketFlowAtCheckout => ({
  ...ticketFlow,
  step: TicketFlowSteps.Checkout,
  seats,
});

export const checkout = async (ticketFlow: TicketFlow) => {
  return createInitialTicketFlow();
};
