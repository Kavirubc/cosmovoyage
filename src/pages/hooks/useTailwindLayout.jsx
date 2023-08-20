import { useEffect } from 'react';

export default function UseTailwindLayout() {
  useEffect(() => {
    const body = document.querySelector('body');
    body?.classList.add('tailwind-layout');
    return () => {
      body?.classList.remove('tailwind-layout');
    };
  }, []);
}
