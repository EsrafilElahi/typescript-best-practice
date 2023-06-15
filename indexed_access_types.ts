// color
interface ColorVariants {
  primary: "blue",
  secondary: "red",
  tertiary: "green"
}

type PrimaryColor = ColorVariants["primary"]
type NonPrimaryColor = ColorVariants["secondary" | "tertiary"]
type EveryColorVariants = ColorVariants[keyof ColorVariants]


// letters
type Letters = ["a", "b", "c"]

type AOrB = Letters["0" | "1"]
type AllLettersUnion = Letters[number]
// "a" | "b" | "c"


// userRole
interface UserRoleConfig {
  user: ["view", "create", "update"],
  superAdmin: ["view", "create", "update", "delete"]
}

type AllTwoRolesUnion = UserRoleConfig[keyof UserRoleConfig]
// ["view", "create", "update"] | ["view", "create", "update", "delete"]

type AllRolesUnion = UserRoleConfig[keyof UserRoleConfig][number]
// "view" | "create" | "update" | "delete"
