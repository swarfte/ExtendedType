class Integer extends Number {
  constructor(value: number) {
    super(value);
    if (value % 1 !== 0) {
      throw new Error("Value must be an integer");
    }
  }
}

class Float extends Number {
  constructor(value: number) {
    super(value);
    if (value % 1 === 0) {
      throw new Error("Value must be a float");
    }
  }
}

class PositiveNumber extends Number {
  constructor(value: number) {
    super(value);
    if (value < 0) {
      throw new Error("Value must be positive");
    }
  }
}

class NegativeNumber extends Number {
  constructor(value: number) {
    super(value);
    if (value > 0) {
      throw new Error("Value must be negative");
    }
  }
}

class PositiveInteger extends Integer {
  constructor(value: number) {
    super(value);
    if (value < 0) {
      throw new Error("Value must be positive");
    }
  }
}

class NegativeInteger extends Integer {
  constructor(value: number) {
    super(value);
    if (value > 0) {
      throw new Error("Value must be negative");
    }
  }
}

class PositiveFloat extends Float {
  constructor(value: number) {
    super(value);
    if (value < 0) {
      throw new Error("Value must be positive");
    }
  }
}

class NegativeFloat extends Float {
  constructor(value: number) {
    super(value);
    if (value > 0) {
      throw new Error("Value must be negative");
    }
  }
}

class Zero extends Number {
  constructor(value: number) {
    super(value);
    if (value !== 0) {
      throw new Error("Value must be zero");
    }
  }
}

class NonZero extends Number {
  constructor(value: number) {
    super(value);
    if (value === 0) {
      throw new Error("Value must be non-zero");
    }
  }
}

class NonPositive extends Number {
  constructor(value: number) {
    super(value);
    if (value > 0) {
      throw new Error("Value must be non-positive");
    }
  }
}

class NonNegative extends Number {
  constructor(value: number) {
    super(value);
    if (value < 0) {
      throw new Error("Value must be non-negative");
    }
  }
}

class NonZeroInteger extends Integer {
  constructor(value: number) {
    super(value);
    if (value === 0) {
      throw new Error("Value must be non-zero");
    }
  }
}

class NonPositiveInteger extends Integer {
  constructor(value: number) {
    super(value);
    if (value > 0) {
      throw new Error("Value must be non-positive");
    }
  }
}

class NonNegativeInteger extends Integer {
  constructor(value: number) {
    super(value);
    if (value < 0) {
      throw new Error("Value must be non-negative");
    }
  }
}

class NonZeroFloat extends Float {
  constructor(value: number) {
    super(value);
    if (value === 0) {
      throw new Error("Value must be non-zero");
    }
  }
}

class NonPositiveFloat extends Float {
  constructor(value: number) {
    super(value);
    if (value > 0) {
      throw new Error("Value must be non-positive");
    }
  }
}

class NonNegativeFloat extends Float {
  constructor(value: number) {
    super(value);
    if (value < 0) {
      throw new Error("Value must be non-negative");
    }
  }
}

export {
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
};
