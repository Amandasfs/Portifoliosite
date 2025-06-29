import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import navEN from '@/i18n/locales/en/nav.json';
import navPT from '@/i18n/locales/pt/nav.json';

import heroEN from '@/i18n/locales/en/hero.json';
import heroPT from '@/i18n/locales/pt/hero.json';

import aboutEN from '@/i18n/locales/en/about.json';
import aboutPT from '@/i18n/locales/pt/about.json';

import productsEN from '@/i18n/locales/en/products.json';
import productsPT from '@/i18n/locales/pt/products.json';

import footerEN from '@/i18n/locales/en/footer.json';
import footerPT from '@/i18n/locales/pt/footer.json';

import contactEN from '@/i18n/locales/en/contact.json';
import contactPT from '@/i18n/locales/pt/contact.json';

const resources = {
  en: {
    nav: navEN,
    hero: heroEN,
     about: aboutEN,
     products: productsEN,
     footer: footerEN,
     contact: contactEN,
  },
  pt: {
    nav: navPT,
    hero: heroPT,
     about: aboutPT,
     products: productsPT,
     footer: footerPT,
     contact: contactPT,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt", // ✅ Define explicitamente o idioma inicial
    fallbackLng: "pt",
    interpolation: { escapeValue: false },
    react: {
      useSuspense: false, // ✅ evita erros com SSR
    },
  });

export default i18n;
