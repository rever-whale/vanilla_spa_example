import { useEventHandler } from './event.js';

export default function JSFramework (rootElement, RootComponent, storeModule) {
  function render () {
    const currentState = storeModule.getStore();
    rootElement.innerHTML = RootComponent(currentState);
  }

  function bindEvent () {
    rootElement.addEventListener('click', (event) => {
      const eventKey = event.target.id;
      const {getEventHandler} = useEventHandler();
      const concreteEventHandler = getEventHandler(eventKey);
    
      if (concreteEventHandler) {
        concreteEventHandler();
        render();
      }
    });
  }

  // init
  bindEvent();
  render();
}
