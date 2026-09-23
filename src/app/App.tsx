import { useState, useEffect, useRef } from "react";
import {
  Zap, Droplets, Hammer, Paintbrush, Layers, Thermometer,
  ChevronLeft, ChevronRight, Star, MapPin, Phone, Mail, Clock,
  Menu, X, Instagram, ArrowDown, ExternalLink, Plus,
  ClipboardList, HardHat, Key, Shield, Users,
  CheckCircle, MessageCircle, ArrowUp, Building2, Wrench, Home, Grid2X2,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoImg from "@/imports/Logo.png";
import proj1a from "@/imports/WhatsApp_Image_2026-07-27_at_15.35.03__2_.jpeg";
import proj1b from "@/imports/WhatsApp_Image_2026-07-27_at_15.35.03__3_.jpeg";
import proj2a from "@/imports/wc1.png";
import proj2b from "@/imports/wc2.png";
import proj2c from "@/imports/ChatGPT_Image_4_08_2026__14_16_03.png";
import proj3a from "@/imports/Remodelacao_cozinha.png";
import proj3b from "@/imports/remodelacao_sala.png";
import proj3c from "@/imports/remodelacao_wc.png";

const GLOBAL_CSS = `
  *, *::before, *::after { box-sizing: border-box; }
  .sp { padding-left: 40px; padding-right: 40px; }
  @media(max-width: 768px) { .sp { padding-left: 24px; padding-right: 24px; } }
  @media(max-width: 480px) { .sp { padding-left: 16px; padding-right: 16px; } }
  .sv { padding-top: 96px; padding-bottom: 96px; }
  @media(max-width: 900px) { .sv { padding-top: 72px; padding-bottom: 72px; } }
  @media(max-width: 480px) { .sv { padding-top: 56px; padding-bottom: 56px; } }
  .h-section { font-size: clamp(26px, 3.2vw, 44px); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; }
`;

function useSEO() {
  useEffect(() => {
    document.documentElement.lang = "pt";
    document.title = "Machado & Campos — Construção e Reabilitação | Zona Norte";
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = "Empresa de construção e remodelação na zona Norte de Portugal. Remodelações totais e parciais, carpintaria, serralharia, pintura, eletricidade, pichelaria, capoto e tratamento de fachadas. Orçamento personalizado.";
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://www.machadocampos.pt";
  }, []);
}

const PHONE = "913 921 630";
const PHONE2 = "917 124 295";
const PHONE_HREF = "tel:+351913921630";
const PHONE2_HREF = "tel:+351917124295";
const WHATSAPP_HREF = "https://wa.me/351913921630?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento.";
const EMAIL = "geral@machadocampos.pt";
const INSTAGRAM_HREF = "https://www.instagram.com/machadoecampos/";
const NAVBAR_H = 72;

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "FAQ", href: "#faqs" },
  { label: "Contactos", href: "#contacto" },
];

const SERVICES = [
  {
    icon: <Home size={20} />,
    title: "Remodelações Totais",
    description: "Gestão completa da obra, do início ao fim. Coordenamos todas as especialidades com uma única equipa.",
  },
  {
    icon: <Grid2X2 size={20} />,
    title: "Remodelações Parciais",
    description: "Intervenções pontuais numa ou mais divisões, definidas com o cliente, sem perturbar o funcionamento do resto da casa.",
  },
  {
    icon: <HardHat size={20} />,
    title: "Construção",
    description: "Obras de construção nova e ampliação com acompanhamento técnico em todas as fases, desde a preparação do terreno até aos acabamentos.",
  },
  {
    icon: <Hammer size={20} />,
    title: "Carpintaria",
    description: "Mobiliário, roupeiros embutidos, portas e revestimentos em madeira concebidos à medida, com rigor dimensional e acabamentos cuidados.",
  },
  {
    icon: <Wrench size={20} />,
    title: "Serralharia",
    description: "Fabrico e instalação de estruturas metálicas, portões, gradeamentos, guardas e outros elementos em ferro ou aço.",
  },
  {
    icon: <Paintbrush size={20} />,
    title: "Pintura",
    description: "Preparação rigorosa das superfícies e aplicação de tintas de alta durabilidade. Interiores e exteriores, acabamentos lisos, texturados ou decorativos.",
  },
  {
    icon: <Layers size={20} />,
    title: "Tetos Falsos e Pladur",
    description: "Estruturas em gesso cartonado para regularização de alturas, isolamento acústico e integração de iluminação embutida.",
  },
  {
    icon: <Zap size={20} />,
    title: "Eletricidade",
    description: "Quadros elétricos, circuitos, iluminação e domótica. Instalações executadas por técnicos experientes.",
  },
  {
    icon: <Droplets size={20} />,
    title: "Pichelaria",
    description: "Instalação e substituição de redes de abastecimento e saneamento, com materiais de elevada durabilidade e estanqueidade.",
  },
  {
    icon: <Building2 size={20} />,
    title: "Tratamento de Fachadas",
    description: "Limpeza, recuperação e impermeabilização de fachadas deterioradas. Melhora a estética e a proteção do edifício a longo prazo.",
  },
  {
    icon: <Thermometer size={20} />,
    title: "Capoto",
    description: "Aplicação de sistemas de isolamento térmico pelo exterior (ETICS/capoto), com melhoria significativa do desempenho energético e conforto interior.",
  },
];

const PROCESS_STEPS = [
  {
    icon: <MessageCircle size={18} />,
    step: "01",
    title: "Primeiro Contacto",
    description: "Recebemos a sua mensagem, percebemos o que está em causa e agendamos uma visita sem qualquer compromisso.",
  },
  {
    icon: <MapPin size={18} />,
    step: "02",
    title: "Visita Técnica",
    description: "Deslocamo-nos ao local, avaliamos o espaço em detalhe e ouvimos o que pretende alcançar com a obra.",
  },
  {
    icon: <ClipboardList size={18} />,
    step: "03",
    title: "Proposta Detalhada",
    description: "Enviamos uma proposta por escrito com todos os trabalhos discriminados. Cada orçamento é personalizado para o seu projeto.",
  },
  {
    icon: <HardHat size={18} />,
    step: "04",
    title: "Execução da Obra",
    description: "A nossa equipa assume todos os trabalhos, com atualizações regulares e alguém disponível para qualquer questão durante toda a obra.",
  },
  {
    icon: <Key size={18} />,
    step: "05",
    title: "Entrega e Acompanhamento",
    description: "Verificamos cada detalhe antes de entregar o espaço. Permanecemos disponíveis durante o período de garantia.",
  },
];

