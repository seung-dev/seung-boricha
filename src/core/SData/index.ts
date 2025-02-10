export const intersaction = (a: unknown[], b: unknown[]): unknown[] => {
	return a.filter((_value) => b.includes(_value));
};
