import { useEffect, useState } from 'react'
import { assets } from './config/assets'
import { Language, translations } from './translations'

function AssetImage({ src, alt, fallback, hero = false }: { src: string; alt: string; fallback: string; hero?: boolean }) {
  const [failed, setFailed] = useState(false)
  return <div className={`asset ${hero ? 'asset--hero' : ''} ${failed ? 'asset--missing' : ''}`}>
    {!failed && <img src={src} alt={alt} loading={hero ? 'eager' : 'lazy'} fetchPriority={hero ? 'high' : 'auto'} onError={() => setFailed(true)} />}
    {failed && <div className="asset__fallback" role="img" aria-label={alt}><span>[ ASSET OFFLINE ]</span><strong>{fallback}</strong><i /></div>}
  </div>
}

function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('svantovid-language')
    return saved === 'pl' || saved === 'en' ? saved : navigator.language.toLowerCase().startsWith('pl') ? 'pl' : 'en'
  })
  const t = translations[lang]
  useEffect(() => {
    localStorage.setItem('svantovid-language', lang)
    document.documentElement.lang = lang
    document.title = t.seo.title
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', t.seo.description)
  }, [lang, t.seo])

  return <>
    <a className="skip" href="#content">{t.skip}</a>
    <header className="nav">
      <a className="brand" href="#top" aria-label="SVANTOVID — home"><span className="brand__mark" aria-hidden="true"><i/><i/><i/><i/></span><strong>SVANTOVID</strong><small>.IO</small></a>
      <nav aria-label={t.nav.menu} className="nav__links"><a href="#method">{t.nav.method}</a><a href="#evidence">{t.nav.evidence}</a><a href="#why">{t.nav.why}</a><a href="#founder">{t.nav.founder}</a></nav>
      <div className="nav__actions">
        <div className="language" role="group" aria-label={t.nav.label}>{(['en','pl'] as Language[]).map(code => <button key={code} onClick={() => setLang(code)} aria-pressed={lang === code}>{code.toUpperCase()}</button>)}</div>
        <a className="nav__contact" href="mailto:hello@svantovid.io">{t.nav.contact}<span aria-hidden="true"> ↗</span></a>
      </div>
    </header>
    <main id="content">
      <section className="hero" id="top">
        <AssetImage src={assets.raw} alt={t.hero.alt} fallback={t.hero.fallback} hero />
        <div className="hero__veil" />
        <div className="scanline" aria-hidden="true" />
        <div className="hero__content wrap">
          <p className="eyebrow light">SVT / CONTROLLED TEST / 001</p><h1>SVANTOVID</h1><p className="tagline">{t.hero.kicker}</p>
          <div className="hero__statement"><h2>{t.hero.lead}</h2><p>{t.hero.body}</p><div className="buttons"><a className="button primary" href="#method">{t.hero.primary}</a><a className="button secondary" href="mailto:hello@svantovid.io">{t.hero.secondary}</a></div></div>
          <p className="hero__label"><span />{t.hero.label}</p>
        </div>
      </section>

      <section className="problem section light-section"><div className="wrap split"><div><p className="eyebrow">{t.problem.label}</p><h2>{t.problem.title}</h2><p className="lead">{t.problem.body}</p></div><div className="questions"><small>{t.problem.baseline}</small><p className="muted-question">{t.problem.questions[0]}</p><small>{t.problem.audit}</small>{t.problem.questions.slice(1).map((q,i)=><p key={q} className={i === 0 ? 'critical' : ''}>{q}</p>)}</div></div></section>

      <section className="evidence section" id="evidence"><div className="wrap"><p className="eyebrow light">{t.evidence.label}</p><h2>{t.evidence.title}</h2><div className="evidence__grid">{t.evidence.items.map((item,i)=><article key={item.title} className="evidence__item"><div className="evidence__head"><span>0{i+1}</span><h3>{item.title}</h3></div><AssetImage src={[assets.raw,assets.groundTruth,assets.output][i]} alt={item.alt} fallback={item.fallback}/><p>{item.caption}</p></article>)}</div><p className="concept-note">{t.evidence.note}</p></div></section>

      <section className="method section light-section" id="method"><div className="wrap"><p className="eyebrow">{t.method.label}</p><h2>{t.method.title}</h2><ol className="process">{t.method.steps.map((step,i)=><li key={step[0]}><span>0{i+1}</span><h3>{step[0]}</h3><p>{step[1]}</p></li>)}</ol></div></section>

      <section className="decision section"><div className="wrap split"><div><p className="eyebrow light">{t.decision.label}</p><h2>{t.decision.title}</h2><div className="decision__states">{t.decision.states.map((x,i)=><span className={`state state--${i}`} key={x}>{x}</span>)}</div><p className="hidden-note">{t.decision.hidden}</p></div><div className="report"><div className="report__top"><span>SVT / AUDIT RECORD</span><b>CRITICAL FALSE NEGATIVE</b></div><p>{t.decision.intro}</p><ul>{t.decision.points.map((x,i)=><li key={x}><span>0{i+1}</span>{x}</li>)}</ul></div></div></section>

      <section className="why section mint-section" id="why"><div className="wrap"><p className="eyebrow">{t.why.label}</p><h2>{t.why.title}</h2><ol className="pillars">{t.why.pillars.map((x,i)=><li key={x}><span>0{i+1}</span><strong>{x}</strong></li>)}</ol></div></section>

      <section className="uses section light-section"><div className="wrap"><p className="eyebrow">{t.uses.label}</p><h2>{t.uses.title}</h2><div className="uses__grid">{t.uses.items.map((x,i)=><div key={x}><span>0{i+1}</span><p>{x}</p></div>)}</div></div></section>

      <section className="founder section" id="founder"><div className="wrap split"><div><p className="eyebrow light">{t.founder.label}</p><h2>{t.founder.title}</h2><div className="status"><i />{t.founder.status}</div></div><div className="founder__record"><small>FIELD RECORD / PROFILE</small><h3>{t.founder.name}</h3><ul>{t.founder.bio.map(x=><li key={x}>{x}</li>)}</ul></div></div></section>

      <section className="final section" id="contact"><div className="wrap"><p className="eyebrow light">{t.final.label}</p><h2>{t.final.title}</h2><a className="button primary" href="mailto:hello@svantovid.io?subject=SVANTOVID%20partnership">{t.final.cta}<span aria-hidden="true"> ↗</span></a><a className="final__email" href="mailto:hello@svantovid.io">{t.final.email}</a></div></section>
    </main>
    <footer><div className="wrap"><strong>SVANTOVID.IO</strong><span>{t.footer}</span><span>© 2026</span></div></footer>
  </>
}
export default App
