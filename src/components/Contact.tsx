'use client';

import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

const gradientBg = 'bg-gradient-to-r from-[#e1a64c] to-[#1527cf]';
const hoverGlow = 'hover:shadow-[0_0_15px_5px_rgba(225,166,76,0.9),0_0_25px_10px_rgba(21,39,207,0.9)] transition-shadow duration-300';
const labelPurple = 'text-purple-600';

function FloatingLabelInput({ label, id, type = 'text', placeholder, value, onChange }) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx(
          'peer w-full bg-transparent text-primary dark:text-accent border-b border-primary dark:border-accent rounded-none p-4 pt-6',
          'focus:outline-none focus:ring-0 focus:border-b-2 focus:border-primary dark:focus:border-accent placeholder-transparent transition-colors'
        )}
      />
      <label
        htmlFor={id}
        className={clsx(
          'absolute left-3 px-1 bg-background transition-all duration-200',
          'peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary dark:peer-placeholder-shown:text-accent',
          'top-2 text-xs',
          labelPurple
        )}
      >
        {label}
      </label>
    </div>
  );
}

function FloatingLabelTextarea({ label, id, placeholder, value, onChange }) {
  return (
    <div className="relative w-full">
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        className={clsx(
          'peer w-full bg-transparent text-primary dark:text-accent border-b border-primary dark:border-accent rounded-none p-4 pt-6 resize-none',
          'focus:outline-none focus:ring-0 focus:border-b-2 focus:border-primary dark:focus:border-accent placeholder-transparent transition-colors'
        )}
      />
      <label
        htmlFor={id}
        className={clsx(
          'absolute left-3 px-1 bg-background transition-all duration-200',
          'peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary dark:peer-placeholder-shown:text-accent',
          'top-2 text-xs',
          labelPurple
        )}
      >
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  const { t } = useTranslation('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    product: '',
    description: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert(t('success'));
      setFormData({ name: '', email: '', location: '', product: '', description: '' });
    } else {
      alert(t('error'));
    }
  };

  return (
    <section id="Contact" className="relative bg-background p-6 md:p-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full lg:w-4/5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-Rowdies font-bold text-center bg-gradient-to-r from-[#e1a64c] to-[#1527cf] bg-clip-text text-transparent">
            {t('title')}
          </h3>
          <p className="text-primary dark:text-accent text-center mb-4 text-sm font-medium">
            {t('subtitle')}
          </p>

          <FloatingLabelInput
            id="name"
            label={t('name')}
            placeholder={t('placeholderName')}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <FloatingLabelInput
            id="email"
            label={t('email')}
            type="email"
            placeholder={t('placeholderEmail')}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <FloatingLabelInput
            id="location"
            label={t('location')}
            placeholder={t('placeholderLocation')}
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />

         <div className="relative w-full">
          <select
            id="product"
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            className="peer w-full appearance-none bg-transparent text-primary dark:text-accent border-0 border-b border-primary dark:border-accent p-4 pt-6 focus:outline-none focus:border-b-2 transition-colors"
          >
            <option value="" disabled hidden></option>
            <option value="one-page">{t('options.one-page')}</option>
            <option value="maintenance">{t('options.maintenance')}</option>
            <option value="wedding">{t('options.wedding')}</option>
            <option value="ecommerce">{t('options.ecommerce')}</option>
          </select>
          <label
            htmlFor="product"
            className="absolute left-3 px-1 top-2 text-xs text-primary dark:text-accent bg-background transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base"
          >
            {t('product')}
          </label>
        </div>


          <FloatingLabelTextarea
            id="description"
            label={t('description')}
            placeholder={t('placeholderDescription')}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={clsx(
              'text-white dark:text-accent py-3 px-6 rounded-lg font-semibold transition-colors',
              gradientBg,
              hoverGlow,
              'hover:bg-transparent'
            )}
          >
            {t('buttonSend')}
          </motion.button>
        </motion.form>

        {/* Divider + Contacts */}
        <div className="hidden lg:flex items-center">
          <motion.div
            className="w-1 h-96 bg-gradient-to-b from-[#e1a64c] to-[#1527cf] rounded"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.6 }}
            style={{ transformOrigin: 'top' }}
          />
        </div>

        <motion.div
          className="grid grid-cols-3 lg:grid-cols-1 gap-6 text-center w-full lg:w-1/5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-6 rounded-lg flex flex-col items-center gap-3">
            <MessageCircle className="text-primary dark:text-accent w-8 h-8" />
            <h4 className="font-bold text-lg text-primary dark:text-accent">{t('whatsapp')}</h4>
            <a
              href="https://wa.me/5511912345678"
              target="_blank"
              className={clsx(
                'border border-primary dark:border-accent text-primary dark:text-accent px-4 py-2 rounded transition-colors',
                'hover:bg-gradient-to-r hover:from-[#e1a64c] hover:to-[#1527cf] hover:text-white',
                hoverGlow
              )}
            >
              {t('chatNow')}
            </a>
          </div>

          <div className="p-6 rounded-lg flex flex-col items-center gap-3">
            <Mail className="text-primary dark:text-accent w-8 h-8" />
            <h4 className="font-bold text-lg text-primary dark:text-accent">{t('emailTitle')}</h4>
            <a
              href="mailto:contactafdevop@gmail.com"
              className={clsx(
                'border border-primary dark:border-accent text-primary dark:text-accent px-4 py-2 rounded transition-colors',
                'hover:bg-gradient-to-r hover:from-[#e1a64c] hover:to-[#1527cf] hover:text-white',
                hoverGlow
              )}
            >
              {t('sendEmail')}
            </a>
          </div>

          <div className="p-6 rounded-lg flex flex-col items-center gap-3">
            <MapPin className="text-primary dark:text-accent w-8 h-8" />
            <h4 className="font-bold text-lg text-primary dark:text-accent">{t('locationTitle')}</h4>
            <span className="text-sm text-primary dark:text-accent">{t('locationValue')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
