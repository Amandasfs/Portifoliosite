"use client";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Languages, Moon, Sun } from "lucide-react";
import Image from "next/image";
import logo from "../assets/images/logo.png";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function Header() {
  const { t, i18n } = useTranslation("nav");


  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleProjectsMenu = () => setIsProjectsOpen((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleMode = () => setIsDarkMode((prev) => !prev);

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const productsList = [
    {
      title: t("onePageWebsites"),
      description: "",
    },
    {
      title: t("websiteMaintenance"),
      description: "",
    },
    {
      title: t("weddingWebsites"),
      description: "",
    },
    {
      title: t("ecommerceSolutions"),
      description: "",
    },
  ];

  return (
    <header className="bg-primary-ligth dark:bg-primary-hover text-background p-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Image
            className="w-16 h-16 md:w-20 md:h-20"
            src={logo}
            alt="AF LOGO"
            width={80}
            height={80}
          />
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-accent cursor-pointer"
            aria-label="Open main menu"
          >
               <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12 items-center">
          <div className="relative">
            <button
              type="button"
              onClick={toggleProjectsMenu}
              className="flex items-center gap-x-1 text-sm font-semibold text-accent cursor-pointer"
              aria-expanded={isProjectsOpen}
            >
              {t("products")}
               <svg
                className="w-5 h-5 text-accent"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isProjectsOpen && (
            <div className="absolute top-full left-0 z-50 mt-3 w-64 overflow-hidden rounded-3xl bg-primary-ligth dark:bg-primary-hover text-background shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {[
                  {
                    title: t("websites.title"),
                    description: t("websites.description"),
                    icon: (
                      <svg
                          className="h-6 w-6 text-background-light group-hover:text-background-light"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                        </svg>
                    ),
                  },
                  {
                    title: t("websiteMaintenance.title"),
                    description: t("websiteMaintenance.description"),
                    icon: (
                      <svg
                          className="h-6 w-6 text-background-light group-hover:text-background-light"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                        </svg>
                    ),
                  },
                  {
                    title: t("weddingWebsites.title"),
                    description: t("weddingWebsites.description"),
                    icon: (
                      <svg
                          className="h-6 w-6 text-background-light group-hover:text-background-light"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    ),
                  },
                  {
                    title: t("ecommerceSolutions.title"),
                    description: t("ecommerceSolutions.description"),
                    icon: (
                          <svg
                          className="h-6 w-6 text-background-light group-hover:text-background-light"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 7h14M10 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                    ),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-x-4 rounded-lg p-4 hover:bg-secondary cursor-pointer"
                  >
                    <div className="flex-none rounded-lg bg-secondary p-2 group-hover:bg-primary">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-text">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          </div>

          <a
            href="#About"
            className="text-sm font-semibold text-accent cursor-pointer"
          >
            {t("aboutMe")}
          </a>
          <a href="#Contact" className="text-sm font-semibold text-accent cursor-pointer">
            {t("contact")}
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-background transition-colors duration-300"
          >
            <Languages className="w-5 h-5" />
            {t("translate")}
          </button>

          <button
            onClick={toggleMode}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 ${
              isDarkMode ? "bg-primary text-background" : "bg-accent text-background"
            }`}
          >
            {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            {isDarkMode ? t("darkMode") : t("lightMode")}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-primary text-background p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 overflow-y-auto">
          <div className="flex items-center justify-between">
            <Image className="h-10 w-auto" src={logo} alt="AF LOGO" width={40} height={40} />
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="-m-2.5 rounded-md p-2.5 text-background"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={toggleProjectsMenu}
              className="flex w-full items-center justify-between rounded-lg py-2 text-base font-semibold text-background hover:bg-secondary"
            >
              {t("projects")}
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isProjectsOpen && (
              <div className="mt-2 space-y-2 pl-4">
                {productsList.map((item, idx) => (
                  <a
                    key={idx}
                    href="#Services"
                    className="block rounded-lg py-2 text-sm font-semibold text-background hover:bg-secondary"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}

            <a
              href="#About"
              className="block rounded-lg mt-4 py-2 text-base font-semibold text-background hover:bg-secondary"
            >
              {t("aboutMe")}
            </a>
            <a
              href="#Contact"
              className="block rounded-lg mt-2 py-2 text-base font-semibold text-background hover:bg-secondary"
            >
              {t("contact")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
