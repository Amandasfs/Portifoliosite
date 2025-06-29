'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import formatura from '@/assets/images/formatura.png';
import study from '@/assets/images/study.png';
import dev from '@/assets/images/dev.png';

export default function AboutMe() {
  const { t } = useTranslation('about');

  return (
    <section id="About" className="p-6 flex flex-col items-center">
      <h3 className="text-primary text-2xl mb-8 font-Rowdies font-bold">
        {t('title')}
      </h3>

      <div className="flex gap-6 max-w-5xl w-full justify-center flex-wrap">
        {/* Card 1 */}
        <div className="border border-primary text-primary p-6 rounded-md flex-1 max-w-sm
          flex flex-col items-center text-center transition-all duration-300
          hover:scale-105 hover:text-primary-ligth hover:border-accent hover:bg-accent cursor-pointer"
        >
          <Image
            src={formatura}
            alt="Graduation cap icon"
            className="mb-3"
            width={48}
            height={48}
          />
          <h4 className="font-semibold mb-2">{t('card1Title')}</h4>
          <p>{t('card1Desc')}</p>
        </div>

        {/* Card 2 */}
        <div className="border border-primary text-primary p-6 rounded-md flex-1 max-w-sm
          flex flex-col items-center text-center transition-all duration-300
          hover:scale-105 hover:text-primary-ligth hover:border-accent hover:bg-accent cursor-pointer"
        >
          <Image
            src={study}
            alt="Books and laptop icon"
            className="mb-3"
            width={48}
            height={48}
          />
          <h4 className="font-semibold mb-2">{t('card2Title')}</h4>
          <p>{t('card2Desc')}</p>
        </div>

        {/* Card 3 */}
        <div className="border border-primary text-primary p-6 rounded-md flex-1 max-w-sm
          flex flex-col items-center text-center transition-all duration-300
          hover:scale-105 hover:text-primary-ligth hover:border-accent hover:bg-accent cursor-pointer"
        >
          <Image
            src={dev}
            alt="Developer monitor icon"
            className="mb-3"
            width={48}
            height={48}
          />
          <h4 className="font-semibold mb-2">{t('card3Title')}</h4>
          <p>{t('card3Desc')}</p>
        </div>
      </div>
    </section>
  );
}
