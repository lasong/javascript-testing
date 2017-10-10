describe('FizzBuzz', function() {
  let fizzbuzz;

  beforeEach( () => {
    fizzbuzz = new FizzBuzz();
  });

  it('should be an instance of FizzBuzz', function() {
    expect(fizzbuzz).toEqual(jasmine.any(FizzBuzz));
  });

  it('should return 1 when input is 1', function() {
    expect(fizzbuzz.number(1)).toBe(1);
  });

  it('should return 2 when input is 2', function() {
    expect(fizzbuzz.number(2)).toBe(2);
  });

  it('should return 2 when input is 2', function() {
    expect(fizzbuzz.number(11)).toBe(11);
  });

  it('should return Fizz when input is 3', function() {
    expect(fizzbuzz.number(3)).toBe('Fizz');
  });

  it('should return Fizz when input is 27', function() {
    expect(fizzbuzz.number(27)).toBe('Fizz');
  });

  it('should return Buzz when input is 5', function() {
    expect(fizzbuzz.number(5)).toBe('Buzz');
  });

  it('should return Buzz when input is 20', function() {
    expect(fizzbuzz.number(5)).toBe('Buzz');
  });

  it('should return FizzBuzz when input is 15', function() {
    expect(fizzbuzz.number(15)).toBe('FizzBuzz');
  });

  it('should return FizzBuzz when input is 15', function() {
    expect(fizzbuzz.number(30)).toBe('FizzBuzz');
  });
});
