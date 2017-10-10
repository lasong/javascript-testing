describe('exception', function() {
  it('should return 3 when input is 3', function() {
    expect(checkNumber(3)).toBe(3);
  });

  it('should not throw exception when input is 2', function() {
    let callback = function() {
      checkNumber(2)
    };

    expect(callback).not.toThrow();
  });

  it('should throw exception when input is "foo"', function() {
    let callback = function() {
      checkNumber('foo')
    };

    expect(callback).toThrowError('Not a number!');
  });
});
