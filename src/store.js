import { deepCopy } from './utils.js';

let state = {
  name: 'seonho',
  age: 36,
  address: '등촌동 찐찐팰리스'
};

function useStore () {
  function getStore () {
    return deepCopy(state);
  }

  function setStore (value) {
    state = value;
  }

  return {
    getStore,
    setStore,
  }
}

export {useStore};
