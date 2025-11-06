import React from 'react';
import { Library, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/20 text-sky-300">
            <Library size={20} />
          </div>
          <div>
            <p className="text-sm font-medium">Focus Library & Workstations</p>
            <p className="text-xs text-white/60">Where focus meets comfort.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <a href="#" aria-label="Instagram" className="transition hover:text-white"><Instagram size={18} /></a>
          <a href="#" aria-label="Twitter" className="transition hover:text-white"><Twitter size={18} /></a>
          <a href="#" aria-label="Facebook" className="transition hover:text-white"><Facebook size={18} /></a>
        </div>
        <p className="text-xs text-white/60">© {new Date().getFullYear()} Focus Library. All rights reserved.</p>
      </div>
    </footer>
  );
}
