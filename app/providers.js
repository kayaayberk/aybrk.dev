'use client';

import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute='class'
      storageKey='theme'
      defaultTheme='system'
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
