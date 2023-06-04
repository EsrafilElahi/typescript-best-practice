type Shape = { type: 'square' } | { type: 'circle' } | { type: 'triangle' }

type SqaureShape1 = Extract<Shape, { type: 'square' }> // { type: 'square' }
type SqaureShape2 = Extract<Shape, { type: 'square' | 'circle' }> // { type: 'square' } | { type: 'circle' }



type allTypes = 'admin' | 'user' | 5 | 6 | 7 | true

type onlyNumbers = Extract<allTypes, number> // 5 | 6 | 7



type keys = 'userId' | 'tweetId' | 'userName' | 'tweetName'

type UserKey = Extract<keys, `${'user'}${string}`> // "userId" | "userName"



type keys2 = 'userId' | 'tweetId' | 'id' | 'userName' | 'friendName'

type OnlyIdKey = Extract<keys2, `${string}${'id' | 'Id'}${string}`> // "userId" | "tweetId" | "id"