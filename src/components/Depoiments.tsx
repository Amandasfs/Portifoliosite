'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Camila Duarte",
    role: "Bride",
    text: "The wedding website was everything I dreamed of! It made organizing guests so much easier, and the PIX gift system was a huge success with our family.",
  },
  {
    name: "Lucas Menezes",
    role: "Entrepreneur",
    text: "The business website gave my brand a professional online presence. It was fast, responsive, and matched my identity perfectly.",
  },
  {
    name: "Fernanda Lima",
    role: "Store Owner",
    text: "I loved the ecommerce layout! It looks clean, loads fast, and really highlights my products. My customers are loving the new design.",
  },
  {
    name: "Roberto Alves",
    role: "Client",
    text: "Quick and efficient maintenance service. They fixed issues I didn’t even notice yet, and now my site runs smoother than ever.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="p-6 bg-background text-primary">
      <h2 className="text-3xl font-bold mb-10 text-center">What Our Clients Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-primary"
          >
            <p className="text-accent italic mb-4">“{t.text}”</p>
            <div className="font-semibold text-lg">{t.name}</div>
            <div className="text-sm text-muted">{t.role}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
