export function createMockLocalStorage(storage) {
  const localStorageMock = (function () {
    let store = storage;

    return {
      getItem(key) {
        return store[key] ?? null;
      },
      setItem(key, value) {
        store[key] = value.toString();
      },
      clear() {
        store = {};
      },
    };
  })();

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });
}

export function createMockSessionStorage(storage) {
  const sessionStorageMock = (function () {
    let store = storage;

    return {
      getItem(key) {
        return store[key] ?? null;
      },
      setItem(key, value) {
        store[key] = value.toString();
      },
      clear() {
        store = {};
      },
    };
  })();

  Object.defineProperty(window, 'sessionStorage', {
    value: sessionStorageMock,
  });
}
