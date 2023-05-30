import {
  TicketFlowAtPickingMovieDate,
  TicketFlowAtSelectingSeats,
  TicketFlowSteps,
} from "./TicketFlow";

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
