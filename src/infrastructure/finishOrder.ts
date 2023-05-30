type FinishOrderParameters = {
  movieId: string;
  date: string;
  seatsIds: Array<string>;
};

export const finishOrder = async ({
  date,
  movieId,
  seatsIds,
}: FinishOrderParameters) => {
  // Here we pretend we're calling some API
  await new Promise((resolve) => setTimeout(resolve, 1000));
};
