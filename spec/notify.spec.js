describe('notify', function() {
  it('should show alert "We are the champions!"', function() {
    const message = "We are the champions!";
    spyOn(window, 'alert');

    notify(message);
    expect(window.alert).toHaveBeenCalledWith(message);
  });
});

describe('notify with date', function() {
  beforeEach(() => jasmine.clock().install());
  afterEach(() => jasmine.clock().uninstall());

  it('should show alert "We are the champions!"', function() {
    const date = new Date(2017, 1, 14);
    jasmine.clock().mockDate(date);
    const message = "Tooor!";
    spyOn(window, 'alert');

    notifyWithDate(message);
    expect(window.alert).toHaveBeenCalledWith('Tue Feb 14 2017 00:00:00 GMT+0100 (CET) ' + message);
  });
});
