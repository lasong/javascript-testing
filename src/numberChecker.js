function checkNumber(value) {
  if(typeof value === 'number') return value;

  throw new Error('Not a number!');
}
