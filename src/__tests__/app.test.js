import crpytoReducer, { getData } from '../redux/crypto/cryptoSlice';

it('getData should return a promise', () => {
  expect(getData()).toEqual(expect.any(Function));
});

it('Expect company reducer to handle loadCompanies', () => {
  expect(crpytoReducer({}, [getData.fulfilled])).not.toBeNull();
});
