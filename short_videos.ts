
export const StatusArray = [
  'NOT_STARTED',
  'ACTIVE',
  'COMPLETED',
  'SUBMITTING',
  'VIEWING_ANSWERS'
] as const;

export type Status = typeof StatusArray[number];
// "NOT_STARTED" | "ACTIVE" | "COMPLETED" | "SUBMITTING" | "VIEWING_ANSWERS"


// ========================================================================================

type map1 = {
  [key: string]: string
}

type map2 = Record<string, string>

const map3 = new Map<string, string>()

// ========================================================================================



// ========================================================================================



// ========================================================================================