import { ValuesType } from "../utils";

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

export type TicketFlowStep = FlattenDeep<typeof TicketFlowSteps>;

export type TicketFlowStepLike = Aux<typeof TicketFlowSteps>;

type FlattenDeep<T> = T extends string
  ? T
  : ValuesType<{ [K in keyof T]: FlattenDeep<T[K]> }>;

// I'm not sure what to call this
type Aux<T> =
  | ValuesType<T>
  | ValuesType<{
      [Key in keyof T as T[Key] extends string ? never : Key]: Aux<T[Key]>;
    }>;

export const stepIsIn = (
  source: TicketFlowStep,
  target: TicketFlowStepLike
) => {
  if (typeof target === "string") {
    return source === target;
  }

  return Object.values(target).some((subStep) => stepIsIn(source, subStep));
};

export const ticketFlowIsInStep = <
  TicketFlowInSpecificStep extends TicketFlow & { step: FlattenDeep<StepLike> },
  StepLike extends TicketFlowStepLike
>(
  ticketFlow: TicketFlow,
  step: StepLike
): ticketFlow is TicketFlowInSpecificStep => stepIsIn(ticketFlow.step, step);

export function assertTicketFlowIsInStep<
  TicketFlowInSpecificStep extends TicketFlow & { step: FlattenDeep<StepLike> },
  StepLike extends TicketFlowStepLike
>(
  ticketFlow: TicketFlow,
  step: StepLike
): asserts ticketFlow is TicketFlowInSpecificStep {
  if (!stepIsIn(ticketFlow.step, step)) {
    throw new Error(
      `Expected ticket flow to be in step ${step} but it was in step ${ticketFlow.step}`
    );
  }
}
