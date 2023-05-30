import { TicketFlowAtPickingMovie, TicketFlowSteps } from "./TicketFlow";

export const createInitialTicketFlow = (): TicketFlowAtPickingMovie => ({
  step: TicketFlowSteps.PickingMovie.PickingMovie,
});
