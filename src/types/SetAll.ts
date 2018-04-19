/**
 * Allows you to set all properties of an interface to a specific type.
 * @example
 * interface Example { a: number, b: string }
 *
 * // Change the type of all properties to boolean.
 * let result: SetAll<Example, boolean>
 *
 * result = { a: true, b: false } // valid
 * result = { a: 45, b: 'hi' } // invalid
 * result = { a: true } // invalid
 */
export type SetAll<Interface, NewType> = {
	[name in keyof Interface]: NewType
}
