/**
 * Allows you to select specific keys from an interface / type.
 * @example
 * interface Example { a: number, b: string }
 *
 * // Select only the key 'a'
 * type Result = Select<Example, 'a'>
 *
 * // Result: { a: number }
 */
export type Select<Interface, Keys extends keyof Interface> = {
	[key in Keys]: Interface[key]
}
