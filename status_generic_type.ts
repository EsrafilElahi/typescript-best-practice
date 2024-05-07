// generic type - flexible way
type ExcludeStatus<T extends string> = T | Omit<string, T>

type statusType = ExcludeStatus<"pending" | "done" | "reject">

const status11: statusType = 'reject' // ok
const status12:statusType = 'messi' // ok 
