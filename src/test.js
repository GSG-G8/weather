
const logic = require('./handle/logic');

const data = ['Dubai', 'Dolores', 'Cairo', 'Gaza'];
test('test filterData function', () => {
  const actual = logic(data, 'd');
  const expected = ['Dubai', 'Dolores'];
  expect(actual).toEqual(expected);
});
