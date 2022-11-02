/* eslint-disable */

export function createMockLocalStorage(storage) {
  let localStorageMock = (function () {
    let store = storage;

    return {
      getItem: function (key) {
        return store[key] ?? null;
      },
      setItem: function (key, value) {
        store[key] = value.toString();
      },
      clear: function () {
        store = {};
      },
    };
  })();

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });
}

export function createMockSessionStorage(storage) {
  let sessionStorageMock = (function () {
    let store = storage;

    return {
      getItem: function (key) {
        return store[key] ?? null;
      },
      setItem: function (key, value) {
        store[key] = value.toString();
      },
      clear: function () {
        store = {};
      },
    };
  })();

  Object.defineProperty(window, 'sessionStorage', {
    value: sessionStorageMock,
  });
}

// sample usage
// createMockLocalStorage({ 'savedID': 'hello_world' });
// createMockSessionStorage({ 'savedID': 'hello_world' });
// in the first it('mocking storage..', function()...)
// ref: https://github.com/facebook/jest/issues/2098