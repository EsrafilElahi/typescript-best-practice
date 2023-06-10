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

// without infer
type argsType1<T> = Extract<Events, { type: T }> extends { payload: { userId: string } } ? [type: T, payload: { userId: string }] : [type: T];

// with infer
type argsType2<T> = Extract<Events, { type: T }> extends { payload: infer TPayload } ? [type: T, payload: TPayload] : [type: T];

const sendEvents = <T extends Events["type"]>(...args: argsType2<T>) => { };

sendEvents('LOG_OUT');
sendEvents("LOG_IN", { userId: '12' });