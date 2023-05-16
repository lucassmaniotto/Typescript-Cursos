describe('Primitive values', () => {
  it('should test jest assertions with primitive values', () => {
    const number = 42;

    expect(number).toBe(42);
    expect(number).toEqual(42);
    expect(number).not.toBe(21);
    expect(number).toBeCloseTo(42.0001);
    expect(number).toHaveProperty('toString');

  });

  it('should split tests', () => {
    const number = 42;

    expect(number).toBeGreaterThan(21);
    expect(number).toBeGreaterThanOrEqual(21);
    expect(number).toBeLessThan(84);
    expect(number).toBeLessThanOrEqual(84);
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Spike Spiegel', age: 27 };
    const anotherPerson = { name: 'Faye Valentine', age: 77 };

    expect(person).toEqual({ name: 'Spike Spiegel', age: 27 });
    expect(person).not.toEqual(anotherPerson);

    expect(person).toHaveProperty('name');
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 27);
    expect(person).not.toHaveProperty('address');

    expect(anotherPerson.name).toBe('Faye Valentine');
  });
});
