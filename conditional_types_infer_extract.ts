type Events =
  |
  {
    type: "LOG_IN",
    payload: {
      userId: string
    }
  }
  |
  {
    type: "LOG_OUT"
  }

type argsType<T> = Extract<Events, { type: T }> extends { payload: { userId: string } } ? [type: T, payload: { userId: string }] : [type: T];

const sendEvents = <T extends Events["type"]>(...args: argsType<T>) => { };

sendEvents('LOG_OUT');
sendEvents("LOG_IN", { userId: '12' });