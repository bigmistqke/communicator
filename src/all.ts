type UnwrapValue<T> = NonNullable<T>
type UnwrapValues<T extends [...any[]]> = T extends [infer Head, ...infer Tail]
  ? [UnwrapValue<Head>, ...UnwrapValues<Tail>]
  : []

export default function all<T extends [...any[]]>(...values: [...T]) {
  if (values.every((value) => !!value)) {
    return values as unknown as UnwrapValues<T>
  }
  return undefined
}
