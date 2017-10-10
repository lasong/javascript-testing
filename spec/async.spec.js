describe('async', function() {
  it('should call a callback after 400ms with "Guten Tag"', function(done) {
    const inputValue = 'Guten Tag';
    const timoutValue = 400;
    let callback = function(value) {
      expect(value).toEqual(inputValue);
      done();
    }

    asyncFunction(callback, inputValue, timoutValue);
  });

  it('should call a callback using spies', function(done) {
    const  inputValue = 'Foo Bar';
    const callback = jasmine.createSpy('007');
    callback.and.callFake((y) => {
      expect(y).toEqual(inputValue);
      expect(callback).toHaveBeenCalledWith(inputValue);
      done();
    })

    asyncFunction(callback, inputValue, 400);
  });
});
