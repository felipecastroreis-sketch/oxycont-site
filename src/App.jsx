import { useEffect, useRef, useState } from 'react'

const WHATSAPP = 'https://wa.me/5511983428801?text=Olá,%20vim%20pelo%20site%20da%20OxyCont'
const EMAIL    = 'mailto:felipe.reis@oxycont.com.br'

/* ─── palavras animadas no hero ─── */
const WORDS = ['clareza', 'estrutura', 'crescimento', 'segurança']

/* ─── ticker ─── */
const TICKER = [
  'Contabilidade Consultiva', 'BPO Financeiro', 'BPO Fiscal', 'BPO Contábil',
  'Folha de Pagamento', 'Fiscal & Tributário', 'Demonstrações Financeiras', 'Visão Estratégica',
  'Contabilidade Consultiva', 'BPO Financeiro', 'BPO Fiscal', 'BPO Contábil',
  'Folha de Pagamento', 'Fiscal & Tributário', 'Demonstrações Financeiras', 'Visão Estratégica',
]

/* ─── sistemas — logos SVG inline (simple-icons + customizados) ─── */
const SYSTEMS = [
  {
    name: 'SAP B1',
    color: '#0FAAFF',
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="SAP">
        <path fill="#0FAAFF" d="M0 6.064v11.872h12.13L24 6.064zm3.264 2.208h.005c.863.001 1.915.245 2.676.633l-.82 1.43c-.835-.404-1.255-.442-1.73-.467-.708-.038-1.064.215-1.069.488-.007.332.669.633 1.305.838.964.306 2.19.715 2.377 1.9L7.77 8.437h2.046l2.064 5.576-.007-5.575h2.37c2.257 0 3.318.764 3.318 2.519 0 1.575-1.09 2.514-2.936 2.514h-.763l-.01 2.094-3.588-.003-.25-.908c-.37.122-.787.189-1.23.189-.456 0-.885-.071-1.263-.2l-.358.919-2 .006.09-.462c-.029.025-.057.05-.087.074-.535.43-1.208.629-2.037.644l-.213.002a5.075 5.075 0 0 1-2.581-.675l.73-1.448c.79.467 1.286.572 1.956.558.347-.007.598-.07.761-.239a.557.557 0 0 0 .156-.369c.007-.376-.53-.553-1.185-.756-.531-.164-1.135-.389-1.606-.735-.559-.41-.825-.924-.812-1.65a1.99 1.99 0 0 1 .566-1.377c.519-.537 1.357-.863 2.363-.863zm10.597 1.67v1.904h.521c.694 0 1.247-.23 1.248-.964 0-.709-.554-.94-1.248-.94zm-5.087.767l-.748 2.362c.223.085.481.133.757.133.268 0 .52-.047.742-.126l-.736-2.37z"/>
      </svg>
    ),
  },
  {
    name: 'Domínio',
    color: '#E87722',
    logo: (
      /* Domínio (Thomson Reuters) — sem ícone público disponível, usar logotipo tipográfico estilizado */
      <svg viewBox="0 0 80 28" xmlns="http://www.w3.org/2000/svg" aria-label="Domínio">
        <rect width="80" height="28" rx="5" fill="#E87722"/>
        <text x="40" y="19" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle" letterSpacing="0.5">Domínio</text>
      </svg>
    ),
  },
  {
    name: 'MEGA',
    color: '#D9272E',
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="MEGA Sistemas">
        <path fill="#D9272E" d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.23 16.244a.371.371 0 0 1-.373.372H16.29a.371.371 0 0 1-.372-.372v-4.828c0-.04-.046-.06-.08-.033l-3.32 3.32a.742.742 0 0 1-1.043 0l-3.32-3.32c-.027-.027-.08-.007-.08.033v4.828a.371.371 0 0 1-.372.372H6.136a.371.371 0 0 1-.372-.372V7.757c0-.206.166-.372.372-.372h1.076a.75.75 0 0 1 .525.22l4.13 4.13a.18.18 0 0 0 .26 0l4.13-4.13c.14-.14.325-.22.525-.22h1.075c.206 0 .372.166.372.372z"/>
      </svg>
    ),
  },
  {
    name: 'Totvs',
    color: '#363636',
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="TOTVS">
        <path fill="#363636" d="M12 0C5.385 0 0 5.339 0 12c0 6.614 5.385 12 12 12 6.614 0 12-5.386 12-12S18.614 0 12 0ZM8.648 3.813c1.275-.068 10.697 2.302 11.43 2.943.614.85.614 9.118 0 9.685-.284.095-2.127-.283-4.205-.755 0 2.031-.143 3.966-.426 4.203-.756.236-10.772-2.267-11.527-2.928-.615-.85-.615-9.119 0-9.686.283-.094 2.079.284 4.205.756 0-2.031.142-3.969.425-4.205a.448.448 0 0 1 .098-.013Zm-.523 4.265c-.048 2.362.095 4.961.425 5.434.426.378 4.158 1.418 7.276 2.174.047-2.41-.095-5.008-.426-5.481-.425-.378-4.157-1.418-7.275-2.127Z"/>
      </svg>
    ),
  },
  {
    name: 'Dynamics 365',
    color: '#002050',
    logo: (
      /* Microsoft Dynamics 365 — logo oficial baseado nas cores da Microsoft */
      <svg viewBox="0 0 48 28" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft Dynamics 365">
        <rect width="48" height="28" rx="4" fill="#002050"/>
        {/* Grade 2x2 colorida da Microsoft */}
        <rect x="8"  y="6"  width="7" height="7" rx="1" fill="#F25022"/>
        <rect x="16" y="6"  width="7" height="7" rx="1" fill="#7FBA00"/>
        <rect x="8"  y="14" width="7" height="7" rx="1" fill="#00A4EF"/>
        <rect x="16" y="14" width="7" height="7" rx="1" fill="#FFB900"/>
        <text x="35" y="18" fontFamily="Arial,sans-serif" fontSize="8" fontWeight="700" fill="#fff" textAnchor="middle">D365</text>
      </svg>
    ),
  },
  {
    name: 'Sienge',
    color: '#0066CC',
    logo: (
      /* Sienge — logo tipográfico oficial */
      <svg viewBox="0 0 80 28" xmlns="http://www.w3.org/2000/svg" aria-label="Sienge">
        <rect width="80" height="28" rx="5" fill="#0066CC"/>
        <text x="40" y="19" fontFamily="Arial,sans-serif" fontSize="12" fontWeight="700" fill="#fff" textAnchor="middle" letterSpacing="0.5">Sienge</text>
      </svg>
    ),
  },
]

