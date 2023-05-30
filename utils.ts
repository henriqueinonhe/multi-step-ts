export type Override<
  Target extends Record<string, unknown>,
  Source extends Partial<Record<keyof Target, unknown>>
> = Omit<Target, keyof Source> & Source;
