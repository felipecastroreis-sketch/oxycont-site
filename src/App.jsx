import { useEffect, useState } from 'react'

const WHATSAPP =
  'https://wa.me/5511983428801?text=Olá,%20vim%20pelo%20site%20da%20OxyCont'

const animatedWords = ['clareza', 'estrutura', 'crescimento', 'segurança']

const systems = ['SAP B1', 'Domínio', 'MEGA', 'Totvs', 'Dynamics 365', 'Sienge']

const services = [
  {
    title: 'Contabilidade Consultiva',
    description:
      'Apoio estratégico para transformar números em informação útil e decisões mais seguras para o negócio.',
    featured: true,
  },
  {
    title: 'Fiscal e Tributário',
    description:
      'Cumprimento de obrigações, apuração de tributos e organização fiscal com mais segurança e previsibilidade.',
  },
  {
    title: 'Societário e Suporte ao Crescimento',
    description:
      'Estruturação societária e acompanhamento próximo para empresas em evolução e expansão.',
  },
  {
    title: 'Elaboração de Demonstração Financeira',
    description:
      'Preparação de demonstrações financeiras com organização, consistência técnica e foco em qualidade da informação.',
  },
  {
    title: 'BPO Financeiro',
    description:
      'Gestão financeira completa com contas a pagar e receber, fluxo de caixa e relatórios gerenciais.',
  },
  {
    title: 'BPO Contábil',
    description:
      'Escrituração, conciliações e rotinas contábeis com visão estratégica para apoiar a gestão da empresa.',
  },
  {
    title: 'BPO Fiscal',
    description:
      'Gestão fiscal completa com apuração de impostos, obrigações acessórias e controle tributário eficiente.',
  },
  {
    title: 'BPO de Folha',
    description:
      'Administração da folha de pagamento, encargos, admissões, desligamentos e rotinas trabalhistas com organização e segurança.',
  },
]

const differentials = [
  {
    n: '01',
    title: 'Atendimento personalizado e exclusivo',
    description:
      'Cada cliente é atendido de forma próxima, com atenção à sua realidade, às suas rotinas e aos seus objetivos de negócio.',
  },
  {
    n: '02',
    title: 'Abordagem consultiva',
    description:
      'Não atuamos apenas de forma operacional. Trabalhamos para transformar informações em apoio real para a tomada de decisão.',
  },
  {
    n: '03',
    title: 'Visão estratégica do negócio',
    description:
      'Unimos técnica contábil e visão empresarial para apoiar empresas que querem crescer com mais estrutura e segurança.',
  },
  {
    n: '04',
    title: 'Comunicação clara e transparente',
    description:
      'Priorizamos informações objetivas, linguagem acessível e alinhamento constante para dar clareza ao cliente em cada etapa.',
  },
  {
    n: '05',
    title: 'Experiência com diferentes sistemas',
    description:
      'Nossa experiência com plataformas amplamente utilizadas pelo mercado facilita integrações, rotinas e adaptação às operações dos clientes.',
  },
  {
    n: '06',
    title: 'Compromisso com qualidade e confiança',
    description:
      'Atuamos com organização, responsabilidade e alto padrão de entrega para construir relações duradouras e confiáveis.',
  },
]

