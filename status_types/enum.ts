// enum
enum Status3 {
  pending,
  done,
  reject
}

type Status = keyof typeof Status3;