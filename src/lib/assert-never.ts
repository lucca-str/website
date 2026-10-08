/** Exhaustiveness check for discriminated unions: adding a variant without handling it is a type error. */
export function assertNever(value: never): never {
  throw new Error(`Unhandled variant: ${JSON.stringify(value)}`)
}
