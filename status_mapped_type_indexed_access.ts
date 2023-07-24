// mapped types and indexed access 
const REQUEST_STATUS2 = {
  status_idle: 'IDLE',
  status_pending: 'PENDING',
  status_success: 'SUCCESS',
  status_error: 'ERROR',
} as const;

type TTest11 = typeof REQUEST_STATUS2;
type TTest22 = keyof typeof REQUEST_STATUS2;
type TTest33 = typeof REQUEST_STATUS2[keyof typeof REQUEST_STATUS2];
// type TTest33 = "IDLE" | "PENDING" | "SUCCESS" | "ERROR"