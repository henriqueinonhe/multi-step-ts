import {
  Movie,
  TicketFlowAtPickingMovie,
  TicketFlowAtPickingMovieDate,
  TicketFlowSteps,
} from "./TicketFlow";

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
