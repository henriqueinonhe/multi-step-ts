import { Seat, TicketFlow } from "./TicketFlow";

type GetTotalPriceInput = TicketFlow & {
  seats: Array<Seat>;
  pricePerTicket: number;
};

export const getTotalPrice = (ticketFlow: GetTotalPriceInput) => {
  const { pricePerTicket, seats } = ticketFlow;

  return seats.length * pricePerTicket;
};
