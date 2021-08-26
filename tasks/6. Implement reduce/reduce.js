export function Reduce(array, reducer, initialValue) {
	// TODO: write your code here
	if (array.length === 0) return initialValue;
	const firstValue = array.shift();
	if (initialValue === undefined) return reduce(array, reducer, firstValue)
	initialValue = reducer(initialValue, firstValue)
	return reduce(array, reducer, initialValue);
}
