const LOG_LEVEL = {
  DEBUG: "DEBUG",
  WARNING: "WARNING",
  ERROR: "ERROR",
} as const;

type ObjectValues<Obj> = Obj[keyof Obj];

type LogLevel = ObjectValues<typeof LOG_LEVEL>;

function log(msg: string, level: LogLevel) {
  // code
}

log("hi", "WARNING"); // no err -----> //? doesn't required to export this LOG_LEVEL anywhere, we can just pass the values in params
log("hi", LOG_LEVEL.WARNING); // we can use directly, no err too
 
