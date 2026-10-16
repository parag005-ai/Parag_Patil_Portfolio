"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const links = [["Work", "#work"], ["Experience", "#experience"], ["Research", "#research"], ["Skills", "#skills"]] as const;
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="shell nav-inner">
    <a className="brand" href="#home" aria-label="Parag Patil, home"><Image className="brand-logo" src="/brand/parag-p-monogram.svg" width={32} height={32} alt="" priority /><span className="brand-wordmark">Parag Patil</span></a>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a className="nav-cta" href="#contact">Let’s talk ↗</a></nav>
    <button className="menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={19} /> : <Menu size={19} />}</button>
  </div><nav className={`mobile-nav ${open ? "open" : ""}`} aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a href="#contact" onClick={() => setOpen(false)}>Let’s talk</a></nav></header>;
}