/* ─── pilares da marca ─── */
const PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    label: 'Conformidade total',
    value: 'Zero surpresas fiscais',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Resposta ágil',
    value: 'Atendimento rápido',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    label: 'Dedicação exclusiva',
    value: 'Especialista dedicado',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    label: 'Visão consultiva',
    value: 'Decisões mais inteligentes',
  },
]

/* ─── serviços ─── */
const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: 'Contabilidade Consultiva',
    description: 'Apoio estratégico para transformar números em informação útil e decisões mais seguras para o negócio.',
    featured: true,
    tag: 'Principal',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Fiscal e Tributário',
    description: 'Cumprimento de obrigações, apuração de tributos e organização fiscal com mais segurança e previsibilidade.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
    title: 'Societário',
    description: 'Estruturação societária e acompanhamento próximo para empresas em evolução e expansão.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'BPO Financeiro',
    description: 'Gestão financeira completa com contas a pagar e receber, fluxo de caixa e relatórios gerenciais.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <path d="M9 13h6"/><path d="M9 17h3"/>
      </svg>
    ),
    title: 'BPO Contábil',
    description: 'Escrituração, conciliações e rotinas contábeis com visão estratégica para apoiar a gestão.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'BPO Fiscal',
    description: 'Gestão fiscal completa com apuração de impostos, obrigações acessórias e controle tributário.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'BPO de Folha',
    description: 'Administração da folha de pagamento, encargos, admissões e rotinas trabalhistas com organização.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    title: 'Demonstrações Financeiras',
    description: 'Preparação de demonstrações com organização, consistência técnica e foco em qualidade da informação.',
  },
]

