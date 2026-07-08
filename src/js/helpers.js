function isInfinite(x) {
    return (x >= 1.797e308 || [Infinity, NaN, undefined].includes(x))
}