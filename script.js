/* ════════════════════════════════════════════════
   LUANA CANDELA GALVÁN — CV Web v2
   script.js
   ════════════════════════════════════════════════ */

'use strict';


/* ══════════════════════════════════════════════
   1. SISTEMA DE TRADUCCIÓN BILINGÜE
   Toda la lógica de i18n sin librerías externas.
═══════════════════════════════════════════════ */

const translations = {

  es: {
    /* Navbar */
    'nav.home':      'Inicio',
    'nav.about':     'Sobre mí',
    'nav.skills':    'Habilidades',
    'nav.projects':  'Proyectos',
    'nav.education': 'Formación',
    'nav.contact':   'Contacto',

    /* Hero */
    'hero.label':       'Desarrolladora Junior · Buenos Aires',
    'hero.tagline':     'Estudiante de Computación orientada al desarrollo de software. Proyectos reales, formación técnica y muchas ganas de crecer.',
    'hero.download':    'Descargar CV',
    'hero.seeProjects': 'Ver proyectos',
    'hero.stack1':      'Desarrollo Web',
    'hero.stack2':      'Java & POO',
    'hero.stack3':      'React',
    'hero.stack4':      'Aprendizaje continuo',
    'hero.photoHint':   'Reemplazá con tu foto',

    /* Sobre mí */
    'about.label':        'Sobre mí',
    'about.heading':      'Construyo cosas reales mientras aprendo.',
    'about.p1':           'Soy Luana, estudiante de último año de la Secundaria Técnica en Computación (CABA). Desde que empecé a programar, entendí que la mejor forma de aprender es construyendo cosas que funcionen de verdad y que alguien pueda usar.',
    'about.p2':           'Tengo proyectos web publicados en producción, participé en la Copa Robótica Argentina 2025 donde mi equipo llegó a semifinales, y sigo sumando habilidades cada semana. Me considero responsable, organizada y siempre dispuesta a pedir ayuda cuando no sé algo.',
    'about.p3':           'Busco mi primera experiencia profesional en un equipo donde pueda aportar, seguir formándome y demostrar que el potencial bien dirigido vale tanto como los años de experiencia.',
    'about.locationLabel':'Ubicación',
    'about.statusLabel':  'Estado',
    'about.statusVal':    'Búsqueda activa de empleo',
    'about.availLabel':   'Disponibilidad',
    'about.availVal':     'Part-time o práctica profesional',
    'about.langLabel':    'Idiomas',
    'about.langVal':      'Español (nativo) · Inglés (básico)',
    'about.interestLabel':'Intereses',
    'about.interestVal':  'Desarrollo web · Robótica · UX',
    'about.achieveTitle': 'Copa Robótica Argentina 2025',
    'about.achieveSub':   '3.° puesto regional · Semifinalista nacional',

    /* Habilidades */
    'skills.label':    'Habilidades',
    'skills.heading':  'Tecnologías y competencias',
    'skills.web':      'Desarrollo web',
    'skills.prog':     'Programación',
    'skills.data':     'Datos y sistemas',
    'skills.soft':     'Competencias',
    'skills.s1':       'Trabajo en equipo',
    'skills.s2':       'Resolución de problemas',
    'skills.s3':       'Pensamiento lógico',
    'skills.s4':       'Aprendizaje continuo',
    'skills.s5':       'Organización',
    'skills.legStrong':'Intermedio',
    'skills.legMid':   'Básico–Intermedio',
    'skills.legLearn': 'En aprendizaje',

    /* Proyectos */
    'projects.label':  'Proyectos',
    'projects.heading':'Lo que construí',
    'projects.sub':    'Tres proyectos publicados en producción, accesibles en cualquier dispositivo.',
    'p1.cat':   'Sistema web',
    'p1.title': 'Sistema de Informes',
    'p1.desc':  'Plataforma para crear, organizar y visualizar informes digitales. Diseñada para optimizar la gestión documental con una interfaz clara e intuitiva.',
    'p2.cat':   'Salud digital',
    'p2.title': 'Vital Mirror Tech',
    'p2.desc':  'Aplicación web para el seguimiento de indicadores de salud personales. Combina diseño centrado en el usuario con lógica de monitoreo de datos en tiempo real.',
    'p3.cat':   'Entretenimiento',
    'p3.title': 'Ranking de Películas',
    'p3.desc':  'App interactiva para descubrir, calificar y ordenar películas favoritas. Implementa manipulación del DOM, ordenamiento dinámico y almacenamiento local para una experiencia fluida.',
    'btn.demo': 'Demo',

    /* Formación */
    'edu.label':    'Formación',
    'edu.heading':  'Recorrido académico',
    'edu.present':  'Actualidad',
    'edu.badge1':   'Educación',
    'edu.badge2':   'Logro',
    'edu.badge3':   'Proyectos',
    'edu.badge4':   'Formación continua',
    'edu.t1title':  'Secundaria Técnica en Computación',
    'edu.t1org':    'Orientación: Desarrollo de Software y Sistemas Informáticos · CABA',
    'edu.t1desc':   'Último año en curso. Formación completa en programación, bases de datos, redes, sistemas operativos, hardware y proyectos integradores desde primer año.',
    'edu.t2title':  'Copa Robótica Argentina — Competencia Nacional',
    'edu.t2org':    'Equipo de 5 integrantes · 3.° puesto regional · Semifinalista nacional',
    'edu.t2desc':   'Diseño, programación y pruebas de un robot autónomo en equipo. Trabajo colaborativo bajo presión con resultados concretos en competencia oficial.',
    'edu.t3title':  'Proyectos web publicados',
    'edu.t3org':    'Desarrollo autodidacta · GitHub Pages',
    'edu.t3desc':   'Diseño y despliegue de aplicaciones funcionales y accesibles en producción: sistema de informes, plataforma de salud y ranking interactivo.',
    'edu.t4title':  'Cursos y certificaciones en curso',
    'edu.t4desc':   'Actualmente continúo ampliando mi formación mediante cursos y certificaciones vinculadas al desarrollo de software y tecnologías web, sumando nuevas herramientas a mi perfil técnico de forma constante.',

    /* Contacto */
    'contact.label':   'Contacto',
    'contact.heading': '¿Tenés un equipo donde pueda aprender y aportar?',
    'contact.sub':     'Estoy disponible para prácticas profesionales, empleo part-time o cualquier oportunidad donde el potencial valga tanto como la experiencia. Escribime sin compromiso.',
    /* footer.copy se encuentra al final de este bloque */

    /* Footer */
    'footer.copy': 'Diseñado y desarrollado por mí.',
  },

  en: {
    /* Navbar */
    'nav.home':      'Home',
    'nav.about':     'About',
    'nav.skills':    'Skills',
    'nav.projects':  'Projects',
    'nav.education': 'Education',
    'nav.contact':   'Contact',

    /* Hero */
    'hero.label':       'Junior Developer · Buenos Aires',
    'hero.tagline':     'Computer Science student focused on software development. Real projects, solid technical training, and a strong drive to grow.',
    'hero.download':    'Download CV',
    'hero.seeProjects': 'View projects',
    'hero.stack1':      'Web Development',
    'hero.stack2':      'Java & OOP',
    'hero.stack3':      'React',
    'hero.stack4':      'Continuous Learning',
    'hero.photoHint':   'Replace with your photo',

    /* About */
    'about.label':        'About me',
    'about.heading':      'I build real things while I learn.',
    'about.p1':           "I'm Luana, a final-year student at a Technical High School for Computer Science in Buenos Aires. Since I started coding, I've understood that the best way to learn is by building things that actually work — things real people can use.",
    'about.p2':           'I have live web projects on production, competed in the Copa Robótica Argentina 2025 where my team reached the semifinals, and I add new skills every week. I consider myself responsible, organized, and always willing to ask for help when I need it.',
    'about.p3':           'I\'m looking for my first professional experience in a team where I can contribute, keep learning, and show that well-guided potential is as valuable as years of experience.',
    'about.locationLabel':'Location',
    'about.statusLabel':  'Status',
    'about.statusVal':    'Actively looking for opportunities',
    'about.availLabel':   'Availability',
    'about.availVal':     'Part-time or professional internship',
    'about.langLabel':    'Languages',
    'about.langVal':      'Spanish (native) · English (basic)',
    'about.interestLabel':'Interests',
    'about.interestVal':  'Web dev · Robotics · UX',
    'about.achieveTitle': 'Copa Robótica Argentina 2025',
    'about.achieveSub':   '3rd place regional · National semifinalist',

    /* Skills */
    'skills.label':    'Skills',
    'skills.heading':  'Technologies & competencies',
    'skills.web':      'Web development',
    'skills.prog':     'Programming',
    'skills.data':     'Data & systems',
    'skills.soft':     'Soft skills',
    'skills.s1':       'Teamwork',
    'skills.s2':       'Problem solving',
    'skills.s3':       'Logical thinking',
    'skills.s4':       'Continuous learning',
    'skills.s5':       'Organization',
    'skills.legStrong':'Intermediate',
    'skills.legMid':   'Basic–Intermediate',
    'skills.legLearn': 'Learning',

    /* Projects */
    'projects.label':  'Projects',
    'projects.heading':"What I've built",
    'projects.sub':    'Three projects live in production, accessible on any device.',
    'p1.cat':   'Web system',
    'p1.title': 'Reports System',
    'p1.desc':  'Platform to create, organize and visualize digital reports. Designed to streamline document management with a clean, intuitive interface.',
    'p2.cat':   'Digital health',
    'p2.title': 'Vital Mirror Tech',
    'p2.desc':  'Web app for tracking personal health indicators. Combines user-centered design with real-time data monitoring logic.',
    'p3.cat':   'Entertainment',
    'p3.title': 'Movie Ranking',
    'p3.desc':  'Interactive app to discover, rate and sort favorite movies. Implements DOM manipulation, dynamic sorting, and local storage for a smooth experience.',
    'btn.demo': 'Live demo',

    /* Education */
    'edu.label':    'Education',
    'edu.heading':  'Academic journey',
    'edu.present':  'Present',
    'edu.badge1':   'Education',
    'edu.badge2':   'Achievement',
    'edu.badge3':   'Projects',
    'edu.badge4':   'Continuing education',
    'edu.t1title':  'Technical High School — Computer Science',
    'edu.t1org':    'Focus: Software Development & Information Systems · Buenos Aires',
    'edu.t1desc':   'Final year in progress. Full training in programming, databases, networks, operating systems, hardware, and integrative projects since year one.',
    'edu.t2title':  'Copa Robótica Argentina — National Competition',
    'edu.t2org':    '5-person team · 3rd place regional · National semifinalist',
    'edu.t2desc':   'Design, programming and testing of an autonomous robot as a team. Collaborative work under pressure with concrete results in an official competition.',
    'edu.t3title':  'Published web projects',
    'edu.t3org':    'Self-taught development · GitHub Pages',
    'edu.t3desc':   'Design and deployment of functional, accessible applications in production: a reports system, a health platform, and an interactive ranking app.',
    'edu.t4title':  'Courses and certifications in progress',
    'edu.t4desc':   "I'm currently expanding my training through courses and certifications related to software development and web technologies, steadily adding new tools to my technical profile.",

    /* Contact */
    'contact.label':   'Contact',
    'contact.heading': 'Do you have a team where I can learn and contribute?',
    'contact.sub':     "I'm available for internships, part-time roles, or any opportunity where potential matters as much as experience. Feel free to reach out.",
    /* footer.copy a continuación */

    /* Footer */
    'footer.copy': 'Designed and built by me.',
  }
};

