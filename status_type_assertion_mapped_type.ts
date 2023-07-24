// type assertion and mapped type
export const StatusArray = [
  'NOT_STARTED',
  'ACTIVE',
  'COMPLETED',
  'SUBMITTING',
  'VIEWING_ANSWERS'
] as const;

export type Status = typeof StatusArray[number];
// "NOT_STARTED" | "ACTIVE" | "COMPLETED" | "SUBMITTING" | "VIEWING_ANSWERS"
