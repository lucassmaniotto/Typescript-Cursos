describe('descrição do teste DESCRIBE', () => {
  it('should return one', () => {
    const number = 1
    expect(number).toBe(1)
  });
});

describe('descrição do outro teste DESCRIBE', () => {
  test("should return Ed's name", () => {
    const name = 'Edward Wong Hau Pepelu Tivrusky IV'
    expect(name).toHaveLength(34)
  });
});
