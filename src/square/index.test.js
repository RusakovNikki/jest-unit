const square = require(".");

describe("Проверка функции возведения в квадрат", () => {
  test("Корректное значение 1", () => {
    expect(square(2)).toBe(4);
    expect(square(2)).toBeLessThan(5);
    expect(square(2)).toBeGreaterThan(3);
    expect(square(2)).not.toBeUndefined();
  });
  test("Корректное значение 2", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });
  test("Корректное значение 3", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  /**
   * После каждого теста накапливаются "моки"
   * Их нужно очищать, чтобы во второй раз корректно отработала
   * функция toBeCalledTimes
   */
  afterEach(() => {
    jest.clearAllMocks();
  });
});
