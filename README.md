# ts-nice

Some types that make your life easier when using typescript.

There are three interfaces that allow you to do the following things:
- Select specific properties from a type ([Select](#select)).
- Make all properties of a type optional ([Optional](#optional)).
- Set all properties of a type to a specific type ([SetAll](#setall)).

## Select

Allows you to select specific properties from an interface / type.

```typescript
import { Select } from 'ts-nice'

interface Example {
	a: number
	b: string
}

// Select only the key 'a'.
let result: Select<Example, 'a'>

result = { a: 54 } // valid
result = { a: 'asdf' } // invalid
result = { b: 'hi' } // invalid
result = {} // invalid
```

You can also select multiple properties:

```typescript
interface Example {
	a: number
	b: string
	c: boolean
}

// Select the key 'a' and 'b'.
let result = Select<Example, 'a' | 'b'>
```

## Optional

Allows you to make all properties of an interface / type optional.

```typescript
import { Optional } from 'ts-nice'

interface Example { a: number, b: string }

// Make all properties optional.
let result: Optional<Example>

result = {} // valid
result = { a: 45 } // valid
result = { a: 45, b: 'huhn' } // valid
result = { a: true } // invalid
result = { c: 'asdf' } // invalid
```

## SetAll

Allows you to set all properties of an interface to a specific type.

```typescript
import { Result } from 'ts-nice'

interface Example { a: number, b: string }

// Change the type of all properties to boolean.
let result: SetAll<Example, boolean>

result = { a: true, b: false } // valid
result = { a: 45, b: 'hi' } // invalid
result = { a: true } // invalid
```
