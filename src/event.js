const eventHandler = {};

function useEventHandler () {  
  function addEventHandler (key, handler) {
    eventHandler[key] = handler;
  }

  function removeEventHandler (key) {
    delete eventHandler[key];
  }

  function getEventHandler (key) {
    return eventHandler[key];
  }

  return {
    getEventHandler,
    addEventHandler,
    removeEventHandler,
  }
}

export {useEventHandler};
