/**
 * Allows you to make all keys of an interface / type optional.
 * @example
 * interface Example { a: number, b: string }
 *
 * // Make all keys optional.
 * let result: Optional<Example>
 *
 * result = {} // valid
 * result = { a: 45 } // valid
 * result = { a: 45, b: 'huhn' } // valid
 * result = { a: true } // invalid
 * result = { c: 'asdf' } // invalid
 */
export type Optional<Interface> = {
	[key in keyof Interface]?: Interface[key]
}
