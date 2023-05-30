import { TicketFlowSteps } from "../domain/TicketFlow";
import { SelectSeats } from "../domain/selectSeats";
import { holdSeats } from "./holdSeats";

export const pickSeats: SelectSeats = async (ticketFlow, { seats }) => {
  await holdSeats({
    date: ticketFlow.date,
    movieId: ticketFlow.movie.id,
    seatsIds: seats.map((seat) => seat.id),
  });

  return {
    ...ticketFlow,
    step: TicketFlowSteps.Checkout,
    seats,
  };
};
