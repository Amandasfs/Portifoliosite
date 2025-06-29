'use client';

import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

export default function Footer() {
  const { t } = useTranslation('footer');
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (!year) return null;

  return (
    <footer className="text-background px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-center md:text-left">
        <p className="font-medium">
          {t('copyright', { year })}
        </p>

        <p className="text-accent">
          {t('builtWith')}{' '}
          <span className="bg-gradient-to-r from-[#e1a64c] to-[#1527cf] bg-clip-text text-transparent font-semibold">
            {t('name')}
          </span>
        </p>
      </div>
    </footer>
  );
}
