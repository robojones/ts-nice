/**
 * Allows you to set all keys of an interface to a specific type.
 * @example
 * interface Example { a: number, b: string }
 *
 * // Change the type of all keys to boolean
 * type Result = Select<Example, boolean>
 *
 * // Result: { a: boolean, b: boolean }
 */
export type SetAll<Interface, NewType> = {
	[name in keyof Interface]: NewType
}
