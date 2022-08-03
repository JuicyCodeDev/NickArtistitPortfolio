import { useState, useLayoutEffect } from 'react';

export default function useWindowHeight() {
  const [height, setSize] = useState(-1000);
  useLayoutEffect(() => {
    function updateHeight() {
      setSize(window.innerHeight);
    }
    window.addEventListener('resize', updateHeight);
    updateHeight();
    return () => window.removeEventListener('resize', updateHeight);
  }, []);
  return height;
}
