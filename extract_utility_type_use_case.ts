type Shape = { type: 'square', num: 2 } | { type: 'circle', num: 3 } | { type: 'triangle', num: 4 }

type SqaureShape1 = Extract<Shape, { type: 'square' }> // { type: 'square', num: 2 }
type SqaureShape2 = Extract<Shape, { type: 'square' | 'circle' }> // { type: 'square', num: 2 } | { type: 'circle', num:3 }
type SqaureShape3 = Extract<Shape, { num: 4 }> // { type: 'triangle', num:4 }



type allTypes = 'admin' | 'user' | 5 | 6 | 7 | true

type onlyNumbers = Extract<allTypes, number> // 5 | 6 | 7



type keys = 'userId' | 'tweetId' | 'userName' | 'tweetName'

type UserKey = Extract<keys, `${'user'}${string}`> // "userId" | "userName"



type keys2 = 'userId' | 'tweetId' | 'id' | 'userName' | 'friendName'

type OnlyIdKey = Extract<keys2, `${string}${'id' | 'Id'}${string}`> // "userId" | "tweetId" | "id"