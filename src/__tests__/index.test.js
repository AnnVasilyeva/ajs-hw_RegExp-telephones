import getTelephone from '../index';

test('проверка 8, скобки, тире', () => {
  const received = getTelephone('8 (927) 000-00-00');
  const expected = '+79270000000';
  expect(received).toBe(expected);
});

test('проверка +7, пробелы', () => {
  const received = getTelephone('+7 960 000 00 00');
  const expected = '+79600000000';
  expect(received).toBe(expected);
});

test('проверка номер не РФ', () => {
  const received = getTelephone('+86 000 000 0000');
  const expected = '+860000000000';
  expect(received).toBe(expected);
});

test('проверка номер не РФ', () => {
  const received = getTelephone('+380(67)777-7-777');
  const expected = '+380677777777';
  expect(received).toBe(expected);
});
