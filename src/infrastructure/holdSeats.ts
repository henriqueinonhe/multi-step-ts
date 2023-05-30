export type HoldSeatsParameters = {
  movieId: string;
  date: string;
  seatsIds: Array<string>;
};

export const holdSeats = async (params: HoldSeatsParameters) => {
  // Here we pretend we're calling some API
  await new Promise((resolve) => setTimeout(resolve, 1000));
};
