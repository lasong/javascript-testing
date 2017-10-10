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

    asyncFunction(callback, inputValue, 400);
    jasmine.clock().tick(400);

    expect(callback).toHaveBeenCalledWith(inputValue);
  });

  it('should call a callback using spies', function() {
    const  inputValue = 'Foo Bar';
    const callback = jasmine.createSpy('007');

    asyncFunction(callback, inputValue, 400);
    jasmine.clock().tick(400);

    expect(callback).toHaveBeenCalledWith(inputValue);
  });
});

describe('async with Promises', function () {
  it('should resolve with "It simply works', function () {
    const result = asyncWithPromise(true);

    return result.then((value) => {
      expect(value).toEqual('It simply works');
    });
  })

  it('should reject with "It does not work"', function () {
    const result = asyncWithPromise(false);

    return result.catch(error => {
      expect(error).toEqual('It does not work');
    });
  })
});
