'use client'
import React from "react";
import Image from "next/image";
import eu from "../assets/images/EU1.png";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation("hero");

  const gradientBg = "bg-gradient-to-r from-[#e1a64c] to-[#1527cf]";
  const gradientHover = "hover:bg-gradient-to-r hover:from-[#e1a64c] hover:to-[#1527cf]";
  const hoverGlow = "hover:shadow-[0_0_15px_5px_rgba(225,166,76,0.9),0_0_25px_10px_rgba(21,39,207,0.9)] transition-shadow duration-300";

  return (
    <section className="bg-primary-ligth dark:bg-primary-hover text-background p-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
      
      {/* Lado Esquerdo */}
      <div className="max-w-md text-center md:text-left">
        <h1 className="text-4xl font-bold mb-2">{t("hero.name")}</h1>

        {/* Texto com gradiente */}
        <h2 className="text-2xl font-semibold mb-4">
          {t("hero.title")}
        </h2>

        {/* Ícones de Tecnologias (aqui deixei fixo, você pode fazer ícones traduzíveis se quiser) */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
          <svg
            className="w-8 h-8 text-[#0b094e] transition-colors"
            fill="currentColor"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#0b094e" fillRule="nonzero">
              <g transform="scale(5.12,5.12)">
                <path d="M28.1875,0c2.75,6.36328 -9.85937,10.29297 -11.03125,15.59375c-1.07422,4.87109 7.49219,10.53125 7.5,10.53125c-1.30078,-2.01562 -2.25781,-3.67578 -3.5625,-6.8125c-2.20703,-5.30469 13.44141,-10.10547 7.09375,-19.3125zM36.5625,8.8125c0,0 -11.0625,0.71094 -11.625,7.78125c-0.25,3.14844 2.91016,4.80469 3,7.09375c0.07422,1.87109 -1.875,3.4375 -1.875,3.4375c0,0 3.54688,-0.67578 4.65625,-3.53125c1.23047,-3.16797 -2.39844,-5.30859 -2.03125,-7.84375c0.35156,-2.42578 7.875,-6.9375 7.875,-6.9375zM19.1875,25.15625c0,0 -10.125,-0.14453 -10.125,2.71875c0,2.99219 13.25391,3.21484 22.71875,1.375c0,0 2.51563,-1.73047 3.1875,-2.375c-6.20312,1.26563 -20.34375,1.40625 -20.34375,0.3125c0,-1.00781 4.5625,-2.03125 4.5625,-2.03125zM38.65625,25.15625c-0.99219,0.07813 -2.0625,0.46094 -3.03125,1.15625c2.28125,-0.49219 4.21875,0.92188 4.21875,2.53125c0,3.625 -5.25,7.03125 -5.25,7.03125c0,0 8.125,-0.92187 8.125,-6.875c0,-2.70312 -1.87891,-4.01562 -4.0625,-3.84375zM16.75,30.71875c-1.55469,0 -3.875,1.21875 -3.875,2.375c0,2.32422 11.6875,4.11328 20.34375,0.71875l-3,-1.84375c-5.86719,1.87891 -16.67187,1.26563 -13.46875,-1.25zM18.1875,35.9375c-2.12891,0 -3.53125,1.28516 -3.53125,2.25c0,2.98438 12.71484,3.28516 17.75,0.25l-3.1875,-2.03125c-3.76172,1.58984 -13.20312,1.83203 -11.03125,-0.46875zM11.09375,38.625c-3.46875,-0.07031 -5.71875,1.48828 -5.71875,2.78125c0,6.875 35.5,6.55859 35.5,-0.46875c0,-1.16797 -1.34766,-1.73437 -1.84375,-2c2.90234,6.71875 -29.0625,6.18359 -29.0625,2.21875c0,-0.90234 2.35156,-1.76562 4.53125,-1.34375l-1.84375,-1.0625c-0.54297,-0.08203 -1.06641,-0.11328 -1.5625,-0.125zM44.625,43.25c-5.39844,5.11719 -19.07812,6.97266 -32.84375,3.8125c13.76172,5.63281 32.77734,2.47266 32.84375,-3.8125z"/>
              </g>
            </g>
          </svg>
          
          <svg
            className="w-8 h-8 text-[#0b094e]  hover:text-[#E1A64C] transition-colors"
            fill="currentColor"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1">
              <g transform="scale(5.33333,5.33333)">
                <path d="M43.982,23.635c0.069,-4.261 -0.891,-9.328 -2.891,-15.273l-1.568,-4.662l-2.13,4.433c-0.114,0.237 -0.244,0.469 -0.38,0.698c-3.499,-3.004 -8.039,-4.831 -13.013,-4.831c-11.046,0 -20,8.954 -20,20c0,11.046 8.954,20 20,20c11.046,0 20,-8.954 20,-20c0,-0.123 -0.016,-0.242 -0.018,-0.365z" fill="#232a7b" />
                <path d="M39.385,32.558c-3.123,4.302 -8.651,4.533 -13.854,4.442h-6.781h-1.938c4.428,-1.593 7.063,-1.972 9.754,-3.4c5.068,-2.665 10.078,-8.496 11.121,-14.562c-1.93,5.836 -7.779,10.85 -13.109,12.889c-3.652,1.393 -10.248,2.745 -10.248,2.745l-0.267,-0.145c-4.49,-2.259 -4.626,-12.313 3.537,-15.559c3.574,-1.423 6.993,-0.641 10.854,-1.593c4.122,-1.012 8.89,-4.208 10.83,-8.375c2.172,6.667 4.786,17.106 0.101,23.558zM15.668,38.445c-0.282,0.35 -0.713,0.555 -1.163,0.555c-0.823,0 -1.495,-0.677 -1.495,-1.5c0,-0.823 0.677,-1.5 1.495,-1.5c0.341,0 0.677,0.118 0.941,0.336c0.64,0.519 0.74,1.469 0.222,2.109z" fill="#ffffff" />
              </g>
            </g>
          </svg>

          <svg
            className="w-8 h-8 text-[#0b094e]  hover:text-[#E1A64C] transition-colors"
            fill="currentColor"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#0b094e" fillRule="nonzero">
              <g transform="scale(5.33333,5.33333)">
                <path d="M24,9.604c-6.4,0 -10.4,3.199 -12,9.597c2.4,-3.199 5.2,-4.398 8.4,-3.599c1.826,0.456 3.131,1.781 4.576,3.247c2.352,2.387 5.075,5.151 11.024,5.151c6.4,0 10.4,-3.199 12,-9.598c-2.4,3.199 -5.2,4.399 -8.4,3.6c-1.825,-0.456 -3.13,-1.781 -4.575,-3.247c-2.353,-2.388 -5.077,-5.151 -11.025,-5.151zM12,24c-6.4,0 -10.4,3.199 -12,9.598c2.4,-3.199 5.2,-4.399 8.4,-3.599c1.825,0.457 3.13,1.781 4.575,3.246c2.353,2.388 5.077,5.152 11.025,5.152c6.4,0 10.4,-3.199 12,-9.598c-2.4,3.199 -5.2,4.399 -8.4,3.599c-1.826,-0.456 -3.131,-1.781 -4.576,-3.246c-2.352,-2.388 -5.075,-5.152 -11.024,-5.152z" />
              </g>
            </g>
          </svg>

          <svg
            className="w-8 h-8 text-[#0b094e]  hover:text-[#E1A64C] transition-colors"
            fill="currentColor"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#0b094e" fillRule="nonzero">
              <g transform="scale(5.33333,5.33333)">
                <path d="M44.86,9.976l-19.837,35.472c-0.41,0.732 -1.462,0.737 -1.878,0.008l-20.23,-35.477c-0.453,-0.794 0.226,-1.756 1.126,-1.595l19.859,3.55c0.127,0.023 0.256,0.022 0.383,-0.001l19.443,-3.544c0.897,-0.164 1.579,0.791 1.134,1.587z" fill="#232a7b" />
                <path d="M33.574,3.01l-14.555,2.852c-0.239,0.047 -0.416,0.25 -0.431,0.493l-0.895,15.121c-0.021,0.356 0.306,0.633 0.654,0.552l4.052,-0.935c0.379,-0.087 0.722,0.246 0.644,0.628l-1.204,5.895c-0.081,0.397 0.291,0.736 0.679,0.618l2.503,-0.76c0.388,-0.118 0.761,0.222 0.679,0.62l-1.913,9.26c-0.12,0.579 0.651,0.895 0.972,0.398l0.215,-0.332l11.86,-23.669c0.199,-0.396 -0.144,-0.848 -0.579,-0.764l-4.171,0.805c-0.392,0.076 -0.725,-0.289 -0.615,-0.673l2.722,-9.438c0.11,-0.382 -0.224,-0.748 -0.617,-0.671z" fill="#868dd4" />
              </g>
            </g>
          </svg>

          <svg
            className="w-8 h-8 text-[#0b094e]  hover:text-[#E1A64C] transition-colors"
            fill="currentColor"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#0b094e" fillRule="nonzero">
              <g transform="scale(5.12,5.12)">
                <path d="M6.66797,4c-1.46094,0 -2.66797,1.20703 -2.66797,2.66797v36.66406c0,1.46094 1.20703,2.66797 2.66797,2.66797h36.66406c1.46094,0 2.66797,-1.20312 2.66797,-2.66797v-36.66406c0,-1.46094 -1.20312,-2.66797 -2.66797,-2.66797zM6.66797,6h36.66406c0.37109,0 0.66797,0.29688 0.66797,0.66797v36.66406c0,0.37109 -0.29687,0.66797 -0.66797,0.66797h-36.66406c-0.37109,0 -0.66797,-0.29687 -0.66797,-0.66797v-36.66406c0,-0.37109 0.29688,-0.66797 0.66797,-0.66797zM23,23v12.57422c0,1.92969 -0.73047,2.42578 -2,2.42578c-1.32812,0 -2.25,-0.82812 -2.85937,-1.90234l-3.14062,1.90234c0.91016,1.92578 3.14063,4 6.23438,4c3.42188,0 5.76563,-1.82031 5.76563,-5.81641v-13.18359zM35.45313,23c-3.40625,0 -5.58984,2.17969 -5.58984,5.04297c0,3.10547 1.83203,4.57422 4.58594,5.74609l0.95313,0.41016c1.73828,0.76172 2.59766,1.22656 2.59766,2.53516c0,1.08984 -0.82812,1.87891 -2.41016,1.87891c-1.88281,0 -2.77344,-1.27734 -3.58984,-2.61328l-3,2c1.12109,2.21484 3.13281,4 6.67578,4c3.625,0 6.32422,-1.88281 6.32422,-5.31641c0,-3.1875 -1.82812,-4.60547 -5.07422,-5.99609l-0.95312,-0.40625c-1.63672,-0.71094 -2.34766,-1.17187 -2.34766,-2.31641c0,-0.92578 0.71094,-1.63672 1.82813,-1.63672c1.09766,0 1.80078,0.46484 2.45313,1.63672l2.97266,-1.90625c-1.25391,-2.21484 -3,-3.05859 -5.42578,-3.05859z" />
              </g>
            </g>
          </svg>

          <svg
            className="w-8 h-8 text-[#0b094e] hover:text-[#E1A64C] transition-colors"
            fill="currentColor"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#0b094e" fillRule="nonzero">
              <g transform="scale(5.12,5.12)">
                <path d="M5,4c-0.55226,0.00006 -0.99994,0.44774 -1,1v40c0.00006,0.55226 0.44774,0.99994 1,1h40c0.55226,-0.00006 0.99994,-0.44774 1,-1v-40c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM6,6h38v38h-38zM15,23v3.44531h5v15.55469h4v-15.55469h5v-3.44531zM36.69141,23.00977c-3.11462,-0.0124 -6.67383,0.93145 -6.67383,5.31445c0,5.73 7.7207,5.73141 7.7207,8.31641c0,0.245 0.10391,2.02539 -2.62109,2.02539c-2.725,0 -4.99609,-1.71289 -4.99609,-1.71289v4.1582c0,0 11.88086,3.84273 11.88086,-4.82227c-0.001,-5.625 -7.79297,-5.34367 -7.79297,-8.13867c0,-1.083 0.76939,-2.0957 2.90039,-2.0957c2.131,0 4.01758,1.25781 4.01758,1.25781l0.14063,-3.70508c0,0 -2.15369,-0.58801 -4.57617,-0.59766z" />
              </g>
            </g>
          </svg>
        </div>

        <p className="text-base mb-6 ">
          {t("hero.description")}
        </p>

        {/* Botão com gradiente */}
        <a
          href="#Contact"
          className={`inline-block rounded-xl px-6 py-2 font-semibold text-white ${gradientBg} ${hoverGlow} ${gradientHover} transition cursor-pointer`}
        >
          {t("hero.cta")}
        </a>
      </div>

      {/* Lado Direito */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] relative">
          <Image
            src={eu}
            alt={t("hero.photoAlt")}
            fill
            sizes="(max-width: 800px) 350px, 450px"
            style={{ objectFit: "contain" }}
            className="fade-bottom-mask"
            priority
          />
        </div>

         {/* Ícones de redes sociais */}
        <div className="flex gap-4 justify-center">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/amandsfsantos?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="transition-colors duration-300"
          >
            <svg
              className="w-8 h-8 text-[#0e0c5a] hover:text-[#E1A64C]"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8v9.5h-5V17c0-2.4 0-5.5-3.3-5.5-3.3 0-3.8 2.6-3.8 5.3v7.7h-5V8z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Amandasfs"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="transition-colors duration-300"
          >
           <svg
              className="w-8 h-8 text-[#0e0c5a] hover:text-[#E1A64C] transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0.5C5.5 0.5 0 6 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.5-1.9-1.5-1.9-1.3-.9.1-.9.1-.9 1.4.1 2.1 1.4 2.1 1.4 1.2 2.1 3.1 1.5 3.9 1.2.1-.9.5-1.5.9-1.8-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.4.1-2.9 0 0 1-.3 3.4 1.3 1-.3 2.1-.4 3.1-.4s2.1.1 3.1.4c2.3-1.6 3.4-1.3 3.4-1.3.6 1.5.2 2.6.1 2.9.8.9 1.2 2 1.2 3.3 0 4.6-2.8 5.6-5.5 5.9.4.3.9 1.1.9 2.2v3.2c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 6 18.5 0.5 12 0.5z" />
            </svg>

          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/amandadevop?utm_source=qr&igsh=YzhueWp1aXdma3A1"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="transition-colors duration-300"
          >
          <svg
            className="w-8 h-8 text-[#0e0c5a] hover:text-[#E1A64C] transition-colors"
            fill="currentColor"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="currentColor" fillRule="nonzero">
              <g transform="scale(5.12,5.12)">
                <path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"/>
              </g>
            </g>
          </svg>
        </a>
      </div>
      </div>
    </section>
  )
}