/* ─── diferenciais ─── */
const DIFFS = [
  {
    n: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: 'Atendimento personalizado e exclusivo',
    description: 'Cada cliente é atendido de forma próxima, com atenção à sua realidade, às suas rotinas e aos seus objetivos de negócio.',
  },
  {
    n: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Abordagem consultiva',
    description: 'Não atuamos apenas de forma operacional. Trabalhamos para transformar informações em apoio real para a tomada de decisão.',
  },
  {
    n: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Visão estratégica do negócio',
    description: 'Unimos técnica contábil e visão empresarial para apoiar empresas que querem crescer com mais estrutura e segurança.',
  },
  {
    n: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Comunicação clara e transparente',
    description: 'Priorizamos informações objetivas, linguagem acessível e alinhamento constante para dar clareza ao cliente em cada etapa.',
  },
  {
    n: '05',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Experiência com diferentes sistemas',
    description: 'Nossa experiência com plataformas amplamente utilizadas pelo mercado facilita integrações, rotinas e adaptação às operações dos clientes.',
  },
  {
    n: '06',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Compromisso com qualidade e confiança',
    description: 'Atuamos com organização, responsabilidade e alto padrão de entrega para construir relações duradouras e confiáveis.',
  },
]

/* ─── hook scroll reveal ─── */
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

/* ─── componente reveal wrapper ─── */
function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ══════════════════════════════════════════════════════════
   APP PRINCIPAL
   ══════════════════════════════════════════════════════════ */
