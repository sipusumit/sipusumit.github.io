'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Note: App router uses next/navigation

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home immediately
    router.replace('/');
  }, [router]);

  return null; // Render nothing while redirecting
}