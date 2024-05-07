/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

// not good way
const REQUEST_STATUS = {
  status_idle: "IDLE",
  status_pending: "PENDING",
  status_success: "SUCCESS",
  status_error: "ERROR",
};
 
// eslint-disable-next-line no-unused-vars
type TTest1 = typeof REQUEST_STATUS;
/*
  type TTest1 = {
    status_idle: string;
    status_pending: string;
    status_success: string;
    status_error: string;
  }
*/

type TTest2 = keyof typeof REQUEST_STATUS;
// type TTest2 = "status_idle" | "status_pending" | "status_success" | "status_error"

type TTest3 = (typeof REQUEST_STATUS)[keyof typeof REQUEST_STATUS];
// type TTest3 = string

// better way
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

const REQUEST_STATUS2 = {
  status_idle: "IDLE",
  status_pending: "PENDING",
  status_success: "SUCCESS",
  status_error: "ERROR",
} as const;
// in "as const" add readonly to all status
/*
  const REQUEST_STATUS2: {
    readonly status_idle: "IDLE";
    readonly status_pending: "PENDING";
    readonly status_success: "SUCCESS";
    readonly status_error: "ERROR";
  }
*/

// eslint-disable-next-line no-unused-vars
type TTest11 = typeof REQUEST_STATUS2;
/*
  type TTest1 = {
    readonly status_idle: string;
    readonly status_pending: string;
    readonly status_success: string;
    readonly status_error: string;
  }
*/

type TTest22 = keyof typeof REQUEST_STATUS2;
// type TTest2 = "status_idle" | "status_pending" | "status_success" | "status_error"

type TTest33 = (typeof REQUEST_STATUS2)[keyof typeof REQUEST_STATUS2];
// type TTest33 = "IDLE" | "PENDING" | "SUCCESS" | "ERROR"

// User.tsx
const [networkState, setNetworkState] = useState<REQUEST_TYPES>(
  REQUEST_STATUS.idle
);
