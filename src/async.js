function asyncFunction(cb, callbackParam = 'Hallo Welt', timeout = 400) {
  setTimeout(() => {
    cb(callbackParam);
  }, timeout);
}
