import { useState } from 'react';

export function useSidebar() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggle = () => {
    setIsMinimized((prev) => !prev);
  };

  return { isMinimized, toggle };
}
