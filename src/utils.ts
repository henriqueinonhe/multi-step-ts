export type Override<
  Target extends Record<string, unknown>,
  Source extends Partial<Record<keyof Target, unknown>>
> = Omit<Target, keyof Source> & Source;

export type ValuesType<T> = T[keyof T];

export const checkForExhaustiveness = (x: never): never => {
  throw new Error("Exhaustiveness check failed");
};
