import crpytoReducer, { getData } from '../redux/crypto/cryptoSlice';

describe('getData should return a promise', () => {
  it("should handle a country's data being added to the store", () => {
    expect(getData()).toEqual(expect.any(Function));
  });

  it('Expect crypto reducer to handle getData', () => {
    expect(crpytoReducer({}, [getData.fulfilled])).not.toBeNull();
  });
});
