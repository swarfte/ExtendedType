# ExtendedType

Expand Typescript native data types

# Number System

all class from the Numbers is extended Number

```
import { Numbers } from "extended-type"

```

## Example

```
const a = new Numbers.NonNegativeInteger(30);
// get the value is the same method as Number
const value = a.valueOf();
console.log(value) // 30
```

## Number System option

```
{
  Integer,
  Float,
  PositiveNumber,
  NegativeNumber,
  PositiveInteger,
  NegativeInteger,
  PositiveFloat,
  NegativeFloat,
  Zero,
  NonZero,
  NonPositive,
  NonNegative,
  NonZeroInteger,
  NonPositiveInteger,
  NonNegativeInteger,
  NonZeroFloat,
  NonPositiveFloat,
  NonNegativeFloat,
  RangeNumber,
  RangeInteger,
  RangeFloat
}
```