export default function App() {
  const [wordIdx, setWordIdx] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  /* rotação de palavras */
  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2400)
    return () => clearInterval(t)
  }, [])

  /* sticky header */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    const fd   = new FormData(e.currentTarget)
    const nome = String(fd.get('nome') || '').trim()
    const mail = String(fd.get('email') || '').trim()
    const msg  = String(fd.get('mensagem') || '').trim()
    window.location.href =
      `${EMAIL}?subject=${encodeURIComponent('Contato pelo site - OxyCont')}&body=${encodeURIComponent(`Nome: ${nome}\nE-mail: ${mail}\n\nMensagem:\n${msg}`)}`
  }

  return (
    <>
      {/* ══ HEADER ══ */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label="OxyCont">
            <img
              className="logo"
              src="/logo.jpeg"
              alt="OxyCont"
            />
          </a>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            {['Home:#top','Sobre:#sobre','Serviços:#servicos','Diferenciais:#diferenciais','Contato:#contato']
              .map(s => {
                const [label, href] = s.split(':')
                return (
                  <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
                )
              })}
          </nav>

          <div className="header-right">
            <a className="btn btn-header" href={WHATSAPP} target="_blank" rel="noreferrer">
              Fale conosco
            </a>
            <button
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menu"
            >
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </header>

      <main id="top">

        {/* ══ HERO COM VÍDEO ══ */}
        <section className="hero">
          {/*
            Vídeos de stock gratuito — Pexels (licença livre, uso comercial sem atribuição obrigatória)
            Opção 1: "Multicultural team discussing business in modern office" — Tiger Lily (pexels 7147921)
            Opção 2: "Diverse team in productive business meeting" — Mikhail Nilov (pexels 8103038)
            Opção 3: "Team of professionals collaborating in modern office" — fauxels (pexels 3255384)
          */}
          <video className="hero-video" autoPlay muted loop playsInline>
            {/* reunião corporativa moderna — equipe diversa discutindo estratégia */}
            <source src="https://videos.pexels.com/video-files/7147921/7147921-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            {/* fallback 1: reunião de negócios em escritório */}
            <source src="https://videos.pexels.com/video-files/8103038/8103038-hd_1920_1080_25fps.mp4" type="video/mp4" />
            {/* fallback 2: equipe colaborando em escritório moderno */}
            <source src="https://videos.pexels.com/video-files/3255384/3255384-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>

          {/* camadas de overlay */}
          <div className="hero-overlay-base" />
          <div className="hero-overlay-grad" />

          {/* glows decorativos */}
          <div className="glow glow-a" />
          <div className="glow glow-b" />

          {/* conteúdo */}
          <div className="container hero-body">
            <div className="hero-copy">
              <div className="eyebrow fade-in-up">
                <span className="eyebrow-dot" />
                Clareza, confiança e crescimento
              </div>

              <h1 className="hero-h1 fade-in-up d1">
                Contabilidade com mais{' '}
                <span key={wordIdx} className="word-anim">
                  {WORDS[wordIdx]}
                </span>
                <br />para o seu negócio.
              </h1>

              <p className="hero-p fade-in-up d2">
                Consultoria contábil moderna para decisões mais inteligentes,
                atendimento próximo e estrutura completa de BPO para apoiar
                a evolução da sua empresa.
              </p>

              <div className="hero-actions fade-in-up d3">
                <a className="btn btn-wa" href={WHATSAPP} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Solicitar contato
                </a>
                <a className="btn btn-ghost" href="#sobre">
                  Conheça a OxyCont
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>

            {/* card lateral */}
            <div className="hero-card fade-in-up d4">
              <div className="hero-card-label">Nossa proposta de valor</div>
              <div className="hero-pillars">
                {PILLARS.map((p, i) => (
                  <div key={i} className="hero-pillar">
                    <div className="pillar-icon">{p.icon}</div>
                    <div>
                      <div className="pillar-label">{p.label}</div>
                      <div className="pillar-value">{p.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hero-card-footer">
                <span className="hcf-dot" />
                Empresa nova — comprometida desde o primeiro dia
              </div>
            </div>
          </div>

          {/* scroll indicator */}
          <div className="scroll-ind">
            <span>Scroll</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </section>

        {/* ══ TICKER ══ */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker-inner">
            {TICKER.map((t, i) => (
              <span key={i} className="ticker-item">
                <svg viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill="currentColor" opacity=".45"/></svg>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ══ SOBRE ══ */}
        <section id="sobre" className="sec sec-white">
          <div className="container">
            <div className="sobre-grid">
              <div>
                <Reveal>
                  <p className="kicker">Sobre a OxyCont</p>
                  <h2 className="sec-title">Muito além da<br/>contabilidade tradicional.</h2>
                </Reveal>
                <Reveal delay={80}>
                  <p className="sec-text mt20">
                    A OxyCont nasceu com o propósito de oferecer uma contabilidade mais clara,
                    estratégica e próxima do negócio. Inspirada no conceito de oxigênio,
                    acreditamos que a contabilidade deve ser essencial para a saúde, a organização
                    e o crescimento sustentável das empresas.
                  </p>
                  <p className="sec-text mt16">
                    Mais do que cumprir obrigações, buscamos entregar inteligência, suporte e
                    segurança para que gestores tomem decisões com mais confiança. Atuamos com uma
                    abordagem consultiva, unindo conhecimento técnico, visão empresarial e
                    atendimento personalizado.
                  </p>
                  <p className="sec-text mt16">
                    Para nós, contabilidade não é apenas processo: é base para crescimento,
                    controle e evolução.
                  </p>
                </Reveal>
              </div>

              <div>
                {/* card sistemas */}
                <Reveal delay={120}>
                  <div className="systems-card">
                    <div className="systems-card-head">
                      <div className="systems-card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                        </svg>
                      </div>
                      <div>
                        <div className="systems-card-title">Sistemas de mercado</div>
                        <div className="systems-card-sub">Experiência nas principais plataformas</div>
                      </div>
                    </div>
                    <div className="systems-grid">
                      {SYSTEMS.map(s => (
                        <div key={s.name} className="sys-pill" title={s.name}>
                          <div className="sys-logo">{s.logo}</div>
                          <span className="sys-name">{s.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {/* card proposta */}
                <Reveal delay={160}>
                  <div className="proposta-card">
                    <div className="proposta-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="proposta-title">Nossa essência</div>
                      <p className="proposta-text">
                        "Assim como o oxigênio é essencial para a vida, a OxyCont é o suporte essencial para a saúde e crescimento do seu negócio."
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SERVIÇOS ══ */}
        <section id="servicos" className="sec sec-grey">
          <div className="container">
            <Reveal>
              <p className="kicker">Nossos serviços</p>
              <h2 className="sec-title">Estrutura completa para<br/>apoiar o seu negócio.</h2>
              <p className="sec-sub mt12">
                Atuamos de forma integrada para apoiar empresas com mais organização,
                eficiência, segurança técnica e visão de crescimento.
              </p>
            </Reveal>

            <div className="services-grid mt48">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={i * 40}>
                  <article className={`svc-card ${s.featured ? 'svc-featured' : ''}`}>
                    {s.tag && <div className="svc-tag">{s.tag}</div>}
                    <div className={`svc-icon ${s.featured ? 'svc-icon-light' : ''}`}>
                      {s.icon}
                    </div>
                    <h3 className="svc-title">{s.title}</h3>
                    <p className="svc-desc">{s.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA INTERMEDIÁRIO ══ */}
        <div className="mid-cta">
          <div className="container mid-cta-inner">
            <div>
              <p className="mid-cta-over">Pronto para começar?</p>
              <h3 className="mid-cta-title">Leve a contabilidade da sua empresa a outro nível.</h3>
            </div>
            <a className="btn btn-wa" href={WHATSAPP} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Falar agora no WhatsApp
            </a>
          </div>
        </div>

        {/* ══ DIFERENCIAIS ══ */}
        <section id="diferenciais" className="sec sec-white">
          <div className="container">
            <Reveal>
              <p className="kicker">Diferenciais</p>
              <h2 className="sec-title">Atendimento próximo, visão<br/>consultiva e compromisso real.</h2>
              <p className="sec-sub mt12">
                A OxyCont combina técnica, personalização e visão de negócio para entregar
                uma experiência mais completa do que a contabilidade operacional tradicional.
              </p>
            </Reveal>

            <div className="diffs-grid mt48">
              {DIFFS.map((d, i) => (
                <Reveal key={d.n} delay={i * 50}>
                  <article className="diff-card">
                    <div className="diff-head">
                      <div className="diff-icon">{d.icon}</div>
                      <span className="diff-n">{d.n}</span>
                    </div>
                    <h3 className="diff-title">{d.title}</h3>
                    <p className="diff-desc">{d.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CONTATO ══ */}
        <section id="contato" className="sec sec-grey contact-sec">
          <div className="container">
            <div className="contact-grid">
              {/* painel esquerdo */}
              <Reveal>
                <div className="contact-panel">
                  <p className="kicker">Contato</p>
                  <h2 className="sec-title">Vamos<br/>conversar.</h2>
                  <p className="sec-text mt16">
                    Preencha o formulário para abrir sua mensagem no e-mail da OxyCont,
                    ou fale conosco diretamente pelo WhatsApp.
                  </p>

                  <div className="contact-links">
                    <a href={WHATSAPP} className="contact-link" target="_blank" rel="noreferrer">
                      <div className="cl-icon cl-wa">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      </div>
                      <div>
                        <div className="cl-label">WhatsApp</div>
                        <div className="cl-value">+55 11 98342-8801</div>
                      </div>
                      <svg className="cl-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>

                    <a href="mailto:felipe.reis@oxycont.com.br" className="contact-link">
                      <div className="cl-icon cl-mail">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </div>
                      <div>
                        <div className="cl-label">E-mail</div>
                        <div className="cl-value">felipe.reis@oxycont.com.br</div>
                      </div>
                      <svg className="cl-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* formulário */}
              <Reveal delay={100}>
                <div className="form-panel">
                  <p className="form-title">Enviar mensagem</p>
                  <form onSubmit={onSubmit}>
                    <div className="form-row">
                      <div className="field-wrap">
                        <label className="field-label">Nome</label>
                        <input className="field" name="nome" type="text" placeholder="Seu nome completo" required />
                      </div>
                      <div className="field-wrap">
                        <label className="field-label">E-mail</label>
                        <input className="field" name="email" type="email" placeholder="seu@email.com.br" required />
                      </div>
                    </div>
                    <div className="field-wrap">
                      <label className="field-label">Mensagem</label>
                      <textarea className="field" name="mensagem" placeholder="Como a OxyCont pode ajudar a sua empresa?" required />
                    </div>
                    <button className="btn btn-submit" type="submit">
                      Enviar mensagem
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/></svg>
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* ══ FLOATING WA ══ */}
      <a className="floating-wa" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span>Fale conosco</span>
      </a>

      {/* ══ FOOTER ══ */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src="/logo.jpeg" alt="OxyCont" className="footer-logo" />
            <p className="footer-tagline">O oxigênio essencial para o seu negócio.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <div className="footer-col-title">Serviços</div>
              <a href="#servicos">Contabilidade Consultiva</a>
              <a href="#servicos">BPO Financeiro</a>
              <a href="#servicos">BPO Fiscal</a>
              <a href="#servicos">BPO de Folha</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Empresa</div>
              <a href="#sobre">Sobre a OxyCont</a>
              <a href="#diferenciais">Diferenciais</a>
              <a href="#contato">Contato</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Contato</div>
              <a href={WHATSAPP} target="_blank" rel="noreferrer">+55 11 98342-8801</a>
              <a href="mailto:felipe.reis@oxycont.com.br">felipe.reis@oxycont.com.br</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} OxyCont. Todos os direitos reservados.</span>
          <span>Contabilidade estratégica · BPO · Consultoria</span>
        </div>
      </footer>
    </>
  )
}
