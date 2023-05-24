const { replaceNumberIfHasMultiple } = require('../numbers.service');

describe('Numbers service tests', () => {
  it('replaceNumberIfHasMultiple should be a function', () => {
    expect(typeof replaceNumberIfHasMultiple).toEqual('function');
  });

  it('should return G if number is multiple of 3 only', () => {
    expect(replaceNumberIfHasMultiple(3)).toEqual('G');
    expect(replaceNumberIfHasMultiple(6)).toEqual('G');
    expect(replaceNumberIfHasMultiple(33)).toEqual('G');
    expect(replaceNumberIfHasMultiple(111)).toEqual('G');
  });

  it('should return N if number is multiple of 5 only', () => {
    expect(replaceNumberIfHasMultiple(5)).toEqual('N');
    expect(replaceNumberIfHasMultiple(10)).toEqual('N');
    expect(replaceNumberIfHasMultiple(100)).toEqual('N');
  });

  it('should return GN if number is multiple both 3 and 5', () => {
    expect(replaceNumberIfHasMultiple(15)).toEqual('GN');
    expect(replaceNumberIfHasMultiple(30)).toEqual('GN');
    expect(replaceNumberIfHasMultiple(90)).toEqual('GN');
  });

  it('should return input number if number is not multiple either 3 or 5', () => {
    expect(replaceNumberIfHasMultiple(16)).toEqual(16);
    expect(replaceNumberIfHasMultiple(4)).toEqual(4);
    expect(replaceNumberIfHasMultiple(22)).toEqual(22);
  });
});
