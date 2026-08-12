import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUp, ArrowUpRight, Check, ChevronDown, Download, ExternalLink, FileText, Mail, MapPin, Menu, Moon, Phone, Send, Sun, X } from 'lucide-react';
import { copy, experiences, skills, type Copy, type Language } from '@/data/portfolio';

const cvPath = '/cv/Ramiandrisoa_Andriamandranto_Mickaël_fullStack_js_1786431452115.pdf';

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={{ opacity: 0, y: reduce ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: reduce ? 0 : .65, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}

function SectionHead({ index, label, title }: { index: string; label: string; title: string }) {
  return <div className="mb-12 grid gap-4 md:grid-cols-[180px_1fr] md:items-end"><p className="font-mono-app text-xs uppercase tracking-[.2em] text-primary">{index} <span className="text-muted-foreground">/ {label.split(' / ')[1] ?? label}</span></p><h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.03] tracking-[-.04em] text-foreground md:text-6xl">{title}</h2></div>;
}

export function Portfolio() {
  const [lang, setLang] = useState<Language>(() => (localStorage.getItem('mickael-lang') as Language) || 'fr');
  const [dark, setDark] = useState(() => localStorage.getItem('mickael-theme') !== 'light');
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('about');
  const [progress, setProgress] = useState(0);
  const t: Copy = copy[lang];
  const links = useMemo(() => Object.entries(t.nav), [t]);

  useEffect(() => { document.documentElement.classList.toggle('dark', dark); localStorage.setItem('mickael-theme', dark ? 'dark' : 'light'); }, [dark]);
  useEffect(() => { localStorage.setItem('mickael-lang', lang); document.documentElement.lang = lang; }, [lang]);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max ? (window.scrollY / max) * 100 : 0);
      const current = [...document.querySelectorAll('section[id]')].reverse().find((section) => window.scrollY + 180 >= (section as HTMLElement).offsetTop);
      if (current) setActive(current.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const jump = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false); };
  return <div className="noise min-h-[100dvh] overflow-x-hidden bg-background text-foreground">
    <div className="fixed left-0 top-0 z-[60] h-1 bg-background w-full transition-[width] duration-150"/>
    <div className="fixed left-0 top-0 z-[60] h-1 bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
    <div className="pointer-events-none fixed -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl ambient-drift" />
    <div className="pointer-events-none fixed -right-40 top-[45%] h-96 w-96 rounded-full bg-accent/10 blur-3xl ambient-drift" style={{ animationDelay: '-5s' }} />
    <header className="fixed inset-x-0 top-1 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-10">
        <button data-testid="button-logo" onClick={() => jump('top')} className="group flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          <span className="grid size-9 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">M</span>
          <span className="font-display text-sm font-semibold tracking-tight">Mickaël<span className="text-primary">.</span></span>
        </button>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">{links.map(([id, label]) => <button data-testid={`link-${id}`} key={id} onClick={() => jump(id)} className={`relative py-2 text-xs font-semibold uppercase tracking-[.12em] transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${active === id ? 'text-primary' : 'text-muted-foreground'}`}>{label}{active === id && <motion.span layoutId="active-nav" className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />}</button>)}</nav>
        <div className="flex items-center gap-2">
          <button data-testid="button-language" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'} className="rounded-full border border-border px-3 py-2 font-mono-app text-[11px] font-medium uppercase tracking-wider transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{lang === 'fr' ? 'EN' : 'FR'}</button>
          <button data-testid="button-theme" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{dark ? <Sun size={15} /> : <Moon size={15} />}</button>
          <button data-testid="button-menu" onClick={() => setMenu(!menu)} aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} className="grid size-9 place-items-center rounded-full border border-border lg:hidden">{menu ? <X size={17} /> : <Menu size={17} />}</button>
        </div>
      </div>
      <AnimatePresence>{menu && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-border/60 px-5 py-4 lg:hidden"><div className="grid gap-1">{links.map(([id, label]) => <button data-testid={`mobile-link-${id}`} key={id} onClick={() => jump(id)} className="flex justify-between border-b border-border/50 py-3 text-left text-sm font-semibold uppercase tracking-wider">{label}<ArrowUpRight size={15} className="text-primary" /></button>)}</div></motion.nav>}</AnimatePresence>
    </header>

    <main id="top" className="relative">
      <section className="mx-auto grid min-h-[100dvh] max-w-7xl items-center gap-12 px-5 pb-20 pt-36 lg:grid-cols-[1.25fr_.75fr] lg:px-10">
        <div><Reveal><p className="mb-7 flex items-center gap-3 font-mono-app text-xs uppercase tracking-[.2em] text-primary"><span className="pulse-line h-px w-10 bg-primary" />{t.heroKicker}</p></Reveal>
          <Reveal delay={.08}><h1 className="max-w-4xl font-display text-[clamp(3.3rem,8vw,8rem)] font-semibold leading-[.88] tracking-[-.07em]">{t.heroTitle}</h1></Reveal>
          <Reveal delay={.16}><p className="mt-9 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">{t.heroText}</p></Reveal>
          <Reveal delay={.24}><div className="mt-10 flex flex-wrap gap-3"><button data-testid="button-view-work" onClick={() => jump('experience')} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{t.viewWork}<ArrowDown size={16} /></button><button data-testid="button-contact-hero" onClick={() => jump('contact')} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{t.contactMe}<ArrowUpRight size={16} /></button></div></Reveal>
        </div>
        <Reveal delay={0.28} className="relative hidden lg:block">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.02,
              y: -6,
            }}
            className="relative ml-auto max-w-[430px]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.35, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="pointer-events-none absolute -inset-10 rounded-full bg-primary/20 blur-3xl"
            />
            <motion.img
              src="/images/profil.png"
              alt="Photo"
              initial={{
                opacity: 0,
                scale: 1.08,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.3,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.04,
              }}
              className="relative z-10 w-full object-contain"
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-8 left-4 z-20 rounded-full bg-background/80 px-4 py-2 font-mono-app text-[10px] uppercase tracking-[0.18em] text-primary shadow-lg backdrop-blur-md"
            >
              {t.fullStackDeveloper}
            </motion.div>
          </motion.div>
        </Reveal>
      </section>

      <section id="about" className="scroll-mt-28 border-t border-border/60"><div className="mx-auto max-w-7xl px-5 py-28 lg:px-10"><SectionHead index="01" label={t.profileLabel} title={t.profileTitle} /><div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]"><Reveal><p className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">{t.profileText}</p></Reveal><Reveal delay={.12}><div className="grid gap-5 border-l border-primary/60 pl-6 text-sm"><div><p className="font-mono-app text-[10px] uppercase tracking-widest text-muted-foreground">Based in</p><p className="mt-2 flex gap-2 font-semibold"><MapPin size={15} className="text-primary" />Antananarivo, Madagascar</p></div><div><p className="font-mono-app text-[10px] uppercase tracking-widest text-muted-foreground">Birthday</p><p className="mt-2 font-semibold">{t.birth}</p></div><div><p className="font-mono-app text-[10px] uppercase tracking-widest text-muted-foreground">Focus</p><p className="mt-2 font-semibold">JavaScript · Full Stack</p></div></div></Reveal></div></div></section>

      <section id="skills" className="scroll-mt-28"><div className="mx-auto max-w-7xl px-5 py-28 lg:px-10"><SectionHead index="02" label={t.skillsLabel} title={t.skillsTitle} /><div className="flex flex-wrap gap-3">{skills.map((skill, i) => <Reveal key={skill} delay={Math.min(i * .025, .4)}><span data-testid={`skill-${skill.toLowerCase().replaceAll(' ', '-')}`} className="inline-flex rounded-full border border-border bg-card px-4 py-2.5 font-mono-app text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary">{skill}</span></Reveal>)}</div></div></section>

      <section id="experience" className="scroll-mt-28 border-t border-border/60"><div className="mx-auto max-w-7xl px-5 py-28 lg:px-10"><SectionHead index="03" label={t.experienceLabel} title={t.experienceTitle} /><div className="space-y-5">{experiences.map((experience, i) => <ExperienceItem key={experience.company} experience={experience} index={i} t={t} lang={lang} />)}</div></div></section>
      <section id="projects" className="scroll-mt-28 border-t border-border/60"><div className="mx-auto max-w-7xl px-5 py-24 lg:px-10"><p className="font-mono-app text-xs uppercase tracking-[.2em] text-muted-foreground">Selected work / {experiences.reduce((sum, e) => sum + e.projects.length, 0)} {t.projects}</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{experiences.flatMap((e) => e.projects).slice(0, 8).map((project, i) => <Reveal key={project.name} delay={i * .04}><div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"><div className="mb-14 flex items-center justify-between"><span className="font-mono-app text-[10px] text-primary">{String(i + 1).padStart(2, '0')}</span><ArrowUpRight size={15} className="text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" /></div><h3 className="font-display text-lg font-semibold">{project.name}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{project.detail[lang]}</p></div></Reveal>)}</div></div></section>

      <section id="education" className="scroll-mt-28"><div className="mx-auto max-w-7xl px-5 py-28 lg:px-10"><SectionHead index="04" label={t.educationLabel} title={t.educationTitle} /><div className="grid gap-4 lg:grid-cols-2"><Reveal><div className="h-full rounded-2xl border border-border bg-card p-7"><div className="flex justify-between gap-5"><span className="font-mono-app text-xs text-primary">2017 — 2023</span><FileText size={18} className="text-muted-foreground" /></div><h3 className="mt-16 max-w-md font-display text-2xl font-semibold">Ingénieur et Licence Professionnelle</h3><p className="mt-3 text-sm text-muted-foreground">ENI Fianarantsoa Madagascar</p></div></Reveal><Reveal delay={.1}><div className="h-full rounded-2xl border border-border bg-card p-7"><div className="flex justify-between gap-5"><span className="font-mono-app text-xs text-primary">2015 — 2016</span><FileText size={18} className="text-muted-foreground" /></div><h3 className="mt-16 max-w-md font-display text-2xl font-semibold">Baccalauréat série scientifique</h3><p className="mt-3 text-sm text-muted-foreground">LRR Fianarantsoa</p></div></Reveal></div><div className="mt-16 grid gap-6 border-t border-border pt-8 md:grid-cols-2"><div><p className="font-mono-app text-xs uppercase tracking-widest text-primary">{t.languagesLabel}</p><h3 className="mt-4 font-display text-2xl font-semibold">{t.languagesTitle}</h3></div><div className="flex flex-wrap items-start gap-3 md:justify-end"><span className="rounded-full border border-border px-4 py-2 text-sm">{t.french}</span><span className="rounded-full border border-border px-4 py-2 text-sm">{t.english}</span></div></div></div></section>

      <section id="contact" className="scroll-mt-28 border-t border-border/60"><ContactSection t={t} lang={lang} /></section>
    </main>
    <footer className="border-t border-border/60"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-10"><p>© {new Date().getFullYear()} Mickaël Ramiandrisoa. {t.footer}</p><div className="flex items-center gap-5"><a data-testid="link-footer-email" href="mailto:ramiandrisoamicka@gmail.com" className="transition-colors hover:text-primary">ramiandrisoamicka@gmail.com</a><button data-testid="button-back-to-top" onClick={() => jump('top')} aria-label="Back to top" className="grid size-9 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"><ArrowUp size={15} /></button></div></div></footer>
  </div>;
}

function ExperienceItem({ experience, index, t, lang }: { experience: typeof experiences[number]; index: number; t: Copy; lang: Language }) {
  const [open, setOpen] = useState(index === 0);
  return <Reveal delay={index * .06}><article className={`rounded-2xl border bg-card transition-colors ${open ? 'border-primary/50' : 'border-border'}`}><button data-testid={`button-experience-${experience.company.replaceAll(' ', '-').toLowerCase()}`} onClick={() => setOpen(!open)} aria-expanded={open} className="grid w-full gap-5 p-5 text-left md:grid-cols-[1fr_auto_auto] md:items-center md:p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"><div><p className="font-display text-2xl font-semibold">{experience.company}</p><p className="mt-1 text-sm text-muted-foreground">{experience.role[lang]} · {experience.location}</p></div><p className="font-mono-app text-xs text-muted-foreground">{experience.period[lang]}</p><span className={`grid size-9 place-items-center rounded-full border border-border transition-transform ${open ? 'rotate-180 text-primary' : ''}`}><ChevronDown size={16} /></span></button><AnimatePresence initial={false}>{open && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden"><div className="grid gap-3 border-t border-border/70 p-5 md:grid-cols-2 md:p-7">{experience.projects.map((project) => <div key={project.name} className="rounded-xl border border-border/70 bg-background/40 p-5"><div className="flex items-start justify-between gap-4"><h4 className="font-display font-semibold">{project.name}</h4><span className="font-mono-app text-[10px] text-primary">↳</span></div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.detail[lang]}</p><div className="mt-4 flex flex-wrap gap-1.5">{project.stack.map((item) => <span key={item} className="rounded bg-secondary px-2 py-1 font-mono-app text-[9px] text-secondary-foreground">{item}</span>)}</div></div>)}</div></motion.div>}</AnimatePresence></article></Reveal>;
}

function ContactSection({ t, lang }: { t: Copy; lang: Language }) {
  const [sent, setSent] = useState(false); const [error, setError] = useState('');
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setError('');
    const data = new FormData(event.currentTarget); const name = String(data.get('name') || '').trim(); const email = String(data.get('email') || '').trim(); const message = String(data.get('message') || '').trim();
    if (!name || !email || !message) { setError(t.required); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError(t.invalidEmail); return; }
    window.location.href = `mailto:ramiandrisoamicka@gmail.com?subject=${encodeURIComponent(`${name} — portfolio contact`)}&body=${encodeURIComponent(`${message}\n\n${email}`)}`; setSent(true);
  };
  return <div className="mx-auto grid max-w-7xl gap-16 px-5 py-28 lg:grid-cols-[.9fr_1.1fr] lg:px-10"><div><SectionHead index="05" label={t.contactLabel} title={t.contactTitle} /><p className="-mt-5 max-w-md leading-relaxed text-muted-foreground">{t.contactText}</p><div className="mt-10 space-y-4 text-sm"><a data-testid="link-contact-email" href="mailto:ramiandrisoamicka@gmail.com" className="flex items-center gap-3 transition-colors hover:text-primary"><Mail size={16} className="text-primary" />ramiandrisoamicka@gmail.com</a><a data-testid="link-contact-phone" href="tel:+261349305324" className="flex items-center gap-3 transition-colors hover:text-primary"><Phone size={16} className="text-primary" />+261 34 93 053 24</a><p className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-primary" />{t.address}</p></div><div className="mt-10 flex flex-wrap gap-3"><a data-testid="button-email-direct" href="mailto:ramiandrisoamicka@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary"><Mail size={15} />{t.emailDirect}</a><a data-testid="button-cv-download" href={cvPath} download className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary"><Download size={15} />{t.download}</a><a data-testid="button-cv-open" href={cvPath} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary"><ExternalLink size={15} />{t.open}</a></div></div><Reveal><form onSubmit={submit} className="rounded-2xl border border-border bg-card p-6 md:p-8"><Field label={t.name} name="name" type="text" placeholder={lang === 'fr' ? 'Votre nom' : 'Your name'} /><Field label={t.email} name="email" type="email" placeholder="you@example.com" /><label className="mt-5 block text-sm font-semibold" htmlFor="message">{t.message}</label><textarea data-testid="input-message" id="message" name="message" rows={6} required className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder={lang === 'fr' ? 'Parlez-moi de votre besoin...' : 'Tell me about your needs...'} />{error && <p data-testid="status-form-error" role="alert" className="mt-4 text-sm text-destructive">{error}</p>}{sent && <p data-testid="status-form-sent" role="status" className="mt-4 flex items-center gap-2 text-sm text-primary"><Check size={15} />{t.mailNote}</p>}<button data-testid="button-submit-contact" type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{sent ? <Check size={16} /> : <Send size={16} />}{t.send}</button><p className="mt-5 text-xs leading-relaxed text-muted-foreground">{t.mailNote}</p></form></Reveal></div>;
}
function Field({ label, name, type, placeholder }: { label: string; name: string; type: string; placeholder: string }) { return <label className="block text-sm font-semibold" htmlFor={name}>{label}<input data-testid={`input-${name}`} id={name} name={name} type={type} required placeholder={placeholder} className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20" /></label>; }