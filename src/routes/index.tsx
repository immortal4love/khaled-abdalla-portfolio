import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Compass, Globe2, Mail, Menu, MessageCircle, MoveUpRight, Phone, X } from "lucide-react";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khaled Abdalla | Egypt Tour Guide — Turkish & English" },
      { name: "description", content: "Discover Egypt with Khaled Abdalla, a professional tour guide working in Turkish and English. Explore Cairo, Giza, Islamic Cairo, Luxor and more." },
      { property: "og:title", content: "Khaled Abdalla | Egypt Tour Guide" },
      { property: "og:description", content: "A personal journey through Egypt, guided in Turkish and English." },
    ],
  }),
  component: Index,
});

type Lang = "en" | "ar" | "tr";

const copy = {
  en: {
    navAbout: "About", navTours: "Journeys", navStories: "Field notes", navContact: "Contact",
    eyebrow: "EGYPT · TURKISH & ENGLISH", heroLine1: "Egypt, told", heroLine2: "with a human touch.",
    heroBody: "Explore the stories, places and people behind Egypt’s remarkable history — with a guide who makes every stop feel personal.",
    explore: "Explore the journeys", scroll: "SCROLL TO BEGIN", introLabel: "YOUR GUIDE IN EGYPT",
    aboutTitle: "More than places. A connection to the story.",
    aboutText: "I’m Khaled Abdalla, an Egypt-based tour guide working in Turkish and English. Having lived in Istanbul for 12 years, I understand how to make visitors feel at ease while discovering a new culture. My approach is simple: clear stories, thoughtful pacing and a genuine human connection.",
    aboutText2: "My background in tourism, hospitality and operations helps me look after both the details and the bigger picture — so you can focus on enjoying Egypt.",
    years: "12 years in Istanbul", languages: "Turkish & English", education: "Tourism & Hotels · 2005",
    journeyLabel: "CHOOSE YOUR WAY THROUGH EGYPT", journeyTitle: "Journeys shaped around you.", journeyText: "From the first pyramids to the lively streets of Cairo, explore Egypt at a pace that leaves room for questions, discoveries and unexpected moments.",
    cairo: "Cairo & Giza", cairoDesc: "The Pyramids, the Sphinx and the stories of ancient Memphis — a first encounter with Egypt’s timeless icons.",
    islamic: "Islamic Cairo", islamicDesc: "Mosques, madrasas, old gates and lively lanes. Read the city through its architecture, craft and everyday life.",
    luxor: "Luxor & Upper Egypt", luxorDesc: "Temples, royal tombs and the landscapes of the Nile Valley, explored through the lives of the people who shaped them.",
    tailored: "A journey made for you", tailoredDesc: "A flexible itinerary shaped around your interests, travel rhythm and the places you most want to understand.",
    fieldLabel: "NOTES FROM THE FIELD", fieldTitle: "Every place has a story worth hearing.",
    gemTitle: "Grand Egyptian Museum", gemDesc: "A new way to encounter thousands of years of Egyptian history — from monumental sculpture to the details of daily life.",
    cairoTitle: "Cairo, layer by layer", fieldCairoDesc: "A city where ancient, medieval and modern stories meet in the same street.",
    istTitle: "A Turkish perspective", istDesc: "Twelve years in Istanbul shaped my language, my outlook and the way I connect with Turkish-speaking travelers.",
    profileLabel: "A BACKGROUND BUILT AROUND PEOPLE", profileTitle: "Hospitality first. Stories always.",
    profileText: "My professional experience spans guest relations, tourism operations and guiding. Each role taught me something useful: how to listen, how to organise, and how to explain a place in a way that stays with you.",
    timeline1: "Guest Relations Officer", timeline2: "Operations Manager", timeline3: "Faculty of Tourism & Hotels",
    timelineDate1: "Klas Hotel Istanbul · 2021–2025", timelineDate2: "Olbia Travel & Tourism · 2018–2020", timelineDate3: "Graduate · 2005",
    contactLabel: "YOUR EGYPT STORY STARTS HERE", contactTitle: "Let’s plan a meaningful journey.",
    contactText: "Tell me what you’re curious about, when you’re visiting and what kind of experience you have in mind. We can shape the details together.",
    contactCta: "Chat on WhatsApp", emailCta: "Send an email", contactNote: "Choose the way you prefer to get in touch.",
    footerLine: "A thoughtful way to discover Egypt.", footerTop: "Back to top", menu: "Open menu", close: "Close menu",
    facts: "THE WAY I WORK", fact1: "Clear, natural explanations", fact2: "Flexible pace and thoughtful planning", fact3: "A personal connection to every place",
  },
  ar: {
    navAbout: "نبذة عني", navTours: "الجولات", navStories: "من الميدان", navContact: "تواصل",
    eyebrow: "مصر · التركية والإنجليزية", heroLine1: "اكتشف مصر", heroLine2: "بحكاية إنسانية.",
    heroBody: "تعرف على تاريخ مصر وأماكنها وناسها من خلال جولات تجمع بين المعلومة الواضحة والتجربة الشخصية.",
    explore: "اكتشف الجولات", scroll: "انزل لتبدأ الرحلة", introLabel: "مرشدك في مصر",
    aboutTitle: "مش مجرد أماكن... دي حكايات وروابط إنسانية.",
    aboutText: "أنا خالد عبد الله، مرشد سياحي في مصر، وبقدم الجولات باللغتين التركية والإنجليزية. عشت في إسطنبول 12 سنة، وده خلاني أفهم طبيعة الزائر التركي وأهمية إنه يحس بالراحة وهو بيكتشف ثقافة جديدة. أسلوبي بسيط: شرح واضح، ووقت مناسب، وتواصل إنساني حقيقي.",
    aboutText2: "خلفيتي في السياحة والضيافة وإدارة العمليات بتساعدني أهتم بالتفاصيل وبالصورة الكبيرة في نفس الوقت، علشان تركز أنت على الاستمتاع بمصر.",
    years: "12 سنة في إسطنبول", languages: "التركية والإنجليزية", education: "كلية السياحة والفنادق · 2005",
    journeyLabel: "اختار طريقك لاكتشاف مصر", journeyTitle: "رحلات تتشكل على ذوقك.", journeyText: "من الأهرامات إلى شوارع القاهرة النابضة بالحياة، نكتشف مصر بإيقاع يسمح بالأسئلة والتفاصيل واللحظات غير المتوقعة.",
    cairo: "القاهرة والجيزة", cairoDesc: "الأهرامات وأبو الهول وحكايات منف القديمة؛ بداية لا تُنسى مع أشهر رموز مصر.",
    islamic: "القاهرة الإسلامية", islamicDesc: "مساجد ومدارس وأبواب تاريخية وشوارع حية؛ نقرأ المدينة من خلال عمارتها وحرفها وحياة أهلها.",
    luxor: "الأقصر وصعيد مصر", luxorDesc: "المعابد والمقابر الملكية ومشهد النيل، من خلال حكايات الملوك والناس الذين صنعوا التاريخ.",
    tailored: "رحلة مصممة لك", tailoredDesc: "برنامج مرن يتشكل حسب اهتماماتك ووقتك والأماكن التي تحب أن تفهمها بعمق.",
    fieldLabel: "حكايات من الميدان", fieldTitle: "كل مكان وراه حكاية تستحق تتسمع.",
    gemTitle: "المتحف المصري الكبير", gemDesc: "طريقة جديدة لاكتشاف آلاف السنين من تاريخ مصر؛ من التماثيل الضخمة إلى تفاصيل الحياة اليومية.",
    cairoTitle: "القاهرة طبقة بعد طبقة", fieldCairoDesc: "مدينة بتتقابل فيها الحكايات القديمة والإسلامية والحديثة في نفس الشارع.",
    istTitle: "منظور تركي", istDesc: "12 سنة في إسطنبول أثرت في لغتي وطريقة تفكيري وتواصلي مع الزائرين الناطقين بالتركية.",
    profileLabel: "خبرة أساسها التعامل مع الناس", profileTitle: "الضيافة أولاً... والحكايات دائماً.",
    profileText: "خبرتي المهنية تجمع بين علاقات النزلاء وتشغيل شركات السياحة والإرشاد. كل تجربة علمتني حاجة مهمة: أسمع كويس، أنظم التفاصيل، وأشرح المكان بطريقة تفضل في الذاكرة.",
    timeline1: "مسؤول علاقات النزلاء", timeline2: "مدير عمليات", timeline3: "كلية السياحة والفنادق",
    timelineDate1: "Klas Hotel Istanbul · 2021–2025", timelineDate2: "Olbia Travel & Tourism · 2018–2020", timelineDate3: "التخرج · 2005",
    contactLabel: "حكايتك مع مصر تبدأ هنا", contactTitle: "تعالى نخطط لرحلة لها معنى.",
    contactText: "احكي لي عن اهتماماتك وموعد زيارتك ونوع التجربة اللي بتدور عليها، ونرتب التفاصيل مع بعض.",
    contactCta: "تواصل معي على واتساب", emailCta: "ابعت لي إيميل", contactNote: "اختار الطريقة الأنسب ليك للتواصل.",
    footerLine: "اكتشف مصر بحكاية مختلفة.", footerTop: "العودة للأعلى", menu: "افتح القائمة", close: "إغلاق القائمة",
    facts: "طريقتي في العمل", fact1: "شرح واضح وطبيعي", fact2: "إيقاع مرن وتنظيم باهتمام", fact3: "تواصل شخصي مع كل مكان",
  },
  tr: {
    navAbout: "Hakkımda", navTours: "Turlar", navStories: "Sahadan notlar", navContact: "İletişim",
    eyebrow: "MISIR · TÜRKÇE & İNGİLİZCE", heroLine1: "Mısır’ı", heroLine2: "insan hikâyeleriyle keşfedin.",
    heroBody: "Mısır’ın tarihini, mekânlarını ve insanlarını; samimi anlatım ve kişisel bir deneyimle keşfedin.",
    explore: "Yolculukları keşfet", scroll: "BAŞLAMAK İÇİN KAYDIR", introLabel: "MISIR’DA REHBERİNİZ",
    aboutTitle: "Sadece yerler değil, hikâyeler ve bağlar.",
    aboutText: "Ben Khaled Abdalla. Mısır’da Türkçe ve İngilizce turlar düzenleyen bir tur rehberiyim. İstanbul’da 12 yıl yaşadım. Bu deneyim, Türk misafirlerin kendilerini rahat hissetmelerinin ve yeni bir kültürü kendi ritimlerinde keşfetmelerinin ne kadar önemli olduğunu öğretti. Anlatımım sade: anlaşılır bilgiler, doğru tempo ve samimi iletişim.",
    aboutText2: "Turizm, konaklama ve operasyon alanındaki geçmişim sayesinde hem ayrıntılarla hem de büyük resimle ilgileniyorum; böylece siz Mısır’ın keyfini çıkarabilirsiniz.",
    years: "İstanbul’da 12 yıl", languages: "Türkçe ve İngilizce", education: "Turizm ve Otelcilik · 2005",
    journeyLabel: "MISIR’DA KENDİ YOLUNUZU SEÇİN", journeyTitle: "Size göre şekillenen yolculuklar.", journeyText: "Piramitlerden Kahire’nin hareketli sokaklarına kadar Mısır’ı; sorulara, keşiflere ve beklenmedik anlara yer bırakan bir tempoyla keşfedin.",
    cairo: "Kahire & Gize", cairoDesc: "Piramitler, Sfenks ve antik Memphis’in hikâyeleriyle Mısır’ın zamansız simgelerine ilk bakış.",
    islamic: "İslamî Kahire", islamicDesc: "Camiler, medreseler, eski kapılar ve canlı sokaklar. Şehri mimarisi, zanaatı ve günlük yaşamıyla okuyun.",
    luxor: "Luksor & Yukarı Mısır", luxorDesc: "Tapınaklar, kraliyet mezarları ve Nil Vadisi; tarihe yön veren insanların hikâyeleriyle.",
    tailored: "Size özel bir rota", tailoredDesc: "İlgi alanlarınıza, seyahat temponuza ve daha yakından tanımak istediğiniz yerlere göre esnek bir program.",
    fieldLabel: "SAHADAN NOTLAR", fieldTitle: "Her yerin anlatılmaya değer bir hikâyesi var.",
    gemTitle: "Büyük Mısır Müzesi", gemDesc: "Anıtsal heykellerden günlük yaşamın ayrıntılarına kadar binlerce yıllık Mısır tarihine yeni bir bakış.",
    cairoTitle: "Katman katman Kahire", fieldCairoDesc: "Antik, Orta Çağ ve modern hikâyelerin aynı sokakta buluştuğu bir şehir.",
    istTitle: "Türkçe bir bakış", istDesc: "İstanbul’da geçen 12 yıl dilimi, bakış açımı ve Türkçe konuşan misafirlerle iletişimimi şekillendirdi.",
    profileLabel: "İNSANLARA ODAKLANAN BİR DENEYİM", profileTitle: "Önce misafirperverlik. Her zaman hikâyeler.",
    profileText: "Profesyonel geçmişim misafir ilişkileri, turizm operasyonları ve rehberliği kapsıyor. Her görev bana dinlemeyi, organize etmeyi ve bir yeri akılda kalacak şekilde anlatmayı öğretti.",
    timeline1: "Misafir İlişkileri Görevlisi", timeline2: "Operasyon Müdürü", timeline3: "Turizm ve Otelcilik Fakültesi",
    timelineDate1: "Klas Hotel Istanbul · 2021–2025", timelineDate2: "Olbia Travel & Tourism · 2018–2020", timelineDate3: "Mezuniyet · 2005",
    contactLabel: "MISIR HİKÂYENİZ BURADA BAŞLIYOR", contactTitle: "Anlamlı bir yolculuk planlayalım.",
    contactText: "İlgi alanlarınızı, ziyaret tarihinizi ve nasıl bir deneyim istediğinizi anlatın. Ayrıntıları birlikte şekillendirelim.",
    contactCta: "WhatsApp’tan yazın", emailCta: "E-posta gönderin", contactNote: "Size uygun iletişim yöntemini seçin.",
    footerLine: "Mısır’ı özenle keşfedin.", footerTop: "Başa dön", menu: "Menüyü aç", close: "Menüyü kapat",
    facts: "ÇALIŞMA TARZIM", fact1: "Açık ve doğal anlatım", fact2: "Esnek tempo ve özenli planlama", fact3: "Her yerle kişisel bağ",
  },
};

