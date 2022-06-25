import crpytoReducer, { getData } from '../redux/crypto/cryptoSlice';

test('getData should return a promise', () => {
  expect(getData()).toEqual(expect.any(Function));
});

test('Expect crypto reducer to handle getData', () => {
  expect(crpytoReducer({}, [getData.fulfilled])).not.toBeNull();
});
