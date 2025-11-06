import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Coffee, CupSoda, Fan, ThermometerSnowflake, Lightbulb, Chair, Plug, Sandwich, Droplets, UtensilsCrossed } from 'lucide-react';
import gsap from 'gsap';

const items = [
  { icon: ThermometerSnowflake, label: 'Air Conditioning' },
  { icon: Fan, label: 'Fans' },
  { icon: Chair, label: 'Personal Workstation' },
  { icon: Droplets, label: 'Water' },
  { icon: UtensilsCrossed, label: 'Clean Toilets' },
  { icon: Coffee, label: 'Tea & Coffee' },
  { icon: Sandwich, label: 'Snacks' },
  { icon: Lightbulb, label: 'Ambient Lights' },
  { icon: Plug, label: 'Switch Boards' },
  { icon: Wifi, label: 'High‑speed Wi‑Fi' },
];

export default function Amenities() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.amenity-card');
    if (cards) {
      gsap.from(cards, { opacity: 0, y: 20, duration: 0.6, stagger: 0.06, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current } });
    }
  }, []);

  return (
    <section id="amenities" className="relative w-full bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Amenities that power productivity</h2>
            <p className="mt-2 text-white/70">Everything you need for deep work and focused study sessions.</p>
          </div>
        </div>
        <div ref={containerRef} className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {items.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              whileHover={{ y: -4, scale: 1.02 }}
              className="amenity-card group rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-shadow hover:shadow-lg hover:shadow-sky-500/10"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400">
                <Icon size={20} />
              </div>
              <p className="text-sm text-white/90">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
