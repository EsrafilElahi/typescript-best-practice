//Bad ❌
enum BadState1 {
  InProgress,
  Success,
  Fail,
}
 
enum BadState2 {
  InProgress = 10,
  Success = 20,
  Fail = 30,
}

BadState1.InProgress; // (enum member) State.InProgress = 0
BadState1.Success; // (enum member) State.Success = 1
BadState1.Fail; // (enum member) State.Fail = 2

const badCheckState = (state: BadState1) => {
  //
};

badCheckState(100); // not error



//Good ✅
type GoodState = "InProgress" | "Success" | "Fail";
enum GoodState2 {
  InProgress = "InProgress",
  Success = "Success",
  Fail = "Fail",
}

const goodCheckState = (state: GoodState2) => { };

goodCheckState("afjalfkj"); // error
