type RemoveKeyResultType<Key extends string, Obj> = Omit<Obj, Key>;
export const makeKeyRemover =
  <Key extends string>(keys: Key[]) =>
  <Obj>(obj: Obj): RemoveKeyResultType<Key, Obj> => {
    return {} as any;
  };

const keyRemover = makeKeyRemover(["a", "b"]);

const newObject = keyRemover({ a: 1, b: 2, c: 3 });

newObject.c; // just this show
 
