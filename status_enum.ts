// enum 1
enum Status3 {
  pending,
  done,
  reject
}

type Status = keyof typeof Status3;

// enum2
enum Status4 {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

const test:Status4 = Status4.PENDING