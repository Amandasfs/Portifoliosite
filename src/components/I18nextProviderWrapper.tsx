'use client';
import React from 'react';
import '@/i18n/i18n'; // roda só no client

export default function I18nextProviderWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}