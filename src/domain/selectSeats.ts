import {
  Seat,
  TicketFlowAtCheckout,
  TicketFlowAtSelectingSeats,
} from "./TicketFlow";

export type SelectSeatsParameters = {
  seats: Array<Seat>;
};

export type SelectSeats = (
  ticketFlow: TicketFlowAtSelectingSeats,
  params: SelectSeatsParameters
) => Promise<TicketFlowAtCheckout>;
