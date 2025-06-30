'use client';

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import ecommerceImg from '../assets/images/ec.png';
import weddingImg from '../assets/images/wp.png';
import landingImg from '../assets/images/lp.png';
import maintenanceImg from '../assets/images/mn.jpg';

const gradientBg = "bg-gradient-to-r from-[#e1a64c] to-[#1527cf]";
const gradientHover = "hover:bg-gradient-to-r hover:from-[#e1a64c] hover:to-[#1527cf]";
const hoverGlow = "hover:shadow-[0_0_15px_5px_rgba(225,166,76,0.9),0_0_25px_10px_rgba(21,39,207,0.9)] transition-shadow duration-300";

export default function Product() {
  const { t } = useTranslation('products');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    {
      url: "https://mr-omega.vercel.app",
      image: landingImg
    },
    {
      url: "maintenance",
      image: maintenanceImg
    },
    {
      url: "https://amandasfs.github.io/WeddingPage01/",
      image: weddingImg
    },
    {
      url: "https://amandasfs.github.io/Ecommerce/",
      image: ecommerceImg
    }
  ];

  return (
    <section id="Services" className="p-6 bg-background">
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#e1a64c] to-[#1527cf] bg-clip-text text-transparent">
        {t('title')}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={clsx(
              "rounded-lg overflow-hidden flex flex-col shadow-xl transition-transform duration-300 hover:scale-[1.02]",
              "border text-primary border-primary",
              " dark:border-accent dark:text-accent"
            )}
          >
            <div className="p-3">
              <Image
                src={product.image}
                alt={t(`products.${i}.title`)}
                width={800}
                height={500}
                className="w-full h-48 object-cover rounded-md border border-primary dark:border-accent"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-bold mb-2">{t(`products.${i}.title`)}</h3>
              <p className="text-sm mb-4">{t(`products.${i}.description`)}</p>

              {product.url === "maintenance" ? (
                <a
                  href="#Contact"
                  className={clsx(
                    "text-center rounded font-semibold px-4 py-2",
                    gradientBg,
                    "text-white",
                    hoverGlow,
                    gradientHover
                  )}
                >
                  {t(`products.${i}.button`)}
                </a>
              ) : (
                <button
                  onClick={() => setSelectedProduct(product.url)}
                  className={clsx(
                    "text-center rounded font-semibold px-4 py-2",
                    gradientBg,
                    "text-white",
                    hoverGlow,
                    gradientHover
                  )}
                >
                  {t(`products.${i}.button`)}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProduct && selectedProduct !== "maintenance" && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-background w-full max-w-4xl max-h-[80vh] p-4 relative overflow-y-auto rounded shadow-xl flex flex-col">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-black dark:text-white text-lg hover:scale-110 transition-transform"
            >
              {t("close")}
            </button>

            <iframe
              src={selectedProduct}
              className="w-full h-[60vh] border mb-4 rounded"
              title="Demo Preview"
            />

            <a
              href="#Contact"
              onClick={() => setSelectedProduct(null)}
              className={clsx(
                "self-center mt-auto text-center rounded font-semibold px-6 py-3",
                gradientBg,
                hoverGlow,
                "text-white cursor-pointer select-none transition-colors"
              )}
            >
              {t("contact")}
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
