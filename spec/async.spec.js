describe('async', function() {
  beforeEach(() => jasmine.clock().install());
  afterEach(() => jasmine.clock().uninstall());

  it('should call a callback after 400ms with "Guten Tag"', function() {
    const inputValue = 'Guten Tag';
    const timoutValue = 400;
    let callback = function(value) {
      expect(value).toEqual(inputValue);
    }
    jasmine.clock().tick(timoutValue);

    asyncFunction(callback, inputValue, timoutValue);
  });

  it('should call a callback using spies', function() {
    const  inputValue = 'Foo Bar';
    const callback = jasmine.createSpy('007');
    callback.and.callFake((y) => {
      expect(y).toEqual(inputValue);
      expect(callback).toHaveBeenCalledWith(inputValue);
    })
    jasmine.clock().tick(400);

    asyncFunction(callback, inputValue, 400);
  });
});