function Mark() {
  return (
    <svg viewBox="0 0 52 52" aria-hidden="true" className="brand-mark">
      <path d="M26 3 43 13v26L26 49 9 39V13L26 3Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M26 10 36 16v20L26 42 16 36V16l10-6Z" fill="none" stroke="currentColor" strokeWidth="1" opacity=".55" />
      <path d="M26 14v24M14 26h24M18 18l16 16M34 18 18 34" stroke="currentColor" strokeWidth="1.1" opacity=".8" />
      <circle cx="26" cy="26" r="3" fill="currentColor" />
    </svg>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const t = copy[lang];
  const rtl = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          reveal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => { reveal.disconnect(); window.removeEventListener("scroll", update); };
  }, [lang, rtl]);

  const closeMenu = () => setMenuOpen(false);
  const links: [string, string][] = [ ["#about", t.navAbout], ["#journeys", t.navTours], ["#field-notes", t.navStories], ["#contact", t.navContact] ];

  return (
    <main className={`portfolio ${rtl ? "is-rtl" : ""}`}>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Khaled Abdalla home"><Mark/><span><strong>KHALED ABDALLA</strong><small>EGYPT TOUR GUIDE</small></span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}</nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Choose language">
            {(["en", "tr", "ar"] as Lang[]).map((l) => <button key={l} onClick={() => setLang(l)} className={lang === l ? "active" : ""} aria-pressed={lang === l}>{l.toUpperCase()}</button>)}
          </div>
          <a href="#contact" className="header-cta">{t.navContact}<ArrowUpRight size={15}/></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.close : t.menu} aria-expanded={menuOpen} aria-controls="mobile-navigation">{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>
      {menuOpen && <div className="mobile-menu" id="mobile-navigation">{links.map(([href,label]) => <a href={href} key={href} onClick={closeMenu}>{label}<ArrowUpRight size={17}/></a>)}</div>}

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot"/>{t.eyebrow}</p>
          <h1>{t.heroLine1}<br/><em>{t.heroLine2}</em></h1>
          <p className="hero-description">{t.heroBody}</p>
          <a className="primary-link" href="#journeys">{t.explore}<span><ArrowUpRight size={18}/></span></a>
        </div>
        <div className="hero-visual"><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><img className="hero-photo" fetchPriority="high" decoding="async" src="/images/giza-sphinx.jpg" alt="The Great Sphinx with the pyramids of Giza behind it" /><div className="hero-index"><span>01 / 04</span><i/></div><div className="hero-caption">AN OPEN DOOR TO EGYPT</div></div>
        <a href="#about" className="scroll-cue"><span>{t.scroll}</span><ArrowDown size={16}/></a>
        <div className="hero-side-note">30° 02′ N&nbsp;&nbsp; 31° 14′ E</div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="section-rail reveal"><span>01</span><i/>{t.introLabel}</div>
        <div className="about-grid">
          <div className="about-heading reveal"><p className="eyebrow">{t.navAbout.toUpperCase()}</p><h2>{t.aboutTitle}</h2><div className="about-stamp"><Compass size={24}/><span>GUIDED BY<br/>CURIOSITY</span></div></div>
          <div className="about-copy reveal"><p>{t.aboutText}</p><p>{t.aboutText2}</p><div className="about-facts"><div><strong>12</strong><span>{t.years}</span></div><div><strong>02</strong><span>{t.languages}</span></div><div><strong>’05</strong><span>{t.education}</span></div></div></div>
        </div>
        <div className="fact-strip reveal"><span>{t.facts}</span><p><i/> {t.fact1}</p><p><i/> {t.fact2}</p><p><i/> {t.fact3}</p></div>
      </section>

      <section className="journeys-section section-pad" id="journeys">
        <div className="section-heading reveal"><div><p className="eyebrow">02 / {t.journeyLabel}</p><h2>{t.journeyTitle}</h2></div><p>{t.journeyText}</p></div>
        <div className="journey-grid">
          <article className="journey-card journey-large reveal"><div className="journey-art"><img className="journey-photo" loading="lazy" decoding="async" src="/images/giza-sphinx.jpg" alt="The Great Sphinx and pyramids of Giza" /><span className="card-number">01</span></div><div className="journey-info"><div><h3>{t.cairo}</h3><p>{t.cairoDesc}</p></div><a href="#contact" aria-label={t.cairo}><ArrowUpRight/></a></div></article>
          <article className="journey-card reveal"><div className="journey-art"><img className="journey-photo" loading="lazy" decoding="async" src="/images/islamic-cairo.jpg" alt="Al-Hakim Mosque in historic Cairo" /><span className="card-number">02</span></div><div className="journey-info"><div><h3>{t.islamic}</h3><p>{t.islamicDesc}</p></div><a href="#contact" aria-label={t.islamic}><ArrowUpRight/></a></div></article>
          <article className="journey-card reveal"><div className="journey-art"><img className="journey-photo" loading="lazy" decoding="async" src="/images/karnak-luxor.jpg" alt="Ancient columns at Karnak Temple in Luxor" /><span className="card-number">03</span></div><div className="journey-info"><div><h3>{t.luxor}</h3><p>{t.luxorDesc}</p></div><a href="#contact" aria-label={t.luxor}><ArrowUpRight/></a></div></article>
          <article className="journey-card journey-custom reveal"><div className="journey-art"><img className="journey-photo" loading="lazy" decoding="async" src="/images/istanbul-bosphorus.jpg" alt="Istanbul skyline beside the Bosphorus" /><span className="card-number">04</span></div><div className="journey-info"><div><h3>{t.tailored}</h3><p>{t.tailoredDesc}</p></div><a href="#contact" aria-label={t.tailored}><ArrowUpRight/></a></div></article>
        </div>
      </section>

      <section className="field-section section-pad" id="field-notes">
        <div className="section-heading field-heading reveal"><div><p className="eyebrow">03 / {t.fieldLabel}</p><h2>{t.fieldTitle}</h2></div><span className="field-aside">A CLOSER LOOK<br/>AT THE DETAILS</span></div>
        <div className="field-grid">
          <article className="field-card field-main reveal"><div className="field-image"><img className="field-photo" loading="lazy" decoding="async" src="/images/gem-facade.jpg" alt="The facade of the Grand Egyptian Museum" /><span className="field-chip">CAIRO · GIZA PLATEAU</span></div><div className="field-copy"><span>01 — MUSEUMS & MEMORY</span><h3>{t.gemTitle}</h3><p>{t.gemDesc}</p></div></article>
          <article className="field-card reveal"><div className="field-image"><img className="field-photo" loading="lazy" decoding="async" src="/images/old-cairo-street.jpg" alt="A lively market street in historic Cairo" /><span className="field-chip">THE CITY</span></div><div className="field-copy"><span>02 — STREETS & STORIES</span><h3>{t.cairoTitle}</h3><p>{t.fieldCairoDesc}</p></div></article>
          <article className="field-card reveal"><div className="field-image"><img className="field-photo" loading="lazy" decoding="async" src="/images/istanbul-bosphorus.jpg" alt="A mosque and the Bosphorus in Istanbul" /><span className="field-chip">ISTANBUL · TÜRKİYE</span></div><div className="field-copy"><span>03 — LANGUAGE & CULTURE</span><h3>{t.istTitle}</h3><p>{t.istDesc}</p></div></article>
        </div>
        <p className="photo-credits">PHOTO CREDITS · <a href="https://www.pexels.com/photo/sphinx-and-pyramid-in-giza-14085756/" target="_blank" rel="noreferrer">Alexander Popovkin</a> · <a href="https://www.pexels.com/photo/facade-of-the-grand-egyptian-museum-in-giza-egypt-26964135/" target="_blank" rel="noreferrer">Omar Elsharawy</a> · <a href="https://www.pexels.com/photo/people-walking-on-street-3727261/" target="_blank" rel="noreferrer">Alex Azabache</a> · <a href="https://www.pexels.com/photo/al-hakim-mosque-in-cairo-25490172/" target="_blank" rel="noreferrer">Sameh Solow</a> · <a href="https://www.pexels.com/photo/ancient-columns-and-statues-at-karnak-temple-in-luxor-37559108/" target="_blank" rel="noreferrer">Muhammed Fatih Beki</a> · <a href="https://www.pexels.com/photo/bosphorus-view-of-istanbul-with-iconic-mosque-36168567/" target="_blank" rel="noreferrer">Mehmet Raşit Özarslan</a></p>
      </section>

      <section className="profile-section section-pad">
        <div className="profile-top reveal"><div><p className="eyebrow">04 / {t.profileLabel}</p><h2>{t.profileTitle}</h2></div><p>{t.profileText}</p></div>
        <div className="timeline">
          <div className="timeline-line"/>
          <article className="timeline-item reveal"><span className="timeline-dot"/><span className="timeline-date">2021 — 2025</span><h3>{t.timeline1}</h3><p>{t.timelineDate1}</p></article>
          <article className="timeline-item reveal"><span className="timeline-dot"/><span className="timeline-date">2018 — 2020</span><h3>{t.timeline2}</h3><p>{t.timelineDate2}</p></article>
          <article className="timeline-item reveal"><span className="timeline-dot"/><span className="timeline-date">2005</span><h3>{t.timeline3}</h3><p>{t.timelineDate3}</p></article>
        </div>
        <div className="language-band reveal"><Globe2/><span>ARABIC</span><i/><strong>ENGLISH</strong><i/><strong>TÜRKÇE</strong><small>LANGUAGES OF CONNECTION</small></div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-ornament"><img src="/images/gem-facade.jpg" loading="lazy" decoding="async" alt="" /></div>
        <div className="contact-methods">
  <a href="tel:+201501835003" className="contact-link contact-phone" aria-label="Call Khaled Abdalla">
    <Phone size={18} />
    <span className="contact-detail">+20 150 183 5003</span>
  </a>

  <a href="https://wa.me/201501835003" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="WhatsApp">
    WhatsApp <span><MessageCircle size={18} /></span>
  </a>

  <a href="mailto:immortal4love4@gmail.com" className="contact-link" aria-label="Email Khaled Abdalla">
    <Mail size={17} /> Email <span><MoveUpRight /></span>
  </a>
</div>

<div className="social-links" aria-label="Social media profiles">
  <a href="https://www.linkedin.com/in/khaled-abdalla-667b86218" target="_blank" rel="noopener noreferrer">
<span className="social-mark">in</span> LinkedIn
  </a>
  <a href="https://www.facebook.com/share/18TmHnc4zu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
   <span className="social-mark">f</span> Facebook
  </a>
  <a href="https://www.instagram.com/immortal4love?obrf=bnNhOTFldDJ3NWF3&utm_source=qr" target="_blank" rel="noopener noreferrer">
    <span className="social-mark">◎</span> Instagram
  </a>
</div>
        <div className="contact-coordinates">EGYPT · 2026</div>
      </section>

      <footer className="site-footer"><a href="#top" className="footer-brand"><Mark/><span>KHALED ABDALLA</span></a><p>{t.footerLine}</p><a href="#top" className="back-top">{t.footerTop}<ArrowUpRight size={15}/></a><small>© {new Date().getFullYear()} KHALED ABDALLA</small></footer>
    </main>
  );
}
