const mapArrToString = require(".");

describe("Валидация функции преобразования массива чисел в массив строк", () => {
  test("Корректное значение", () => {
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("Мешанины", () => {
    expect(mapArrToString([1, 2, 3, null, undefined, "string"])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });
  test("Пустой массив", () => {
    expect(mapArrToString([])).toEqual([]);
  });
  test("Отрицание", () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([]);
  });
});
