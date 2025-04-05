const validateValue = require(".");

/** Для проверки функции необходимо выставлять значения:
 * 1. Корректное значение
 * 2. Меньше/больше конкретного
 * 3. Пограничные значения
 */
describe("validateValue", () => {
  test("Корректное значение", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("Меньше конкретного", () => {
    expect(validateValue(-1)).toBe(false);
  });
  test("Больше конкретного", () => {
    expect(validateValue(101)).toBe(false);
  });
  test("Меньше конкретного", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("Больше конкретного", () => {
    expect(validateValue(100)).toBe(true);
  });
});
