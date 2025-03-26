type UnionType = 'a' | 'b' | 'c';

// Using Extract and Exclude
type ExtractedType = Extract<UnionType, 'a' | 'b'>; // 'a' | 'b'
type ExcludedType = Exclude<UnionType, 'a' | 'b'>; // 'c'

// Using NonNullable
type NullableType = string | null | undefined;
type NonNullableType = NonNullable<NullableType>; // string
