import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const branches = [
  {
    name: 'Central Library – Downtown',
    address: '12 Knowledge Ave, Sector 5, Downtown, City 100001',
    phone: '+91 98765 43210',
    timing: 'Mon–Sun, 6am – 11pm',
  },
  {
    name: 'Scholars Hub – Westside',
    address: '88 Focus Street, West Park, City 100045',
    phone: '+91 90123 45678',
    timing: 'Mon–Sun, 6am – 11pm',
  },
  {
    name: 'Quiet Corner – Riverside',
    address: '5 River Bank Road, Riverside, City 100078',
    phone: '+91 91234 56780',
    timing: 'Mon–Sun, 6am – 11pm',
  },
];

export default function Locations() {
  return (
    <section id="locations" className="relative w-full bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Find us</h2>
          <p className="mt-2 text-white/70">Three branches across the city. Drop by anytime.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {branches.map((b) => (
            <motion.div key={b.name} whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-3 inline-flex items-center gap-2 text-sky-300">
                <MapPin size={18} />
                <span className="text-sm">{b.timing}</span>
              </div>
              <h3 className="text-lg font-semibold">{b.name}</h3>
              <p className="mt-2 text-sm text-white/80">{b.address}</p>
              <a href={`tel:${b.phone.replace(/\s/g, '')}`} className="mt-3 inline-block text-sm text-sky-300 hover:text-sky-200">
                {b.phone}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