const COMMITMENTS = [
  {
    icon: <ClipboardList size={20} />,
    title: "Orçamento Transparente",
    description: "Cada proposta é elaborada após visita técnica ao local e discrimina todos os trabalhos previstos, sem ambiguidades.",
  },
  {
    icon: <Users size={20} />,
    title: "Acompanhamento Dedicado",
    description: "Cada projeto tem um gestor responsável, disponível para esclarecer dúvidas e coordenar as equipas durante toda a obra.",
  },
  {
    icon: <HardHat size={20} />,
    title: "Execução com Rigor",
    description: "Trabalhamos com processos bem definidos, equipas com experiência e materiais de qualidade.",
  },
  {
    icon: <Shield size={20} />,
    title: "Garantia Legal",
    description: "Todos os trabalhos são executados em conformidade com a legislação em vigor e abrangidos pela garantia legal de cinco anos.",
  },
];

const PORTFOLIO = [
  {
    category: "Pintura e Pavimento",
    location: "Zona Norte",
    images: [proj1a, proj1b],
    alts: ["Sala de estar e zona de jantar - pintura e novo pavimento", "Sala de estar - pintura e novo pavimento"],
  },
  {
    category: "Remodelação de Casa de Banho",
    location: "Maia",
    images: [proj2a, proj2b, proj2c],
    alts: ["Casa de banho remodelada - base de duche e móvel de lavatório", "Casa de banho remodelada - duche e lavatório", "Casa de banho remodelada - sanita e revestimento"],
  },
  {
    category: "Remodelação de Apartamento T2",
    location: "Matosinhos",
    images: [proj3a, proj3b, proj3c],
    alts: ["Cozinha remodelada - apartamento T2", "Sala remodelada - apartamento T2", "Casa de banho remodelada - apartamento T2"],
  },
];


const FAQS = [
  {
    q: "Quanto custa uma remodelação?",
    a: "Cada orçamento é elaborado após visita técnica ao local. O valor depende da dimensão do espaço, do estado de conservação do imóvel, dos materiais escolhidos e das especialidades envolvidas. Não trabalhamos com preços fixos, a proposta reflete exatamente aquilo que está previsto fazer.",
  },
  {
    q: "Quanto tempo demora uma obra?",
    a: "O tempo de execução depende da dimensão, complexidade e características específicas de cada projeto. Antes de iniciar qualquer trabalho, apresentamos um cronograma detalhado com as fases previstas.",
  },
  {
    q: "Como posso pedir um orçamento?",
    a: "Através do formulário nesta página, por telefone ou por e-mail. Após o contacto, agendamos uma visita técnica ao local, sem qualquer compromisso. Na visita, avaliamos o espaço e, posteriormente, enviamos uma proposta por escrito com todos os trabalhos discriminados.",
  },
  {
    q: "Realizam remodelações completas, com todas as especialidades incluídas?",
    a: "Sim. Coordenamos obras integrais com todas as especialidades: eletricidade, pichelaria, carpintaria, serralharia, pintura, tetos falsos e outras. O seu contacto será sempre com a mesma pessoa durante toda a obra.",
  },
  {
    q: "Em que zonas do país trabalham?",
    a: "Atuamos principalmente na zona Norte de Portugal. Para projetos noutras regiões do país, a equipa pode deslocar-se mediante orçamento de deslocação, basta entrar em contacto para analisarmos o seu caso.",
  },
  {
    q: "Quais são as condições de pagamento?",
    a: "Os pagamentos são faseados de acordo com o avanço da obra. As condições ficam definidas antes do início dos trabalhos.",
  },
  {
    q: "Que garantia é prestada após a conclusão dos trabalhos?",
    a: "Todos os trabalhos estão abrangidos pela garantia legal prevista no Decreto-Lei n.º 84/2021. Em caso de anomalia detetada durante o período de garantia, deslocamo-nos ao local para resolver a situação sem custos adicionais.",
  },
  {
    q: "É possível habitar a casa durante as obras?",
    a: "Depende do tipo de intervenção. Em obras parciais é geralmente possível permanecer na habitação. Em remodelações integrais, recomendamos a saída temporária por razões de segurança e para garantir condições de trabalho adequadas.",
  },
];

