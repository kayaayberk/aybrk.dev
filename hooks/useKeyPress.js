import { useEffect } from 'react';

export function useKeyPress(callback, targetKey) {
  useEffect(() => {
    const handler = (event) => {
      if (targetKey.includes(event.key)) {
        callback(event);
      }
    };

    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [callback, targetKey]);
}