/* Estado de idioma activo */
let currentLang = 'es';

/**
 * Aplica las traducciones al DOM.
 * Busca todos los elementos con [data-i18n] y reemplaza su textContent.
 */
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  /* Actualizar atributo lang del html y título */
  document.documentElement.lang = lang;

  /* Actualizar aria-label del botón volver arriba */
  const backTop = document.getElementById('backTop');
  if (backTop) {
    backTop.setAttribute('aria-label', lang === 'es' ? 'Volver al inicio' : 'Back to top');
  }
}

/**
 * Inicializa el selector de idioma.
 */
function initLangSwitcher() {
  const buttons = document.querySelectorAll('.lang-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang === currentLang) return;

      currentLang = lang;

      /* Estado visual de botones */
      buttons.forEach(b => {
        const isActive = b.getAttribute('data-lang') === lang;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-pressed', String(isActive));
      });

      /* Aplicar traducciones */
      applyTranslations(lang);

      /* Re-renderizar íconos Lucide (el textContent cambió en algunos elementos que
         contienen íconos en algunos navegadores, esto es una precaución) */
      if (typeof lucide !== 'undefined') lucide.createIcons();
    });
  });
}


/* ══════════════════════════════════════════════
   2. NAVBAR — scrolled class + link activo
═══════════════════════════════════════════════ */
function initNavbar() {
  const navbar  = document.getElementById('navbar');
  if (!navbar) return;

  let rafPending = false;

  window.addEventListener('scroll', () => {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
      rafPending = false;
    });
  }, { passive: true });
}

function initActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, {
    rootMargin: `-${64}px 0px -50% 0px`,
    threshold: 0
  });

  sections.forEach(s => observer.observe(s));
}


/* ══════════════════════════════════════════════
   3. MENÚ MOBILE
═══════════════════════════════════════════════ */
function initMobileMenu() {
  const toggle   = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (!toggle || !navLinks) return;

  const closeMenu = () => {
    navLinks.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const willOpen = !navLinks.classList.contains('open');
    navLinks.classList.toggle('open', willOpen);
    toggle.classList.toggle('open', willOpen);
    toggle.setAttribute('aria-expanded', String(willOpen));
  });

  /* Cierra al hacer clic en un link */
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* Cierra al hacer clic fuera */
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) closeMenu();
  });
}


/* ══════════════════════════════════════════════
   4. ANIMACIONES DE APARICIÓN (reveal)
═══════════════════════════════════════════════ */
function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  /* Movimiento reducido: mostrar todo de inmediato */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  elements.forEach(el => observer.observe(el));
}


/* ══════════════════════════════════════════════
   5. BOTÓN VOLVER ARRIBA
═══════════════════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;

  let rafPending = false;
  window.addEventListener('scroll', () => {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      btn.classList.toggle('visible', window.scrollY > 450);
      rafPending = false;
    });
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ══════════════════════════════════════════════
   6. SCROLL SUAVE para links ancla
   (fallback: los navegadores modernos lo hacen
   por CSS; esto cubre el offset de la navbar)
═══════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();

      const navH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
      ) || 64;

      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - navH,
        behavior: 'smooth'
      });
    });
  });
}


/* ══════════════════════════════════════════════
   7. INICIALIZACIÓN
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* Íconos Lucide */
  if (typeof lucide !== 'undefined') lucide.createIcons();

  /* Módulos */
  initLangSwitcher();
  initNavbar();
  initActiveLink();
  initMobileMenu();
  initReveal();
  initBackToTop();
  initSmoothScroll();

  /* Aplicar idioma inicial (español) */
  applyTranslations('es');
});