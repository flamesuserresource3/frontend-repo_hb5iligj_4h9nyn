import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Library } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(headlineRef.current, { y: 40, opacity: 0, duration: 0.8 })
      .from(subRef.current, { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
      .from(ctaRef.current, { scale: 0.9, opacity: 0, duration: 0.5 }, '-=0.2');
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-28 pb-16 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
        >
          <Library size={14} />
          Your modern library & workstation
        </motion.div>

        <h1 ref={headlineRef} className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Where focus meets comfort.
          <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Study. Work. Create.
          </span>
        </h1>
        <p ref={subRef} className="max-w-xl text-base text-white/80 md:text-lg">
          Premium, quiet workspaces with amenities that keep you in the zone — from ergonomic seating and high-speed Wi‑Fi to tea, coffee and more.
        </p>
        <div ref={ctaRef} className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-600"
          >
            <Rocket className="transition-transform group-hover:-translate-y-0.5" size={16} />
            Explore Plans
          </a>
          <a
            href="#locations"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Visit a Branch
          </a>
        </div>
      </div>
    </section>
  );
}
