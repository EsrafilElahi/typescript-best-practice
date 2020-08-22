// color
interface ColorVariants {
  primary: "blue";
  secondary: "red";
  tertiary: "green";
}

type PrimaryColor = ColorVariants["primary"]; // "blue"
type NonPrimaryColor = ColorVariants["secondary" | "tertiary"]; // "red" | "green"
type EveryColorVariants_Value = ColorVariants[keyof ColorVariants]; // "blue" | "red" | "green"
type EveryColorVariants_Key = keyof ColorVariants; // "primary" "secondary" | "tertiary"

// letters
type Letters = ["a", "b", "c"];

type AOrB = Letters["0" | "1"]; // "a" | "b"
type AllLettersUnion = Letters[number]; // "a" | "b" | "c"

// userRole
interface UserRoleConfig {
  user: ["view", "create", "update"];
  superAdmin: ["view", "create", "update", "delete"];
}

type AllTwoRolesUnion = UserRoleConfig[keyof UserRoleConfig];
// ["view", "create", "update"] | ["view", "create", "update", "delete"]

type AllRolesUnion = UserRoleConfig[keyof UserRoleConfig][number];
// "view" | "create" | "update" | "delete"
