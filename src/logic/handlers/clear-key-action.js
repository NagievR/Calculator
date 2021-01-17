export function clearKeyAction(store) {
  const { 
    clearStore, 
    log, 
    result, 
    setHistory 
  } = store;

  return {
    clearKeyHandler() {
      if (log.includes('=')) {
        setHistory(prev => prev.concat([[log.join(' '), result]]));
      }
      clearStore();
    },
    
  }
}