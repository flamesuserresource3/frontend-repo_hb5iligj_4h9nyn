import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const useCountUp = (end = 0, duration = 1.2) => {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: end,
              duration,
              ease: 'power3.out',
              onUpdate: () => setValue(Math.round(obj.val)),
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return { value, elRef };
};

const Stat = ({ label, value, suffix = '' }) => {
  const { value: count, elRef } = useCountUp(value, 1.6);
  return (
    <div ref={elRef} className="flex flex-col items-center text-center">
      <span className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
        {count}
        {suffix}
      </span>
      <span className="mt-1 text-sm text-white/70">{label}</span>
    </div>
  );
};

export default function Numbers() {
  return (
    <section id="numbers" className="relative w-full bg-slate-950 py-16 text-white md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-indigo-500/5" />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        <Stat label="Libraries" value={3} />
        <Stat label="Total Subscriptions" value={1250} />
        <Stat label="Years of Experience" value={7} />
        <Stat label="Avg. Seat Occupancy" value={95} suffix="%" />
      </div>
    </section>
  );
}
