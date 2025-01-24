"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeFloat = exports.RangeEvenInteger = exports.RangeOddInteger = exports.RangeInteger = exports.RangeNumber = exports.NonNegativeFloat = exports.NonPositiveFloat = exports.NonZeroFloat = exports.NonNegativeInteger = exports.NonPositiveInteger = exports.NonZeroInteger = exports.NonNegative = exports.NonPositive = exports.NonZero = exports.Zero = exports.NegativeFloat = exports.PositiveFloat = exports.NegativeEvenInteger = exports.PositiveEvenInteger = exports.NegativeOddInteger = exports.PositiveOddInteger = exports.NegativeInteger = exports.PositiveInteger = exports.EvenInteger = exports.OddInteger = exports.NegativeNumber = exports.PositiveNumber = exports.Float = exports.Integer = void 0;
class Integer extends Number {
    constructor(value) {
        super(value);
        if (value % 1 !== 0) {
            throw new Error("Value must be an integer");
        }
    }
}
exports.Integer = Integer;
class Float extends Number {
    constructor(value) {
        super(value);
        if (value % 1 === 0) {
            throw new Error("Value must be a float");
        }
    }
}
exports.Float = Float;
class PositiveNumber extends Number {
    constructor(value) {
        super(value);
        if (value < 0) {
            throw new Error("Value must be positive");
        }
    }
}
exports.PositiveNumber = PositiveNumber;
class NegativeNumber extends Number {
    constructor(value) {
        super(value);
        if (value > 0) {
            throw new Error("Value must be negative");
        }
    }
}
exports.NegativeNumber = NegativeNumber;
class OddInteger extends Integer {
    constructor(value) {
        super(value);
        if (value % 2 === 0) {
            throw new Error("Value must be odd");
        }
    }
}
exports.OddInteger = OddInteger;
class EvenInteger extends Integer {
    constructor(value) {
        super(value);
        if (value % 2 !== 0) {
            throw new Error("Value must be even");
        }
    }
}
exports.EvenInteger = EvenInteger;
class PositiveInteger extends Integer {
    constructor(value) {
        super(value);
        if (value < 0) {
            throw new Error("Value must be positive");
        }
    }
}
exports.PositiveInteger = PositiveInteger;
class NegativeInteger extends Integer {
    constructor(value) {
        super(value);
        if (value > 0) {
            throw new Error("Value must be negative");
        }
    }
}
exports.NegativeInteger = NegativeInteger;
class PositiveOddInteger extends OddInteger {
    constructor(value) {
        super(value);
        if (value < 0) {
            throw new Error("Value must be positive");
        }
    }
}
exports.PositiveOddInteger = PositiveOddInteger;
class NegativeOddInteger extends OddInteger {
    constructor(value) {
        super(value);
        if (value > 0) {
            throw new Error("Value must be negative");
        }
    }
}
exports.NegativeOddInteger = NegativeOddInteger;
class PositiveEvenInteger extends EvenInteger {
    constructor(value) {
        super(value);
        if (value < 0) {
            throw new Error("Value must be positive");
        }
    }
}
exports.PositiveEvenInteger = PositiveEvenInteger;
class NegativeEvenInteger extends EvenInteger {
    constructor(value) {
        super(value);
        if (value > 0) {
            throw new Error("Value must be negative");
        }
    }
}
exports.NegativeEvenInteger = NegativeEvenInteger;
class PositiveFloat extends Float {
    constructor(value) {
        super(value);
        if (value < 0) {
            throw new Error("Value must be positive");
        }
    }
}
exports.PositiveFloat = PositiveFloat;
class NegativeFloat extends Float {
    constructor(value) {
        super(value);
        if (value > 0) {
            throw new Error("Value must be negative");
        }
    }
}
exports.NegativeFloat = NegativeFloat;
class Zero extends Number {
    constructor(value) {
        super(value);
        if (value !== 0) {
            throw new Error("Value must be zero");
        }
    }
}
exports.Zero = Zero;
class NonZero extends Number {
    constructor(value) {
        super(value);
        if (value === 0) {
            throw new Error("Value must be non-zero");
        }
    }
}
exports.NonZero = NonZero;
class NonPositive extends Number {
    constructor(value) {
        super(value);
        if (value > 0) {
            throw new Error("Value must be non-positive");
        }
    }
}
exports.NonPositive = NonPositive;
class NonNegative extends Number {
    constructor(value) {
        super(value);
        if (value < 0) {
            throw new Error("Value must be non-negative");
        }
    }
}
exports.NonNegative = NonNegative;
class NonZeroInteger extends Integer {
    constructor(value) {
        super(value);
        if (value === 0) {
            throw new Error("Value must be non-zero");
        }
    }
}
exports.NonZeroInteger = NonZeroInteger;
class NonPositiveInteger extends Integer {
    constructor(value) {
        super(value);
        if (value > 0) {
            throw new Error("Value must be non-positive");
        }
    }
}
exports.NonPositiveInteger = NonPositiveInteger;
class NonNegativeInteger extends Integer {
    constructor(value) {
        super(value);
        if (value < 0) {
            throw new Error("Value must be non-negative");
        }
    }
}
exports.NonNegativeInteger = NonNegativeInteger;
class NonZeroFloat extends Float {
    constructor(value) {
        super(value);
        if (value === 0) {
            throw new Error("Value must be non-zero");
        }
    }
}
exports.NonZeroFloat = NonZeroFloat;
class NonPositiveFloat extends Float {
    constructor(value) {
        super(value);
        if (value > 0) {
            throw new Error("Value must be non-positive");
        }
    }
}
exports.NonPositiveFloat = NonPositiveFloat;
class NonNegativeFloat extends Float {
    constructor(value) {
        super(value);
        if (value < 0) {
            throw new Error("Value must be non-negative");
        }
    }
}
exports.NonNegativeFloat = NonNegativeFloat;
class RangeNumber extends Number {
    constructor(value, min, max) {
        super(value);
        if (value < min || value > max) {
            throw new Error(`Value must be between ${min} and ${max}`);
        }
    }
}
exports.RangeNumber = RangeNumber;
class RangeInteger extends Integer {
    constructor(value, min, max) {
        super(value);
        if (value < min || value > max) {
            throw new Error(`Value must be between ${min} and ${max}`);
        }
    }
}
exports.RangeInteger = RangeInteger;
class RangeOddInteger extends OddInteger {
    constructor(value, min, max) {
        super(value);
        if (value < min || value > max) {
            throw new Error(`Value must be between ${min} and ${max}`);
        }
    }
}
exports.RangeOddInteger = RangeOddInteger;
class RangeEvenInteger extends EvenInteger {
    constructor(value, min, max) {
        super(value);
        if (value < min || value > max) {
            throw new Error(`Value must be between ${min} and ${max}`);
        }
    }
}
exports.RangeEvenInteger = RangeEvenInteger;
class RangeFloat extends Float {
    constructor(value, min, max) {
        super(value);
        if (value < min || value > max) {
            throw new Error(`Value must be between ${min} and ${max}`);
        }
    }
}
exports.RangeFloat = RangeFloat;
//# sourceMappingURL=number.js.map