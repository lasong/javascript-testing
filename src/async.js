function asyncFunction(cb, callbackParam = 'Hallo Welt', timeout = 400) {
  setTimeout(() => {
    cb(callbackParam);
  }, timeout);
}

function asyncWithPromise(bool) {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve('It simply works');
    } else {
      reject('It does not work');
    }
  });
}
