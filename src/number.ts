export class Integer extends Number {
  constructor(value: number) {
    super(value);
    if (value % 1 !== 0) {
      throw new Error("Value must be an integer");
    }
  }
}

export class Float extends Number {
  constructor(value: number) {
    super(value);
    if (value % 1 === 0) {
      throw new Error("Value must be a float");
    }
  }
}

export class PositiveNumber extends Number {
  constructor(value: number) {
    super(value);
    if (value < 0) {
      throw new Error("Value must be positive");
    }
  }
}

export class NegativeNumber extends Number {
  constructor(value: number) {
    super(value);
    if (value > 0) {
      throw new Error("Value must be negative");
    }
  }
}

export class OddInteger extends Integer {
  constructor(value: number) {
    super(value);
    if (value % 2 === 0) {
      throw new Error("Value must be odd");
    }
  }
}

export class EvenInteger extends Integer {
  constructor(value: number) {
    super(value);
    if (value % 2 !== 0) {
      throw new Error("Value must be even");
    }
  }
}

export class PositiveInteger extends Integer {
  constructor(value: number) {
    super(value);
    if (value < 0) {
      throw new Error("Value must be positive");
    }
  }
}

export class NegativeInteger extends Integer {
  constructor(value: number) {
    super(value);
    if (value > 0) {
      throw new Error("Value must be negative");
    }
  }
}

export class PositiveOddInteger extends OddInteger {
  constructor(value: number) {
    super(value);
    if (value < 0) {
      throw new Error("Value must be positive");
    }
  }
}

export class NegativeOddInteger extends OddInteger {
  constructor(value: number) {
    super(value);
    if (value > 0) {
      throw new Error("Value must be negative");
    }
  }
}

export class PositiveEvenInteger extends EvenInteger {
  constructor(value: number) {
    super(value);
    if (value < 0) {
      throw new Error("Value must be positive");
    }
  }
}

export class NegativeEvenInteger extends EvenInteger {
  constructor(value: number) {
    super(value);
    if (value > 0) {
      throw new Error("Value must be negative");
    }
  }
}

export class PositiveFloat extends Float {
  constructor(value: number) {
    super(value);
    if (value < 0) {
      throw new Error("Value must be positive");
    }
  }
}

export class NegativeFloat extends Float {
  constructor(value: number) {
    super(value);
    if (value > 0) {
      throw new Error("Value must be negative");
    }
  }
}

export class Zero extends Number {
  constructor(value: number) {
    super(value);
    if (value !== 0) {
      throw new Error("Value must be zero");
    }
  }
}

export class NonZero extends Number {
  constructor(value: number) {
    super(value);
    if (value === 0) {
      throw new Error("Value must be non-zero");
    }
  }
}

export class NonPositive extends Number {
  constructor(value: number) {
    super(value);
    if (value > 0) {
      throw new Error("Value must be non-positive");
    }
  }
}

export class NonNegative extends Number {
  constructor(value: number) {
    super(value);
    if (value < 0) {
      throw new Error("Value must be non-negative");
    }
  }
}

export class NonZeroInteger extends Integer {
  constructor(value: number) {
    super(value);
    if (value === 0) {
      throw new Error("Value must be non-zero");
    }
  }
}

export class NonPositiveInteger extends Integer {
  constructor(value: number) {
    super(value);
    if (value > 0) {
      throw new Error("Value must be non-positive");
    }
  }
}

export class NonNegativeInteger extends Integer {
  constructor(value: number) {
    super(value);
    if (value < 0) {
      throw new Error("Value must be non-negative");
    }
  }
}

export class NonZeroFloat extends Float {
  constructor(value: number) {
    super(value);
    if (value === 0) {
      throw new Error("Value must be non-zero");
    }
  }
}

export class NonPositiveFloat extends Float {
  constructor(value: number) {
    super(value);
    if (value > 0) {
      throw new Error("Value must be non-positive");
    }
  }
}

export class NonNegativeFloat extends Float {
  constructor(value: number) {
    super(value);
    if (value < 0) {
      throw new Error("Value must be non-negative");
    }
  }
}

export class RangeNumber extends Number {
  constructor(value: number, min: number, max: number) {
    super(value);
    if (value < min || value > max) {
      throw new Error(`Value must be between ${min} and ${max}`);
    }
  }
}

export class RangeInteger extends Integer {
  constructor(value: number, min: number, max: number) {
    super(value);
    if (value < min || value > max) {
      throw new Error(`Value must be between ${min} and ${max}`);
    }
  }
}

export class RangeOddInteger extends OddInteger {
  constructor(value: number, min: number, max: number) {
    super(value);
    if (value < min || value > max) {
      throw new Error(`Value must be between ${min} and ${max}`);
    }
  }
}

export class RangeEvenInteger extends EvenInteger {
  constructor(value: number, min: number, max: number) {
    super(value);
    if (value < min || value > max) {
      throw new Error(`Value must be between ${min} and ${max}`);
    }
  }
}

export class RangeFloat extends Float {
  constructor(value: number, min: number, max: number) {
    super(value);
    if (value < min || value > max) {
      throw new Error(`Value must be between ${min} and ${max}`);
    }
  }
}
