function add(...numbers: number[]): number {
	if (numbers.length === 0) {
		return 0;
	}

	return numbers.reduce((acc, number) => acc + number);

	// Return add(...numbers.slice(0, numbers.length - 1))
	// 		+ numbers[numbers.length - 1];
}

const context = describe;

test('add', () => {
	expect(add(1, 2)).toBe(3);
});

describe('add', () => {
	context('with no arguments', () => {
		it('returns zero', () => {
			expect(add()).toBe(0);
		});
	});

	context('with only one arguments', () => {
		it('returns the same numbers', () => {
			expect(add(2)).toBe(2);
		});
	});

	context('with two arguments', () => {
		it('returns sum of two numbers', () => {
			expect(add(1, 2)).toBe(3);
		});
	});

	context('with ten arguments', () => {
		it('returns sum of three numbers', () => {
			expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(55);
		});
	});
});
