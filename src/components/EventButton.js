import { useEventHandler } from '../event.js';

export default function EventButton (key, name, handler) {
  const {addEventHandler} = useEventHandler();
  addEventHandler(key, handler);

  return `
    <button id="${key}">${name}</button>
  `
}
