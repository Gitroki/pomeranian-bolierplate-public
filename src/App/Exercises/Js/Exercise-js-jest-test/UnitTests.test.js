import { sum } from '../TestUtils/TestUtils.js'
import { fetchData } from '../TestUtils/TestUtils.js'
import { fetchError } from '../TestUtils/TestUtils.js'

describe('Basic unit test for JS functions', () => {
  //assertion (asercja)
test('should return proper number', () => {
  expect(sum(1,3)).toBe(4)
});

test('should return null if the parans are undefinded', () => {
  expect(sum()).toBe(null)
});
})

describe('Basic unit test for JS Promises', () => {
  //assertion (asercja)
test('should return proper Promise result', () => {
  return fetchData().then(data => {
    expect(data).toStrictEqual({"data":'Data from the server'}, [{data:'Data from the server version 2'}]);
  })
});
})

describe('Basic unit test for JS Promises', () => {
  //assertion (asercja)
test('should return proper error message durning fetching', () => {
  return fetchError().catch(data => {
    expect(data).toStrictEqual({"data":'Error'});
  })
});
})