export default function App() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % animatedWords.length)
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const nome = String(fd.get('nome') || '').trim()
    const email = String(fd.get('email') || '').trim()
    const mensagem = String(fd.get('mensagem') || '').trim()

    const subject = encodeURIComponent('Contato pelo site - OxyCont')
    const body = encodeURIComponent(
      `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`
    )

    window.location.href = `mailto:felipe.reis@oxycont.com.br?subject=${subject}&body=${body}`
  }

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="#top" aria-label="OxyCont">
            <img className="logo" src="/logo.jpeg" alt="OxyCont" />
          </a>

          <nav className="nav">
            <a href="#top">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
            Fale conosco
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-video premium-hero">
          <video autoPlay muted loop playsInline className="background-video">
            <source
              src="https://cdn.coverr.co/videos/coverr-discussing-business-ideas-1560275676554?download=1080p"
              type="video/mp4"
            />
          </video>
          <div className="video-overlay"></div>
          <div className="hero-glow hero-glow-1"></div>
          <div className="hero-glow hero-glow-2"></div>

          <div className="hero-content">
            <div className="container hero-grid">
              <div className="hero-copy">
                <div className="eyebrow fade-in-up">Clareza, confiança e crescimento</div>
                <h1 className="fade-in-up delay-1">
                  Contabilidade com mais{' '}
                  <span key={animatedWords[wordIndex]} className="animated-word">
                    {animatedWords[wordIndex]}
                  </span>{' '}
                  para o seu negócio.
                </h1>
                <p className="fade-in-up delay-2">
                  Consultoria contábil moderna para decisões mais inteligentes, atendimento
                  próximo e uma estrutura completa de BPO para apoiar a evolução da sua empresa.
                </p>
                <div className="hero-actions fade-in-up delay-3">
                  <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                    Solicitar contato
                  </a>
                  <a className="btn btn-secondary btn-soft" href="#sobre">
                    Conheça a OxyCont
                  </a>
                </div>
              </div>

              <div className="hero-side-card fade-in-up delay-4">
                <h3>Nova apresentação da marca</h3>
                <div className="hero-side-grid">
                  <div className="hero-mini">
                    <strong>Posicionamento</strong>
                    <span>Atuação consultiva e estratégica</span>
                  </div>
                  <div className="hero-mini">
                    <strong>Essência</strong>
                    <span>Atendimento próximo e exclusivo</span>
                  </div>
                </div>
                <div className="hero-mini hero-mini-structure">
                  <strong>Estrutura</strong>
                  <span>Contábil, fiscal, financeiro, folha e demonstração financeira.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre">
          <div className="container about-grid">
            <div className="about-copy">
              <p className="section-kicker">Sobre a OxyCont</p>
              <h2 className="section-title">Muito além da contabilidade tradicional.</h2>
              <p>
                A OxyCont nasceu com o propósito de oferecer uma contabilidade mais clara,
                estratégica e próxima do negócio. Inspirada no conceito de oxigênio,
                acreditamos que a contabilidade deve ser essencial para a saúde, a organização
                e o crescimento sustentável das empresas.
              </p>
              <p>
                Mais do que cumprir obrigações, buscamos entregar inteligência, suporte e
                segurança para que gestores tomem decisões com mais confiança. Atuamos com uma
                abordagem consultiva, unindo conhecimento técnico, visão empresarial e
                atendimento personalizado para acompanhar cada cliente de forma próxima e
                consistente.
              </p>
              <p>
                Nosso compromisso é construir relações de longo prazo, com atendimento
                exclusivo, comunicação transparente e soluções que realmente apoiem a rotina e os
                objetivos de cada empresa. Para nós, contabilidade não é apenas processo: é base
                para crescimento, controle e evolução.
              </p>
            </div>

            <aside className="systems">
              <h3>Experiência com sistemas de mercado</h3>
              <p>
                Temos experiência em operações e rotinas que envolvem diferentes plataformas
                empresariais e contábeis, facilitando integração, adaptação e fluidez nos
                processos dos clientes.
              </p>
              <div className="systems-grid">
                {systems.map((system) => (
                  <div key={system} className="system-pill">
                    {system}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="servicos" className="services">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Nossos serviços</p>
              <h2 className="section-title">
                Estrutura completa de BPO, consultoria e suporte contábil estratégico.
              </h2>
              <p className="section-sub">
                Atuamos de forma integrada para apoiar empresas com mais organização,
                eficiência, segurança técnica e visão de crescimento.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article
                  key={service.title}
                  className={`service-card ${service.featured ? 'featured' : ''}`}
                >
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="diferenciais">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Diferenciais</p>
              <h2 className="section-title">
                Atendimento próximo, visão consultiva e compromisso real com cada cliente.
              </h2>
              <p className="section-sub">
                A OxyCont combina técnica, personalização e visão de negócio para entregar uma
                experiência mais completa do que a contabilidade operacional tradicional.
              </p>
            </div>

            <div className="diff-grid">
              {differentials.map((item) => (
                <article key={item.n} className="diff-card">
                  <div className="diff-icon">{item.n}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="contact">
          <div className="container contact-grid">
            <div className="contact-panel">
              <p className="section-kicker">Contato</p>
              <h2 className="section-title">Vamos conversar</h2>
              <p>
                Preencha o formulário para abrir sua mensagem no e-mail da OxyCont,
                ou fale conosco diretamente pelo WhatsApp.
              </p>

              <div className="contact-list">
                <div className="contact-item">
                  <small>E-mail</small>
                  <a href="mailto:felipe.reis@oxycont.com.br">felipe.reis@oxycont.com.br</a>
                </div>
                <div className="contact-item">
                  <small>WhatsApp</small>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer">
                    +55 11 98342-8801
                  </a>
                </div>
              </div>
            </div>

            <div className="form-panel">
              <form onSubmit={onSubmit}>
                <input className="field" name="nome" type="text" placeholder="Seu nome" required />
                <input className="field" name="email" type="email" placeholder="Seu e-mail" required />
                <textarea className="field" name="mensagem" placeholder="Como a OxyCont pode ajudar?" required />
                <button className="btn btn-secondary submit-button" type="submit">
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <a className="floating" href={WHATSAPP} target="_blank" rel="noreferrer">
        Fale conosco
      </a>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} OxyCont. Todos os direitos reservados.</div>
      </footer>
    </>
  )
}
