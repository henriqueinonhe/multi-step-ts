import { Checkout } from "../domain/checkout";
import { createInitialTicketFlow } from "../domain/createInitialTicketFlow";
import { finishOrder } from "./finishOrder";

export const checkout: Checkout = async (ticketFlow) => {
  await finishOrder({
    movieId: ticketFlow.movie.id,
    date: ticketFlow.date,
    seatsIds: ticketFlow.seats.map((seat) => seat.id),
  });

  return createInitialTicketFlow();
};
