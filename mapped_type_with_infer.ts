interface ApiData {
  "map:lat": string,
  "map:long": string,
  "exist": boolean
}

type RemoveMapFromObj<Obj> = {
  [Key in keyof Obj as ExtractLatLong<Key>]: Obj[Key]
}

type DesiredShape = RemoveMapFromObj<ApiData>

type ExtractLatLong<Key> = Key extends `map:${infer U}` ? U : Key 