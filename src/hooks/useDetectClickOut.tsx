import { useState, useRef, useEffect } from 'react';

const useDetectClickOut = <T extends HTMLElement>() => {
  const [open, setOpen] = useState<boolean>(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null); // Trigger element must be a button
  const nodeRef = useRef<T | null>(null);

  useEffect(() => {
    const handleDetectClickOut = (event: MouseEvent) => {
      if (triggerRef.current && triggerRef.current.contains(event.target as Node)) {
        setOpen(true);
      }
      if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleDetectClickOut);
    return () => document.removeEventListener('mousedown', handleDetectClickOut);
  });

  return { open, setOpen, triggerRef, nodeRef };
};

export default useDetectClickOut;
