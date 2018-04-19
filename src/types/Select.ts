/**
 * Allows you to select specific properties from an interface / type.
 * @example
 * interface Example { a: number, b: string }
 *
 * // Select only the key 'a'.
 * let result: Select<Example, 'a'>
 *
 * result = { a: 54 } // valid
 * result = { a: 'asdf' } // invalid
 * result = { b: 'hi' } // invalid
 * result = {} // invalid
 */
export type Select<Interface, Keys extends keyof Interface> = {
	[key in Keys]: Interface[key]
}
