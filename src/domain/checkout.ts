import { TicketFlowAtCheckout } from "./TicketFlow";
import { createInitialTicketFlow } from "./createInitialTicketFlow";

export type Checkout = (
  ticketFlow: TicketFlowAtCheckout
) => Promise<ReturnType<typeof createInitialTicketFlow>>;
