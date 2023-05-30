import { checkForExhaustiveness } from "../utils";
import { TicketFlow, TicketFlowSteps, ticketFlowIsInStep } from "./TicketFlow";

export const goToPreviousStep = <TicketFlowAtSpecificStep extends TicketFlow>(
  ticketFlow: TicketFlowAtSpecificStep
): GoToPreviousStepReturnValue<TicketFlowAtSpecificStep> => {
  ticketFlow;
  if (
    ticketFlowIsInStep(ticketFlow, TicketFlowSteps.PickingMovie.PickingMovie)
  ) {
    return {
      ...ticketFlow,
      step: TicketFlowSteps.PickingMovie.PickingMovie,
    } as GoToPreviousStepReturnValue<TicketFlowAtSpecificStep>;
  }

  if (
    ticketFlowIsInStep(ticketFlow, TicketFlowSteps.PickingMovie.PickingDate)
  ) {
    return {
      ...ticketFlow,
      step: TicketFlowSteps.PickingMovie.PickingMovie,
    } as GoToPreviousStepReturnValue<TicketFlowAtSpecificStep>;
  }

  if (ticketFlowIsInStep(ticketFlow, TicketFlowSteps.SelectingSeats)) {
    return {
      ...ticketFlow,
      step: TicketFlowSteps.PickingMovie.PickingDate,
    } as GoToPreviousStepReturnValue<TicketFlowAtSpecificStep>;
  }

  if (ticketFlowIsInStep(ticketFlow, TicketFlowSteps.Checkout)) {
    return {
      ...ticketFlow,
      step: TicketFlowSteps.SelectingSeats,
    } as GoToPreviousStepReturnValue<TicketFlowAtSpecificStep>;
  }

  return checkForExhaustiveness(ticketFlow);
};

type GoToPreviousStepReturnValue<TicketFlowAtSpecificStep extends TicketFlow> =
  TicketFlow & { step: PreviousStepMap[TicketFlowAtSpecificStep["step"]] };

type PreviousStepMap = {
  [TicketFlowSteps.PickingMovie
    .PickingMovie]: typeof TicketFlowSteps.PickingMovie.PickingMovie;
  [TicketFlowSteps.PickingMovie
    .PickingDate]: typeof TicketFlowSteps.PickingMovie.PickingMovie;
  [TicketFlowSteps.SelectingSeats]: typeof TicketFlowSteps.PickingMovie.PickingDate;
  [TicketFlowSteps.Checkout]: typeof TicketFlowSteps.SelectingSeats;
};
