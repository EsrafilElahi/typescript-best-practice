// interface
interface STATUSVARIANTS {
  status_pending: "pending",
  status_done: "done",
  status_reject: "reject"
}

type EveryColorVariants_Value = STATUSVARIANTS[keyof STATUSVARIANTS]