const AREA_CITIES = [
  { name: "Porto", x: 108, y: 148 },
  { name: "Vila Nova de Gaia", x: 118, y: 178 },
  { name: "Matosinhos", x: 90, y: 128 },
  { name: "Maia", x: 118, y: 108 },
  { name: "Gondomar", x: 148, y: 162 },
  { name: "Valongo", x: 152, y: 128 },
  { name: "Paredes", x: 182, y: 128 },
  { name: "Penafiel", x: 200, y: 152 },
  { name: "Espinho", x: 96, y: 210 },
  { name: "Santa Maria da Feira", x: 138, y: 220 },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function FadeUp({ children, delay = 0, className = "", style = {} }: {
  children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => setVisible(true), 800 + delay * 1000);
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); clearTimeout(timer); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => { obs.disconnect(); clearTimeout(timer); };
  }, [delay]);
  return (
    <div ref={ref} className={className} style={{ ...style, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s` }}>
      {children}
    </div>
  );
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12, color: light ? "rgba(255,255,255,0.4)" : "#9ca3af" }}>
      {children}
    </p>
  );
}

const ctaBtn: React.CSSProperties = {
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  padding: "12px 28px", background: "#1c1c1c", color: "#fff", border: "none",
  borderRadius: 2, cursor: "pointer", fontSize: 12, fontWeight: 700,
  letterSpacing: "0.09em", textTransform: "uppercase", transition: "background 0.2s",
  fontFamily: "inherit", whiteSpace: "nowrap",
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleLink = (href: string) => { setOpen(false); scrollTo(href); };

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      <style>{`
        .nb-inner {
          max-width: 1320px; margin: 0 auto; height: ${NAVBAR_H}px;
          display: flex; align-items: center; gap: 0; padding: 0 40px;
        }
        @media(max-width:1024px) { .nb-inner { padding: 0 28px; } }
        @media(max-width:768px)  { .nb-inner { padding: 0 20px; } }

        .nb-logo-btn { background:none; border:none; cursor:pointer; padding:0; line-height:0; flex-shrink:0; margin-right:40px; }
        @media(max-width:1024px) { .nb-logo-btn { margin-right:28px; } }

        .nb-nav { display:flex; align-items:center; gap:6px; flex:1; }
        .nav-link {
          background: none; border: none; cursor: pointer; padding: 6px 11px;
          font-size: 12.5px; font-weight: 400; color: #6b7280; letter-spacing: 0.01em;
          transition: color 0.18s; white-space: nowrap; font-family: inherit; border-radius: 2px;
          line-height: 1;
        }
        .nav-link:hover { color: #1c1c1c; }

        .nb-right { display:flex; align-items:center; gap:20px; flex-shrink:0; margin-left:32px; }
        @media(max-width:1024px) { .nb-right { gap:16px; margin-left:20px; } }

        .nb-phones { display:flex; flex-direction:column; align-items:flex-end; gap:0; }
        .nb-phone {
          font-size: 11px; font-weight: 500; color: #6b7280; text-decoration: none;
          letter-spacing: 0.015em; transition: color 0.18s; line-height: 1.55;
          white-space: nowrap;
        }
        .nb-phone:hover { color: #1c1c1c; }

        .nb-divider { width:1px; height:22px; background:rgba(0,0,0,0.1); flex-shrink:0; }

        .nb-cta {
          background: #1c1c1c; color: #fff; border: none; cursor: pointer;
          font-size: 11px; font-weight: 600; padding: 8px 16px; border-radius: 2px;
          letter-spacing: 0.07em; text-transform: uppercase; transition: background 0.18s;
          white-space: nowrap; font-family: inherit; flex-shrink: 0; line-height: 1;
        }
        .nb-cta:hover { background: #333; }

        .mob-toggle { display:none; background:none; border:none; cursor:pointer; padding:5px; color:#1c1c1c; line-height:0; flex-shrink:0; margin-left:auto; }

        @media(max-width:768px) {
          .nb-nav   { display:none !important; }
          .nb-right { display:none !important; }
          .mob-toggle { display:flex; }
        }

        .mob-drawer { display:none; background:#fff; border-top:1px solid rgba(0,0,0,0.06); }
        @media(max-width:768px) { .mob-drawer { display:block; } }

        .mob-menu-item {
          text-align:left; padding:13px 0; font-size:14.5px; font-weight:400;
          color:#1c1c1c; background:none; border:none;
          border-bottom:1px solid rgba(0,0,0,0.05); cursor:pointer;
          font-family:inherit; width:100%; letter-spacing:0.01em;
        }
        .mob-cta {
          margin-top:16px; padding:13px 0; font-size:12.5px; font-weight:700;
          letter-spacing:0.08em; text-transform:uppercase; background:#1c1c1c;
          color:#fff; border:none; border-radius:2px; cursor:pointer;
          font-family:inherit; width:100%;
        }
        .mob-phones { margin-top:14px; display:flex; flex-direction:column; gap:5px; }
        .mob-phone-link {
          display:flex; align-items:center; gap:7px; font-size:13px;
          font-weight:500; color:#4b5563; text-decoration:none;
        }
      `}</style>

      <div className="nb-inner">
        <button className="nb-logo-btn" onClick={() => scrollTo("#inicio")}>
          <ImageWithFallback className="m-[0px]" src={logoImg} alt="Machado &amp; Campos" style={{ width: 120, height: "auto", objectFit: "contain", display: "block" }} />
        </button>

        <nav className="nb-nav" aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <button key={l.href} className="nav-link" onClick={() => handleLink(l.href)}>{l.label}</button>
          ))}
        </nav>

        <div className="nb-right">
          <div className="nb-phones">
            <a href={PHONE_HREF} className="nb-phone">{PHONE}</a>
            <a href={PHONE2_HREF} className="nb-phone">{PHONE2}</a>
          </div>
          <div className="nb-divider" />
          <button onClick={() => handleLink("#contacto")} className="nb-cta">Pedir orçamento</button>
        </div>

        <button
          className="mob-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className="mob-drawer"
        style={{ overflow: "hidden", maxHeight: open ? 480 : 0, opacity: open ? 1 : 0, transition: "max-height 0.3s ease, opacity 0.22s ease" }}
      >
        <div style={{ padding: "4px 20px 24px" }}>
          {NAV_LINKS.map((l) => (
            <button key={l.href} className="mob-menu-item" onClick={() => handleLink(l.href)}>{l.label}</button>
          ))}
          <div className="mob-phones">
            <a href={PHONE_HREF} className="mob-phone-link"><Phone size={12} />{PHONE}</a>
            <a href={PHONE2_HREF} className="mob-phone-link"><Phone size={12} />{PHONE2}</a>
          </div>
          <button className="mob-cta" onClick={() => handleLink("#contacto")}>Pedir Orçamento</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <style>{`
        @keyframes hFadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes hBounce { 0%,100%{transform:translateY(0);} 50%{transform:translateY(6px);} }
        .h-t1{animation:hFadeUp 0.7s ease 0.2s both;}
        .h-t2{animation:hFadeUp 0.8s ease 0.4s both;}
        .h-t3{animation:hFadeUp 0.7s ease 0.6s both;}
        .h-t4{animation:hFadeUp 0.6s ease 0.78s both;}
        .h-t5{animation:hFadeUp 0.6s ease 0.92s both;}
        .h-arrow{animation:hBounce 2s ease-in-out infinite;}
        .hero-cta-wrap { display:flex; gap:10px; flex-wrap:wrap; }
        .hero-btn-p { padding:13px 30px; background:#1c1c1c; color:#fff; border:none; cursor:pointer; font-size:12.5px; font-weight:700; letter-spacing:0.09em; text-transform:uppercase; border-radius:2px; transition:background 0.2s; font-family:inherit; }
        .hero-btn-p:hover { background:#333; }
        .hero-btn-s { padding:13px 24px; background:transparent; color:#1c1c1c; border:1.5px solid rgba(0,0,0,0.22); cursor:pointer; font-size:12.5px; font-weight:500; border-radius:2px; transition:border-color 0.2s,background 0.2s; font-family:inherit; }
        .hero-btn-s:hover { border-color:#1c1c1c; background:rgba(0,0,0,0.03); }
        .hero-inner { position:relative; z-index:10; width:100%; max-width:1320px; margin:0 auto; padding:0 40px; padding-top:${NAVBAR_H + 64}px; padding-bottom:80px; }
        @media(max-width:768px) { .hero-inner { padding-left:24px; padding-right:24px; padding-top:${NAVBAR_H + 48}px; padding-bottom:64px; } }
        @media(max-width:480px) { .hero-inner { padding-left:16px; padding-right:16px; } }
        .hero-content { max-width:580px; }
        @media(max-width:600px) { .hero-content { max-width:100%; } .hero-cta-wrap { flex-direction:column; } .hero-btn-p,.hero-btn-s { text-align:center; } }
        .hero-eyebrow { font-size:10px; font-weight:600; letter-spacing:0.24em; text-transform:uppercase; color:#9ca3af; margin-bottom:20px; }
        .hero-h1 { font-size:clamp(36px,5.5vw,66px); font-weight:700; color:#1c1c1c; line-height:1.04; margin-bottom:18px; letter-spacing:-0.03em; }
        .hero-sub { font-size:clamp(14px,1.5vw,16px); font-weight:400; color:#555; line-height:1.85; margin-bottom:32px; max-width:460px; }
        @media(max-width:600px) { .hero-sub { max-width:100%; } }
        .hero-trust { margin-top:36px; padding-top:22px; border-top:1px solid rgba(0,0,0,0.07); display:flex; align-items:flex-start; gap:9px; }
        .hero-trust span { font-size:11.5px; color:#9ca3af; line-height:1.6; }
      `}</style>

      <div style={{ position: "absolute", inset: 0 }}>
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&auto=format" alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.88) 40%, rgba(255,255,255,0.55) 65%, rgba(255,255,255,0.08) 100%)" }} />

      <div className="hero-inner">
        <div className="hero-content">
          <p className="h-t1 hero-eyebrow">Construção e Reabilitação - Zona Norte de Portugal</p>
          <h1 className="h-t2 font-display hero-h1">
            Remodelações<br />
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "#6b7280" }}>à sua medida</span>
          </h1>
          <p className="h-t3 hero-sub">
            Trabalhamos com rigor, qualidade e atenção ao detalhe para criar espaços funcionais e duradouros.
          </p>
          <div className="h-t4 hero-cta-wrap">
            <button className="hero-btn-p" onClick={() => scrollTo("#contacto")}>Pedir Orçamento</button>
            <button className="hero-btn-s" onClick={() => scrollTo("#projetos")}>Ver Projetos</button>
          </div>
          <div className="h-t5 hero-trust">
            <Shield size={13} style={{ color: "#b0b7c0", flexShrink: 0, marginTop: 2 }} />
            <span>Garantia legal de 5 anos sobre todos os trabalhos realizados - Decreto-Lei n.º 84/2021.</span>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c4c4c4" }}>Explorar</span>
        <button onClick={() => scrollTo("#servicos")} className="h-arrow" style={{ background: "none", border: "none", cursor: "pointer", color: "#c4c4c4", display: "flex" }} aria-label="Ver serviços">
          <ArrowDown size={15} />
        </button>
      </div>
    </section>
  );
}

function Commitment() {
  return (
    <section style={{ padding: "60px 0", background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
      <style>{`
        .commit-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:0 32px; }
        @media(max-width:900px) { .commit-grid { grid-template-columns:repeat(2,1fr); gap:0 24px; } }
        @media(max-width:480px) { .commit-grid { grid-template-columns:1fr; } }
        .commit-card { border-top:2px solid rgba(0,0,0,0.07); padding:24px 16px; transition:border-color 0.25s; }
        .commit-card:hover { border-top-color:#1c1c1c; }
        .commit-icon { color:#1c1c1c; margin-bottom:14px; opacity:0.38; transition:opacity 0.25s; }
        .commit-card:hover .commit-icon { opacity:1; }
        @media(max-width:900px) { .commit-card { padding-bottom:28px; } }
      `}</style>
      <div className="sp" style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div className="commit-grid">
          {COMMITMENTS.map((c, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div className="commit-card">
                <div className="commit-icon">{c.icon}</div>
                <h3 style={{ fontSize: 13.5, fontWeight: 600, color: "#1c1c1c", lineHeight: 1.35, marginBottom: 7 }}>{c.title}</h3>
                <p style={{ fontSize: 12.5, color: "#6b7280", lineHeight: 1.75 }}>{c.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" style={{ background: "#f9f9f9", borderTop: "1px solid rgba(0,0,0,0.06)" }} className="sv">
      <style>{`
        .svc-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; align-items:stretch; }
        @media(max-width:1100px) { .svc-grid { grid-template-columns:repeat(3,1fr); } }
        @media(max-width:720px)  { .svc-grid { grid-template-columns:repeat(2,1fr); } }
        @media(max-width:400px)  { .svc-grid { grid-template-columns:1fr; } }
        .svc-cell { display:flex; flex-direction:column; }
        .svc-card { background:#fff; border:1px solid rgba(0,0,0,0.08); border-radius:3px; padding:24px 20px 20px; display:flex; flex-direction:column; flex:1; transition:box-shadow 0.25s,border-color 0.25s,transform 0.22s; }
        .svc-card:hover { box-shadow:0 6px 28px rgba(0,0,0,0.07); border-color:rgba(0,0,0,0.14); transform:translateY(-2px); }
        .svc-icon-wrap { width:38px; height:38px; border-radius:2px; background:#f3f4f6; display:flex; align-items:center; justify-content:center; color:#1c1c1c; margin-bottom:12px; flex-shrink:0; transition:background 0.22s,color 0.22s; }
        .svc-card:hover .svc-icon-wrap { background:#1c1c1c; color:#fff; }
        .svc-hdr { display:flex; align-items:flex-end; justify-content:space-between; gap:32px; margin-bottom:44px; flex-wrap:wrap; }
        @media(max-width:768px) { .svc-hdr { flex-direction:column; align-items:flex-start; gap:12px; margin-bottom:32px; } }
        .svc-hdr-desc { font-size:14px; color:#6b7280; line-height:1.75; max-width:380px; }
        @media(max-width:768px) { .svc-hdr-desc { max-width:100%; } }
      `}</style>
      <div className="sp" style={{ maxWidth: 1320, margin: "0 auto" }}>
        <FadeUp>
          <div className="svc-hdr">
            <div>
              <SectionLabel>Serviços</SectionLabel>
              <h2 className="font-display h-section" style={{ color: "#1c1c1c" }}>O que fazemos</h2>
            </div>
            <p className="svc-hdr-desc">
              Trabalhamos com equipas próprias em todas as especialidades, da preparação aos acabamentos.
            </p>
          </div>
        </FadeUp>
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <FadeUp key={i} delay={i * 0.03} className="svc-cell">
              <div className="svc-card">
                <div className="svc-icon-wrap">{s.icon}</div>
                <h3 style={{ fontSize: 13.5, fontWeight: 600, color: "#1c1c1c", lineHeight: 1.3, marginBottom: 7 }}>{s.title}</h3>
                <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.75 }}>{s.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.3} style={{ marginTop: 40, textAlign: "center" }}>
          <button style={ctaBtn} onClick={() => scrollTo("#contacto")} onMouseEnter={e => (e.currentTarget.style.background = "#333")} onMouseLeave={e => (e.currentTarget.style.background = "#1c1c1c")}>
            Pedir Orçamento
          </button>
        </FadeUp>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="processo" style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)" }} className="sv">
      <style>{`
        .proc-layout { display:grid; grid-template-columns:1fr 1fr; gap:0 80px; align-items:start; }
        @media(max-width:900px) { .proc-layout { grid-template-columns:1fr; gap:48px 0; } }
        .proc-sticky { position:sticky; top:${NAVBAR_H + 28}px; }
        @media(max-width:900px) { .proc-sticky { position:static; } }
        .tl-step { display:grid; grid-template-columns:60px 1fr; gap:0 20px; align-items:flex-start; }
        .tl-node { display:flex; flex-direction:column; align-items:center; }
        .tl-dot { width:42px; height:42px; border-radius:50%; background:#fff; border:1.5px solid rgba(0,0,0,0.11); display:flex; align-items:center; justify-content:center; color:#6b7280; flex-shrink:0; transition:background 0.25s,border-color 0.25s,color 0.25s; }
        .tl-step:hover .tl-dot { background:#1c1c1c; border-color:#1c1c1c; color:#fff; }
        .tl-line { width:1px; flex:1; background:rgba(0,0,0,0.08); min-height:36px; }
        .tl-body { padding-bottom:36px; }
        .tl-step:last-child .tl-line { display:none; }
        .tl-step:last-child .tl-body { padding-bottom:0; }
        @media(max-width:480px) { .tl-step { grid-template-columns:48px 1fr; gap:0 14px; } .tl-dot { width:36px; height:36px; } }
      `}</style>
      <div className="sp" style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div className="proc-layout">
          <div className="proc-sticky">
            <FadeUp>
              <SectionLabel>Como Trabalhamos</SectionLabel>
              <h2 className="font-display h-section" style={{ color: "#1c1c1c", marginBottom: 16 }}>Do primeiro contacto à entrega</h2>
              <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, maxWidth: 360, marginBottom: 32 }}>
                Um processo claro, sem surpresas - para que saiba o que esperar em cada fase da obra.
              </p>
              <button style={ctaBtn} onClick={() => scrollTo("#contacto")} onMouseEnter={e => (e.currentTarget.style.background = "#333")} onMouseLeave={e => (e.currentTarget.style.background = "#1c1c1c")}>
                Pedir Orçamento
              </button>
            </FadeUp>
          </div>
          <div>
            {PROCESS_STEPS.map((step, i) => (
              <FadeUp key={i} delay={i * 0.09}>
                <div className="tl-step">
                  <div className="tl-node">
                    <div className="tl-dot">{step.icon}</div>
                    <div className="tl-line" />
                  </div>
                  <div className="tl-body">
                    <p style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d1d5db", marginBottom: 6 }}>{step.step}</p>
                    <h3 className="font-display" style={{ fontSize: 18, fontWeight: 700, color: "#1c1c1c", marginBottom: 6, lineHeight: 1.2, letterSpacing: "-0.01em" }}>{step.title}</h3>
                    <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.75 }}>{step.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="projetos" style={{ background: "#f9f9f9", borderTop: "1px solid rgba(0,0,0,0.06)" }} className="sv">
      <style>{`
        .port-img { border-radius:3px; overflow:hidden; background:#e5e7eb; }
        .port-img img { width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.4s ease; }
        .port-img:hover img { transform:scale(1.02); }
        .port-project { margin-bottom:56px; }
        .port-project:last-child { margin-bottom:0; }
        .port-project-hdr { display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; flex-wrap:wrap; gap:8px; }
        .port-2col { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        @media(max-width:640px) { .port-2col { grid-template-columns:1fr; } }
        .port-3col { display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; }
        @media(max-width:900px) { .port-3col { grid-template-columns:1fr 1fr; } }
        @media(max-width:480px) { .port-3col { grid-template-columns:1fr; } }
      `}</style>
      <div className="sp" style={{ maxWidth: 1320, margin: "0 auto" }}>
        <FadeUp style={{ marginBottom: 44 }}>
          <SectionLabel>Projetos</SectionLabel>
          <h2 className="font-display h-section" style={{ color: "#1c1c1c" }}>Trabalhos executados</h2>
        </FadeUp>

        {PORTFOLIO.map((project, pi) => (
          <FadeUp key={pi} delay={pi * 0.05} className="port-project">
            <div className="port-project-hdr">
              <p style={{ fontSize: 13.5, fontWeight: 600, color: "#1c1c1c" }}>{project.category}</p>
              <p style={{ fontSize: 11, color: "#9ca3af", display: "flex", alignItems: "center", gap: 4 }}>
                <MapPin size={10} />{project.location}
              </p>
            </div>
            <div className={project.images.length === 3 ? "port-3col" : "port-2col"}>
              {project.images.map((src, i) => (
                <div key={i} className="port-img" style={{ aspectRatio: project.images.length === 3 ? "3/4" : "4/3" }}>
                  <img src={src} alt={project.alts[i]} />
                </div>
              ))}
            </div>
          </FadeUp>
        ))}

        <FadeUp delay={0.2} style={{ marginTop: 44, textAlign: "center" }}>
          <button style={ctaBtn} onClick={() => scrollTo("#contacto")} onMouseEnter={e => (e.currentTarget.style.background = "#333")} onMouseLeave={e => (e.currentTarget.style.background = "#1c1c1c")}>
            Pedir Orçamento
          </button>
        </FadeUp>
      </div>
    </section>
  );
}

function AreasMap() {
  return (
    <div style={{ width: "100%", aspectRatio: "4/3", borderRadius: 3, overflow: "hidden", border: "1px solid rgba(0,0,0,0.1)", position: "relative", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
      <iframe
        title="Zona de atuação - Machado & Campos"
        src="https://maps.google.com/maps?q=41.35,-8.65&z=8&output=embed&hl=pt"
        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href="https://www.openstreetmap.org/?mlat=41.1579&mlon=-8.6291#map=10/41.1579/-8.6291"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: "absolute", bottom: 8, right: 8, fontSize: 10, color: "#1c1c1c", background: "rgba(255,255,255,0.88)", padding: "3px 8px", borderRadius: 2, border: "1px solid rgba(0,0,0,0.1)", textDecoration: "none", fontFamily: "Inter, sans-serif", backdropFilter: "blur(4px)" }}
      >
        Ver mapa completo
      </a>
    </div>
  );
}


function Areas() {
  return (
    <section id="areas" style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)" }} className="sv">
      <style>{`
        .areas-layout { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:start; }
        @media(max-width:900px) { .areas-layout { grid-template-columns:1fr; gap:44px 0; } }
        .area-pill { font-size:12px; font-weight:500; color:#1c1c1c; background:#f4f4f4; padding:5px 12px; border-radius:2px; border:1px solid rgba(0,0,0,0.07); transition:background 0.2s,color 0.2s; display:inline-block; }
        .area-pill:hover { background:#1c1c1c; color:#fff; }
      `}</style>
      <div className="sp" style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div className="areas-layout">
          <FadeUp>
            <SectionLabel>Áreas de Atuação</SectionLabel>
            <h2 className="font-display h-section" style={{ color: "#1c1c1c", marginBottom: 16 }}>Onde trabalhamos</h2>
            <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, marginBottom: 24 }}>
              Atuamos principalmente na zona Norte de Portugal. Para projetos noutras regiões do país, a equipa pode deslocar-se mediante orçamento de deslocação.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {[
                { icon: <MapPin size={13} />, text: "Sediados no Porto - atuação em toda a zona Norte" },
                { icon: <CheckCircle size={13} />, text: "Visita técnica sem compromisso na zona de atuação" },
                { icon: <Building2 size={13} />, text: "Deslocação a outras regiões do país mediante orçamento prévio" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                  <div style={{ color: "#9ca3af", flexShrink: 0, marginTop: 1 }}>{item.icon}</div>
                  <span style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.6 }}>{item.text}</span>
                </div>
              ))}
            </div>
            <button style={ctaBtn} onClick={() => scrollTo("#contacto")} onMouseEnter={e => (e.currentTarget.style.background = "#333")} onMouseLeave={e => (e.currentTarget.style.background = "#1c1c1c")}>
              Pedir Orçamento
            </button>
          </FadeUp>
          <FadeUp delay={0.1}>
            <AreasMap />
            <p style={{ fontSize: 10.5, color: "#d1d5db", marginTop: 8, textAlign: "center", letterSpacing: "0.03em" }}>Mapa ilustrativo - Zona Norte de Portugal</p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", tipo: "", mensagem: "" });
  const [sent, setSent] = useState(false);
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  const fld: React.CSSProperties = { width: "100%", border: "1px solid rgba(255,255,255,0.13)", background: "rgba(255,255,255,0.06)", padding: "12px 14px", fontSize: 13, color: "#fff", borderRadius: 2, outline: "none", fontFamily: "inherit", boxSizing: "border-box" };
  const lbl: React.CSSProperties = { display: "block", fontSize: 9.5, fontWeight: 600, letterSpacing: "0.17em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)", marginBottom: 6 };

  return (
    <section id="contacto" style={{ background: "#1c1c1c", borderTop: "1px solid rgba(255,255,255,0.05)" }} className="sv">
      <style>{`
        .cta-layout { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:start; }
        @media(max-width:900px) { .cta-layout { grid-template-columns:1fr; gap:44px 0; } }
        .cta-form-row { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        @media(max-width:480px) { .cta-form-row { grid-template-columns:1fr; } }
        input::placeholder, textarea::placeholder { color:rgba(255,255,255,0.28); }
        input:focus, textarea:focus, select:focus { border-color:rgba(255,255,255,0.3) !important; }
      `}</style>
      <div className="sp" style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div className="cta-layout">
          <FadeUp>
            <SectionLabel light>Contacto</SectionLabel>
            <h2 className="font-display h-section" style={{ color: "#fff", marginBottom: 16 }}>Peça o seu orçamento</h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, marginBottom: 32, maxWidth: 340 }}>
              Preencha o formulário ou contacte-nos diretamente. Agendamos uma visita técnica e enviamos uma proposta por escrito, sem qualquer compromisso.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              {[
                { icon: <Phone size={14} />, label: "Telefone", value: PHONE, href: PHONE_HREF },
                { icon: <Phone size={14} />, label: "Telefone", value: PHONE2, href: PHONE2_HREF },
                { icon: <Mail size={14} />, label: "E-mail", value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: <MapPin size={14} />, label: "Zona de Atuação", value: "Zona Norte - deslocação a outras regiões mediante orçamento", href: undefined },
                { icon: <Clock size={14} />, label: "Horário", value: "Seg. a Sex.: 08h00 - 18h00", href: undefined },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 2, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.32)", flexShrink: 0 }}>{item.icon}</div>
                  <div style={{ paddingTop: 2 }}>
                    <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: 1 }}>{item.label}</p>
                    {item.href
                      ? <a href={item.href} style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#fff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>{item.value}</a>
                      : <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{item.value}</p>}
                  </div>
                </div>
              ))}
            </div>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "11px 20px", background: "#25D366", color: "#fff", borderRadius: 2, textDecoration: "none", fontSize: 13, fontWeight: 600, transition: "background 0.2s" }} onMouseEnter={e => (e.currentTarget.style.background = "#1da856")} onMouseLeave={e => (e.currentTarget.style.background = "#25D366")}>
              <MessageCircle size={15} /> Falar via WhatsApp
            </a>
            <div style={{ marginTop: 28, paddingTop: 22, borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", gap: 7 }}>
              {[
                "Garantia legal de 5 anos sobre todos os trabalhos",
                "Visita técnica - sem compromisso",
                "Proposta por escrito com todos os trabalhos discriminados",
              ].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <CheckCircle size={11} style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
                  <span style={{ fontSize: 11.5, color: "rgba(255,255,255,0.32)" }}>{t}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 400, textAlign: "center", gap: 16 }}>
                <CheckCircle size={40} style={{ color: "#4ade80" }} />
                <h3 style={{ fontSize: 21, fontWeight: 700, color: "#fff" }}>Pedido recebido!</h3>
                <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, maxWidth: 280 }}>
                  Recebemos o seu pedido. Entraremos em contacto para agendar a visita técnica.
                </p>
                <button onClick={() => setSent(false)} style={{ marginTop: 4, padding: "10px 24px", background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2, cursor: "pointer", fontSize: 12.5, fontFamily: "inherit" }}>
                  Enviar outro pedido
                </button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div className="cta-form-row">
                  <div><label style={lbl}>Nome *</label><input type="text" name="nome" value={form.nome} onChange={handle} placeholder="Nome completo" required style={fld} /></div>
                  <div><label style={lbl}>Telefone *</label><input type="tel" name="telefone" value={form.telefone} onChange={handle} placeholder="+351 9XX XXX XXX" required style={fld} /></div>
                </div>
                <div><label style={lbl}>E-mail</label><input type="email" name="email" value={form.email} onChange={handle} placeholder="email@exemplo.pt" style={fld} /></div>
                <div>
                  <label style={lbl}>Tipo de Obra</label>
                  <select name="tipo" value={form.tipo} onChange={handle} style={{ ...fld, appearance: "none", WebkitAppearance: "none", cursor: "pointer" }}>
                    <option value="" style={{ background: "#1c1c1c" }}>Selecione o tipo de intervenção</option>
                    <option value="remodelacao-total" style={{ background: "#1c1c1c" }}>Remodelação Total</option>
                    <option value="remodelacao-parcial" style={{ background: "#1c1c1c" }}>Remodelação Parcial</option>
                    <option value="construcao" style={{ background: "#1c1c1c" }}>Construção</option>
                    <option value="carpintaria" style={{ background: "#1c1c1c" }}>Carpintaria</option>
                    <option value="serralharia" style={{ background: "#1c1c1c" }}>Serralharia</option>
                    <option value="pintura" style={{ background: "#1c1c1c" }}>Pintura</option>
                    <option value="eletricidade" style={{ background: "#1c1c1c" }}>Eletricidade</option>
                    <option value="pichelaria" style={{ background: "#1c1c1c" }}>Pichelaria</option>
                    <option value="fachadas" style={{ background: "#1c1c1c" }}>Tratamento de Fachadas / Capoto</option>
                    <option value="outro" style={{ background: "#1c1c1c" }}>Outro</option>
                  </select>
                </div>
                <div><label style={lbl}>Descrição do Projeto</label><textarea name="mensagem" value={form.mensagem} onChange={handle} placeholder="Localização, dimensão aproximada e o que pretende realizar..." rows={4} style={{ ...fld, resize: "none" }} /></div>
                <button type="submit" style={{ padding: "13px 0", background: "#fff", color: "#1c1c1c", border: "none", borderRadius: 2, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", marginTop: 4, transition: "background 0.2s", fontFamily: "inherit" }} onMouseEnter={e => (e.currentTarget.style.background = "#e5e7eb")} onMouseLeave={e => (e.currentTarget.style.background = "#fff")}>
                  Pedir Orçamento
                </button>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.18)", textAlign: "center" }}>Visita técnica - Proposta sem compromisso</p>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function FAQs() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faqs" style={{ background: "#f9f9f9" }} className="sv">
      <style>{`
        #faqs { border-top: 1px solid #eaeaea; }
        .faq-contact-btns { display:flex; gap:8px; justify-content:center; flex-wrap:wrap; }
        .faq-cbtn { display:inline-flex; align-items:center; gap:7px; padding:10px 18px; background:#1c1c1c; color:#fff; border-radius:2px; text-decoration:none; font-size:12.5px; font-weight:600; transition:background 0.2s; white-space:nowrap; }
        .faq-cbtn:hover { background:#333; }
        .faq-cbtn-wa { background:#25D366; }
        .faq-cbtn-wa:hover { background:#1da856 !important; }
      `}</style>
      <div className="sp" style={{ maxWidth: 720, margin: "0 auto" }}>
        <FadeUp style={{ textAlign: "center", marginBottom: 44 }}>
          <SectionLabel>Perguntas Frequentes</SectionLabel>
          <h2 className="font-display h-section" style={{ color: "#1c1c1c", marginBottom: 10 }}>Dúvidas frequentes</h2>
          <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.75, maxWidth: 400, margin: "0 auto" }}>
            As questões que surgem com mais frequência antes de iniciar uma obra.{" "}
            <button onClick={() => scrollTo("#contacto")} style={{ background: "none", border: "none", cursor: "pointer", color: "#1c1c1c", textDecoration: "underline", fontSize: "inherit", padding: 0, fontWeight: 500, fontFamily: "inherit" }}>
              Fale connosco
            </button>{" "}para qualquer outra dúvida.
          </p>
        </FadeUp>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <FadeUp key={i} delay={i * 0.03}>
                <div style={{ borderWidth: 1, borderStyle: "solid", borderColor: isOpen ? "#9ca3af" : "#e5e7eb", borderRadius: 2, overflow: "hidden", background: "#fff", transition: "border-color 0.2s" }}>
                  <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 18px", textAlign: "left", gap: 16, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                    <span style={{ fontSize: 13.5, fontWeight: 500, color: "#1c1c1c", lineHeight: 1.5 }}>{item.q}</span>
                    <span style={{ flexShrink: 0, width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", borderWidth: 1, borderStyle: "solid", borderColor: isOpen ? "#1c1c1c" : "#d1d5db", color: isOpen ? "#1c1c1c" : "#9ca3af", background: isOpen ? "#f3f4f6" : "transparent", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s,border-color 0.2s" }}>
                      <Plus size={10} />
                    </span>
                  </button>
                  <div style={{ overflow: "hidden", maxHeight: isOpen ? 600 : 0, opacity: isOpen ? 1 : 0, transition: "max-height 0.38s ease,opacity 0.28s ease" }}>
                    <div style={{ padding: "0 18px 18px" }}>
                      <div style={{ height: 1, background: "#f3f4f6", marginBottom: 10 }} />
                      <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.85 }}>{item.a}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
        <FadeUp delay={0.2} style={{ marginTop: 32, textAlign: "center", padding: "24px 20px", background: "#fff", borderWidth: 1, borderStyle: "solid", borderColor: "#e5e7eb", borderRadius: 2 }}>
          <p style={{ fontSize: 14, color: "#374151", fontWeight: 500, marginBottom: 3 }}>Tem uma dúvida específica sobre a sua obra?</p>
          <p style={{ fontSize: 12.5, color: "#6b7280", marginBottom: 16 }}>Contacte-nos diretamente e esclarecemos de imediato.</p>
          <div className="faq-contact-btns">
            <a href={PHONE_HREF} className="faq-cbtn"><Phone size={12} />{PHONE}</a>
            <a href={PHONE2_HREF} className="faq-cbtn"><Phone size={12} />{PHONE2}</a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="faq-cbtn faq-cbtn-wa"><MessageCircle size={12} /> WhatsApp</a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Footer() {
  const footerLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Como Trabalhamos", href: "#processo" },
    { label: "Projetos", href: "#projetos" },
    { label: "FAQ", href: "#faqs" },
    { label: "Contactos", href: "#contacto" },
    { label: "Áreas de Atuação", href: "#areas" },
  ];
  return (
    <footer style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <style>{`
        .ft-grid { display:grid; grid-template-columns:1.2fr 0.9fr 1fr; gap:48px; margin-bottom:44px; }
        @media(max-width:900px) { .ft-grid { grid-template-columns:1fr 1fr; } }
        @media(max-width:560px)  { .ft-grid { grid-template-columns:1fr; gap:32px; } }
        .ft-link { background:none; border:none; cursor:pointer; font-size:12.5px; color:#6b7280; padding:0; transition:color 0.2s; text-align:left; font-family:inherit; }
        .ft-link:hover { color:#1c1c1c; }
        .ft-alink { font-size:12.5px; color:#6b7280; text-decoration:none; transition:color 0.2s; }
        .ft-alink:hover { color:#1c1c1c; }
        .ft-social { width:32px; height:32px; border:1px solid #e5e7eb; display:inline-flex; align-items:center; justify-content:center; color:#6b7280; border-radius:2px; transition:border-color 0.2s,color 0.2s; }
        .ft-social:hover { border-color:#1c1c1c; color:#1c1c1c; }
        .ft-social-wa:hover { border-color:#25D366 !important; color:#25D366 !important; }
      `}</style>
      <div className="sp" style={{ maxWidth: 1320, margin: "0 auto", paddingTop: 52, paddingBottom: 24 }}>
        <div className="ft-grid">
          <div>
            <ImageWithFallback src={logoImg} alt="Machado &amp; Campos" style={{ height: 48, width: "auto", objectFit: "contain", display: "block", marginBottom: 14 }} />
            <p style={{ fontSize: 12.5, color: "#6b7280", lineHeight: 1.75, maxWidth: 240, marginBottom: 10 }}>
              Construção e remodelação de habitações e espaços comerciais. Garantia legal de cinco anos sobre todos os trabalhos.
            </p>
            <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 16 }}>Zona Norte de Portugal</p>
            <div style={{ display: "flex", gap: 6 }}>
              <a href={INSTAGRAM_HREF} target="_blank" rel="noopener noreferrer" aria-label="Instagram - Machado &amp; Campos" className="ft-social"><Instagram size={14} /></a>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="ft-social ft-social-wa"><MessageCircle size={14} /></a>
            </div>
          </div>
          <div>
            <p style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 16 }}>Navegação</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
              {footerLinks.map((l) => (
                <li key={l.href}><button className="ft-link" onClick={() => scrollTo(l.href)}>{l.label}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 16 }}>Informação Legal</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 9 }}>
              {["Política de Privacidade", "Termos e Condições", "Política de Cookies"].map((item) => (
                <li key={item}><a href="#" className="ft-alink">{item}</a></li>
              ))}
            </ul>
            <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "1px solid #fca5a5", background: "#fff1f2", padding: "9px 12px", borderRadius: 2, textDecoration: "none", transition: "background 0.2s" }} onMouseEnter={e => (e.currentTarget.style.background = "#ffe4e6")} onMouseLeave={e => (e.currentTarget.style.background = "#fff1f2")}>
              <div style={{ width: 26, height: 33, background: "#dc2626", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: 9, lineHeight: 1.2, textAlign: "center" }}>L<br />R</span>
              </div>
              <div>
                <p style={{ fontSize: 11.5, fontWeight: 600, color: "#1c1c1c", lineHeight: 1.3 }}>Livro de Reclamações</p>
                <p style={{ fontSize: 9.5, color: "#6b7280", display: "flex", alignItems: "center", gap: 3, marginTop: 1 }}>Eletrónico <ExternalLink size={8} /></p>
              </div>
            </a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: 18, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
          <p style={{ fontSize: 11, color: "#9ca3af" }}>&copy; {new Date().getFullYear()} Machado &amp; Campos, Lda. Todos os direitos reservados.</p>
          <p style={{ fontSize: 11, color: "#c4c4c4" }}>Zona Norte de Portugal</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" aria-label="Contactar via WhatsApp" style={{ position: "fixed", bottom: 22, right: 20, zIndex: 100, width: 48, height: 48, background: "#25D366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", boxShadow: "0 3px 14px rgba(37,211,102,0.38)", transition: "transform 0.2s" }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}>
        <MessageCircle size={20} />
      </a>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Voltar ao topo" style={{ position: "fixed", bottom: 78, right: 22, zIndex: 100, width: 36, height: 36, background: "#fff", border: "1px solid rgba(0,0,0,0.11)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b7280", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.09)", opacity: showTop ? 1 : 0, pointerEvents: showTop ? "auto" : "none", transition: "opacity 0.3s" }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#1c1c1c"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#6b7280"; }}>
        <ArrowUp size={13} />
      </button>
    </>
  );
}

export default function App() {
  useSEO();
  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <style>{GLOBAL_CSS}</style>
      <Navbar />
      <main>
        <Hero />
        <Commitment />
        <Services />
        <Process />
        <Portfolio />

        <Areas />
        <CTA />
        <FAQs />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
