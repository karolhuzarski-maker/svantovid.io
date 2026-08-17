import { useEffect, useState } from 'react'
import { assets } from './config/assets'
import { Language, translations } from './translations'

type SafeImageProps = { src: string; alt: string; fallback?: string; className?: string; eager?: boolean }

function SafeImage({ src, alt, fallback, className = '', eager = false }: SafeImageProps) {
  const [state, setState] = useState<'loading' | 'ready' | 'missing'>('loading')
  return <div className={`safe-image ${className} safe-image--${state}`}>
    {state !== 'missing' && <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} onLoad={() => setState('ready')} onError={() => setState('missing')} />}
    {state === 'missing' && fallback && <div className="safe-image__fallback" role="img" aria-label={`${alt}. ${fallback}`}><span>{fallback}</span></div>}
  </div>
}

function Brand({ lang }: { lang: Language }) {
  return <a className="brand" href="#top" aria-label={lang === 'pl' ? 'SVANTOVID - strona główna' : 'SVANTOVID - home'}>
    <span>SVANTOVID</span>
  </a>
}

function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('svantovid-language')
    return saved === 'pl' || saved === 'en' ? saved : navigator.language.toLowerCase().startsWith('pl') ? 'pl' : 'en'
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const t = translations[lang]

  useEffect(() => {
    localStorage.setItem('svantovid-language', lang)
    document.documentElement.lang = lang
    document.title = t.seo.title
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', t.seo.description)
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', t.seo.description)
  }, [lang, t.seo])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const navLinks = [['#method', t.nav.method], ['#evidence', t.nav.evidence], ['#why', t.nav.why], ['#founder', t.nav.founder]]

  return <>
    <a className="skip-link" href="#content">{t.skip}</a>
    <div className="scanline" aria-hidden="true" />
    <header className="site-header">
      <div className="container header-inner">
        <Brand lang={lang} />
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? t.nav.close : t.nav.menu} onClick={() => setMenuOpen(value => !value)}><span /><span /></button>
        <nav id="main-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label={t.nav.navigation}>
          {navLinks.map(([href, label]) => <a href={href} key={href} onClick={closeMenu}>{label}</a>)}
          <div className="language-switch" role="group" aria-label={t.nav.language}>
            {(['en', 'pl'] as Language[]).map(code => <button type="button" key={code} aria-pressed={lang === code} onClick={() => { setLang(code); closeMenu() }}>{code.toUpperCase()}</button>)}
          </div>
          <a className="header-contact" href="mailto:hello@svantovid.io" onClick={closeMenu}>{t.nav.contact}</a>
        </nav>
      </div>
    </header>

    <main id="content">
      <section className="hero" id="top">
        <SafeImage className="hero-media" src={assets.raw} alt={t.hero.alt} eager />
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="stage-label"><i />{t.hero.label}</p>
          <div className="hero-copy">
            <h1>SVANTOVID</h1>
            <p className="tagline">{t.hero.tagline}</p>
            <h2>{t.hero.title}</h2>
            <p className="hero-body">{t.hero.body}</p>
            <div className="actions"><a className="button button-primary" href="#evidence">{t.hero.primary}</a><a className="button button-ghost" href="mailto:hello@svantovid.io">{t.hero.secondary}</a></div>
          </div>
          <p className="evidence-line">INPUT <span>→</span> GROUND TRUTH <span>→</span> MODEL OUTPUT <span>→</span> INDEPENDENT AUDIT</p>
        </div>
      </section>

      <section className="section problem" aria-labelledby="problem-title"><div className="container problem-grid">
        <div><p className="eyebrow">{t.problem.eyebrow}</p><h2 id="problem-title">{t.problem.title}</h2><p className="section-lead">{t.problem.body}</p></div>
        <ol className="audit-questions">{t.problem.questions.map((question, index) => <li key={question}><span>0{index + 1}</span>{question}</li>)}</ol>
      </div></section>

      <section className="section evidence" id="evidence" aria-labelledby="evidence-title"><div className="container">
        <div className="section-heading"><p className="eyebrow">{t.evidence.eyebrow}</p><h2 id="evidence-title">{t.evidence.title}</h2></div>
        <div className="evidence-grid">{t.evidence.items.map((item, index) => <article className="evidence-card" key={item.label}>
          <div className="evidence-media"><SafeImage src={[assets.raw, assets.groundTruth, assets.output][index]} alt={item.alt} fallback={t.evidence.fallback} /></div>
          <div className="evidence-copy"><h3>{item.label}</h3><p>{item.text}</p></div>
        </article>)}</div>
        <p className="note">{t.evidence.note}</p>
      </div></section>

      <section className="section method" id="method" aria-labelledby="method-title"><div className="container">
        <p className="eyebrow">{t.method.eyebrow}</p><h2 id="method-title">{t.method.title}</h2>
        <ol className="method-steps">{t.method.steps.map(([title, body], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol>
      </div></section>

      <section className="section decision" aria-labelledby="decision-title"><div className="container decision-grid">
        <p className="eyebrow">{t.decision.eyebrow}</p><div><h2 id="decision-title">{t.decision.title}</h2><p>{t.decision.body}</p></div>
      </div></section>

      <section className="section why" id="why" aria-labelledby="why-title"><div className="container">
        <p className="eyebrow">{t.why.eyebrow}</p><h2 id="why-title">{t.why.title}</h2>
        <div className="acronym" aria-labelledby="acronym-title">
          <h3 id="acronym-title">{t.why.acronym.title}</h3>
          <p className="acronym-full">{t.why.acronym.full}</p>
          <dl>{t.why.acronym.terms.map(([letter, word]) => <div key={`${letter}-${word}`}><dt>{letter}</dt><dd>{word}</dd></div>)}</dl>
          <p className="acronym-description">{t.why.acronym.description}</p>
        </div>
        <div className="why-grid">{t.why.items.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div></section>

      <section className="section uses" aria-labelledby="uses-title"><div className="container uses-grid">
        <div><p className="eyebrow">{t.uses.eyebrow}</p><h2 id="uses-title">{t.uses.title}</h2><p>{t.uses.note}</p></div>
        <ul>{t.uses.items.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul>
      </div></section>

      <section className="section founder" id="founder" aria-labelledby="founder-title"><div className="container founder-grid">
        <div><p className="eyebrow">{t.founder.eyebrow}</p><h2 id="founder-title">{t.founder.title}</h2></div>
        <div><p className="founder-bio">{t.founder.bio}</p><p className="founder-status"><i />{t.founder.status}</p></div>
      </div></section>

      <section className="section final-cta" id="contact" aria-labelledby="contact-title"><div className="container final-grid">
        <div><p className="eyebrow">{t.final.eyebrow}</p><h2 id="contact-title">{t.final.title}</h2><a className="button button-primary" href="mailto:hello@svantovid.io">{t.final.cta}</a><a className="email" href="mailto:hello@svantovid.io">hello@svantovid.io</a></div>
        <SafeImage className="brand-lockup" src={assets.brain} alt={t.final.alt} />
      </div></section>
    </main>
    <footer><div className="container footer-inner"><strong>SVANTOVID.IO</strong><span>{t.footer.line}</span><a href="mailto:hello@svantovid.io">hello@svantovid.io</a><span>© 2026 SVANTOVID</span></div></footer>
  </>
}

export default App
