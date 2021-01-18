export function clearKeyAction(store) {
  const { 
    clearStore, 
    log, 
    result, 
    setHistory 
  } = store;

  function addCalculatedPartOnly() {
    const equalsIdx = log.lastIndexOf('=');
    const calculatePart = log.slice(0, equalsIdx + 1);
    const res = log[equalsIdx + 1];
    setHistory(prev => prev.concat([[calculatePart.join(' '), res]]));
  }

  return {
    clearKeyHandler() {
      // add the log to history if needed
      const thereIsUncalculatedPart = log[log.length - 1] !== '=';
      if (log.includes('=') && thereIsUncalculatedPart) {
        addCalculatedPartOnly();
      } else if (log.includes('=')) {
        setHistory(prev => prev.concat([[log.join(' '), result]]));
      }

      clearStore();
    },
    
  }
}