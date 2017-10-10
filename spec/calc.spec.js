describe('Test Calc Class', function () {
  describe('addition', function() {
    it('should add 1 and 1 and return 2', function() {
      const calc = new Calc();
      expect(calc.add(1, 1)).toEqual(2);
    });

    it('should add 1.7976931348623157e+308 and 7 and return NaN', function() {
      const calc = new Calc();
      expect(calc.add(Number.MAX_NUMBER, 7)).toEqual(NaN);
    });
  });

  describe('multiplication', function() {
    it('should multiply 3 and 7 and return 21', function() {
      const calc = new Calc();
      expect(calc.multiply(3, 7)).toEqual(21);
    });
  })

  describe ('division', function() {
    it('should divide 10 and 2 and return 5', function() {
      const calc = new Calc();
      expect(calc.divide(10, 2)).toEqual(5);
    });
    it('should divide 10 and 0 and return Infinity', function() {
      const calc = new Calc();
      expect(calc.divide(10, 0)).toEqual(Infinity);
    });
    it('should divide 0 and 0 and return NaN', function() {
      const calc = new Calc();
      expect(calc.divide(0, 0)).toEqual(NaN);
    });
  });
});
