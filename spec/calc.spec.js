describe('Test Calc Class', function () {
  let calc;

  beforeEach(function() {
    calc = new Calc();
  });

  describe('addition', function() {
    it('should add 1 and 1 and return 2', function() {
      expect(calc.add(1, 1)).toBe(2);
    });
    it('should add 1.7976931348623157e+308 and 7 and return NaN', function() {
      expect(calc.add(Number.MAX_NUMBER, 7)).toEqual(NaN);
    });
  });

  describe('multiplication', function() {
    it('should multiply 3 and 7 and return 21', function() {
      expect(calc.multiply(3, 7)).toBe(21);
    });
  })

  describe ('division', function() {
    it('should divide 10 and 2 and return 5', function() {
      expect(calc.divide(10, 2)).toBe(5);
    });
    it('should divide 10 and 0 and return Infinity', function() {
      expect(calc.divide(10, 0)).toEqual(Infinity);
    });
    it('should divide 0 and 0 and return NaN', function() {
      expect(calc.divide(0, 0)).toEqual(NaN);
    });
  });
});
