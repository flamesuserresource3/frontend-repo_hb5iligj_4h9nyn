import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Day Pass',
    price: 199,
    period: 'per day',
    features: ['Access 9am – 9pm', 'High‑speed Wi‑Fi', 'Tea/Coffee', 'Quiet zones'],
    cta: 'Grab a Day Pass',
    highlighted: false,
  },
  {
    name: 'Monthly',
    price: 2499,
    period: 'per month',
    features: ['24/7 Access', 'Fixed Seat', 'Locker', 'Unlimited Tea/Coffee', 'Priority Support'],
    cta: 'Start Membership',
    highlighted: true,
  },
  {
    name: 'Weekend',
    price: 899,
    period: 'per weekend',
    features: ['Sat–Sun Access', 'Fast Wi‑Fi', 'Power Backup', 'Reading Lamps'],
    cta: 'Work Weekends',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Simple, transparent pricing</h2>
            <p className="mt-2 text-white/70">Pick a plan that fits your flow. No hidden fees.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className={`rounded-2xl border p-6 backdrop-blur shadow-lg ${
                tier.highlighted
                  ? 'border-sky-500/40 bg-sky-500/10 shadow-sky-500/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <div className="mb-4 flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                {tier.highlighted && (
                  <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs text-sky-300">Popular</span>
                )}
              </div>
              <div className="mb-4 flex items-end gap-1">
                <span className="text-4xl font-semibold">₹{tier.price}</span>
                <span className="text-sm text-white/70">{tier.period}</span>
              </div>
              <ul className="mb-6 space-y-2 text-sm text-white/90">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check size={16} className="text-sky-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-medium transition ${
                  tier.highlighted
                    ? 'bg-sky-500 text-white hover:bg-sky-600'
                    : 'bg-white/10 text-white hover:bg-white/15'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
