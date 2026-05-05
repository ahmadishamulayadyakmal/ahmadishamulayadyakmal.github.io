/* ================================================================
   MAIN.JS — Ahmad Ishamul Personal Website
   ================================================================
   HOW TO UPDATE YOUR DATA:
   1. CERTIFICATES → edit the `certificates` array below
      Each item: { title, org, year, level, category, file }
      - level: "Internasional" | "Nasional" | "Universitas" | "Kabupaten" | "Regional Asia"
      - category: used for filter buttons — "Prestasi" | "Sertifikasi" | "Project" | "Organisasi" | "Internship"
      - file: filename inside assets/images/certificates/ (e.g. "Gold Medal IYBC.pdf")
              Leave file:"" if you don't have the file yet

   2. PROJECTS → edit the `projects` array below

   3. PROFILE PHOTO → place your photo at assets/images/profile.jpg
      Then uncomment the <img> line in the profile-placeholder div in index.html
================================================================ */

// ----------------------------------------------------------------
// CERTIFICATES DATA
// ----------------------------------------------------------------
const certificates = [
  // ── INTERNATIONAL ACHIEVEMENTS ──
  { title: "Gold Medal — IYBC (International Youth Business Competition)", org: "Indonesian Young Scientist Association", year: 2022, level: "Internasional", category: "Competition", label: "Business Plan", file: "Gold Medal IYBC.pdf" },
  { title: "Silver Medal — Glocolis (Global Competition for Life Science)", org: "Indonesian Young Scientist Association", year: 2022, level: "Internasional", category: "Competition", label: "Research and Innovation", file: "Silver Medal Glocolis.pdf" },
  { title: "Silver Medal — IEI2C (Indonesia Education International Innovative Competition)", org: "Indonesian Federation Publisher of Research Innovation", year: 2022, level: "Internasional", category: "Competition", label: "Business Plan", file: "Silver Medal IEI2C BP.pdf" },
  { title: "Silver Medal — IEI2C (Indonesia Education International Innovative Competition) Scientific Paper", org: "Indonesian Federation Publisher of Research Innovation", year: 2022, level: "Internasional", category: "Competition", label: "Research and Innovation", file: "Silver Medal IEI2C PAPER.pdf" },
  { title: "Silver Medal — WYIIA (World Youth Invention and Innovation Award)", org: "Indonesian Young Scientist Association", year: 2021, level: "Internasional", category: "Competition", label: "Research and Innovation", file: "Silver Medal WYIIA.pdf" },
  { title: "Bronze Medal — YISF (Youth International Science Fair)", org: "Indonesian Young Scientist Association", year: 2021, level: "Internasional", category: "Competition", file: "Bronze Medal YISF.pdf" },
  { title: "1st Place — Essay Competition", org: "PPIT Chengdu", year: 2025, level: "Internasional", category: "Competition", label: "Essay Competition", file: "Juara 1 Esai PPIT Chengdu.jpg" },
  { title: "Participant — AWMUN III (ASEAN World Model United Nations)", org: "International Global Network", year: 2019, level: "Internasional", category: "Competition", label: "Model United Nation", file: "AWMUN III.png" },
  { title: "Member — SINO (Scholars of Indonesia-China Network)", org: "SINO", year: 2025, level: "Internasional", category: "Organization", file: "SK Anggota 01-ORG-X-25.pdf" },

  // ── REGIONAL ASIA ──
  { title: "Runner Up — South East Asia University ICON", org: "Indonesia Banking School", year: 2021, level: "Regional Asia", category: "Competition", label: "Idea Competition", file: "Sea U Icon.pdf" },

  // ── NATIONAL ACHIEVEMENTS ──
  { title: "Beswan Djarum — Djarum Beasiswa Plus (Batch 37)", org: "Djarum Foundation", year: 2022, level: "Nasional", category: "Competition", label: "Awardee", file: "Beswan Djarum 37.pdf" },
  { title: "1st Place — National Poster Competition EPIC (Dies Natalis Elektro)", org: "Jurusan Teknik Elektro UNEJ", year: 2022, level: "Nasional", category: "Competition", label: "Poster Design", file: "Juara 1_EPIC.pdf" },
  { title: "2nd Place — LIDM (Ministry of Education Certificate)", org: "Kemendikbud Ristek", year: 2021, level: "Nasional", category: "Competition", label: "Research and Innovation", file: "Juara 2_LIDM Kementrian.pdf" },
  { title: "Funding Recipient — KBMI (Kemendikbud Business Incubator)", org: "Kemendikbud Ristek", year: 2021, level: "Nasional", category: "Competition", label: "Business Funding", file: "Lolos Pendanaan_KBMI.pdf" },
  { title: "Best Team — BPCPRE (Business Plan Competition in Renewable Energy)", org: "UNDP Indonesia", year: 2022, level: "Nasional", category: "Competition", label: "Business Plan", file: "Best Team_BPCPRE.pdf" },
  { title: "Top 5 — ETIC 2022 (Energy Technology Innovation Competition)", org: "Kementerian ESDM RI", year: 2022, level: "Nasional", category: "Competition", label: "Research and Innovation", file: "Top 5_ETIC.pdf" },
  { title: "Finalist — NBPC (National Business Plan Competition)", org: "PTN / HMJ", year: 2022, level: "Nasional", category: "Competition", label: "Business Plan", file: "Finalis NBPC.pdf" },
  { title: "Finalist — LKTIN PESC 2021", org: "Himpunan Elektro UM", year: 2021, level: "Nasional", category: "Competition", label: "Scientific Writing Competition", file: "Finalis PESC.pdf" },
  { title: "Finalist — UNYSEF #10 (UNY Scientific Fair)", org: "UKM Penelitian UNY", year: 2021, level: "Nasional", category: "Competition", label: "Scientific Writing Competition", file: "Finalis UNYSEF.pdf" },
  { title: "Runner Up — LKTIN IMATETANI", org: "IMATETANI", year: 2022, level: "Nasional", category: "Competition", file: "Harapan 1 LKTIN IMATETANI.png" },
  { title: "2nd Place — Estec III", org: "Estec", year: 2022, level: "Nasional", category: "Competition", label: "Scientific Writing Competition", file: "Juara 2_Estec III.png" },
  { title: "Finalist — NUSPEST", org: "PTN / Lembaga", year: 2022, level: "Nasional", category: "Competition", label: "Scientific Writing Competition", file: "Finalis NUSPEST.png" },

  // ── UNIVERSITY ACHIEVEMENTS ──
  { title: "Mahasiswa Berprestasi — Faculty of Engineering 2021 (Pilmapres FT)", org: "FT Universitas Jember", year: 2021, level: "Universitas", category: "Competition", label: "Pemilihan Mahasiswa Berprestasi", file: "Pilmapres FT 2021.pdf" },
  { title: "Mahasiswa Berprestasi — Faculty of Engineering 2022 (Pilmapres FT)", org: "FT Universitas Jember", year: 2022, level: "Universitas", category: "Competition", label: "Pemilihan Mahasiswa Berprestasi", file: "Pilmapres FT 2022.pdf" },
  { title: "Mahasiswa Berprestasi — University of Jember (Pilmapres UNEJ)", org: "Universitas Jember", year: 2022, level: "Universitas", category: "Competition", label: "Pemilihan Mahasiswa Berprestasi", file: "PILMAPRES_Juara.pdf" },
  { title: "Campus Ambassador Favorite — Duta Kampus UNEJ", org: "Universitas Jember", year: 2022, level: "Universitas", category: "Competition", label: "Campus Ambassador Competition", file: "Duta Kampus_Favorit.pdf" },
  { title: "1st Place — PKM Raya (Karsa Cipta Category)", org: "Universitas Jember", year: 2022, level: "Universitas", category: "Competition", label: "Pekan Kreatifitas Mahasiswa", file: "PKM Raya_1 Poster KC.pdf" },
  { title: "Participant — PKM Raya Presentation (Karsa Cipta)", org: "Universitas Jember", year: 2022, level: "Universitas", category: "Competition", label: "Pekan Kreatifitas Mahasiswa", file: "PKM Raya_3 Presentasi KC.pdf" },
  { title: "Participant — Logo Design Competition, Electrical Engineering", org: "FT Universitas Jember", year: 2022, level: "Universitas", category: "Competition", file: "Lomba Logo Jurusan.pdf" },

  // ── CERTIFICATIONS ──
  { title: "Data Science with Microsoft Fabric — Data Processing Fundamentals", org: "Dicoding Indonesia", year: 2026, level: "Nasional", category: "Credential", file: "sertifikat_course_902_1510859_260226145240.pdf" },
  { title: "Building Gen AI Applications with Microsoft Azure", org: "Dicoding Indonesia", year: 2026, level: "Nasional", category: "Credential", file: "sertifikat_course_899_1510859_150326110907.pdf" },
  { title: "Data Processing Fundamentals", org: "Dicoding Indonesia", year: 2026, level: "Nasional", category: "Credential", file: "sertifikat_course_708_1510859_250326114410.pdf" },
  { title: "Machine Learning for Beginners", org: "Dicoding Indonesia", year: 2026, level: "Nasional", category: "Credential", file: "sertifikat_course_184_1510859_290326090040.pdf" },
  { title: "Fundamentals of Artificial Intelligence", org: "Dicoding Indonesia", year: 2026, level: "Nasional", category: "Credential", file: "sertifikat_course_653_1510859_280326145627.pdf" },
  { title: "Personal Development Strategy", org: "Dicoding Indonesia", year: 2026, level: "Nasional", category: "Credential", file: "sertifikat_course_697_1510859_290326191337.pdf" },
  { title: "Prompt Engineering for Software Developers", org: "Dicoding Indonesia", year: 2026, level: "Nasional", category: "Credential", file: "sertifikat_course_753_1510859_280326152133.pdf" },
  { title: "Programming with Python — Fundamentals", org: "Dicoding Indonesia", year: 2026, level: "Nasional", category: "Credential", file: "sertifikat_course_86_1510859_280326192907.pdf" },
  { title: "Git & GitHub Fundamentals", org: "Dicoding Indonesia", year: 2022, level: "Nasional", category: "Credential", file: "Dicoding_Studi Independent.pdf" },
  { title: "Data Visualization Fundamentals", org: "Dicoding Indonesia", year: 2021, level: "Nasional", category: "Credential", file: "Dicoding_Dasar Visualisasi Data.pdf" },
  { title: "Independent Certified Study (SIB) — Front-End & Machine Learning", org: "Dicoding / Kemendikbud", year: 2022, level: "Nasional", category: "Credential", file: "SIB.pdf" },
  { title: "Renewable Power and Electricity Systems", org: "Coursera / University of Colorado Boulder", year: 2023, level: "Internasional", category: "Credential", file: "Coursera KWKAQDY2GEQW.pdf" },
  { title: "Electrical Power Generation — An Industrial Outlook", org: "Coursera / L&T EduTech", year: 2023, level: "Internasional", category: "Credential", file: "Coursera Q4V8U4T47QRW.pdf" },
  { title: "ET3034x: Solar Energy", org: "DelftX / edX (TU Delft)", year: 2023, level: "Internasional", category: "Credential", file: "DelftX ET3034x Certificate _ edX.pdf" },
  { title: "Python Fundamentals for Data Science", org: "DQ Lab", year: 2021, level: "Nasional", category: "Credential", file: "DQ_Fundamental Phyton.pdf" },
  { title: "Introduction to Data Science with R", org: "DQ Lab", year: 2021, level: "Nasional", category: "Credential", file: "DQ_Data Science R.pdf" },
  { title: "R Fundamentals for Data Science", org: "DQ Lab", year: 2021, level: "Nasional", category: "Credential", file: "DQ_R Fundamental.pdf" },
  { title: "Fundamental SQL Using SELECT Statement", org: "DQ Lab", year: 2021, level: "Nasional", category: "Credential", file: "DQ_SQL Fundamental.pdf" },
  { title: "Machine Learning & Deep Learning (KMMI)", org: "KMMI / Kemendikbud", year: 2022, level: "Nasional", category: "Credential", file: "KMMI_MLDL.pdf" },
  { title: "PLC (Programmable Logic Controller) Certification", org: "Lembaga Sertifikasi", year: 2022, level: "Nasional", category: "Credential", file: "Sertifikasi PLC.pdf" },

  // ── ORGANIZATION ──
  { title: "Head of UKM Einstein FT UNEJ", org: "UKM Einstein FT UNEJ", year: 2022, level: "Universitas", category: "Organization", file: "UKM Einstein.pdf" },
  { title: "Staff Member — UKM Mustika UNEJ", org: "UKM Mustika UNEJ", year: 2021, level: "Universitas", category: "Organization", file: "UKM Mustika.pdf" },
  { title: "Member — Sahabat Perpustakaan UNEJ", org: "Perpustakaan UNEJ", year: 2021, level: "Universitas", category: "Organization", file: "Sahabat Perpustakaan.png" },
  { title: "Chief Organizer — Einstein Great Event", org: "UKM Einstein FT UNEJ", year: 2021, level: "Universitas", category: "Organization", file: "EGE_Ketupel.pdf" },
  { title: "Staff Organizer — JLT Event", org: "Himpunan Mahasiswa Elektro UNEJ", year: 2022, level: "Universitas", category: "Organization", file: "JLT_Acara.pdf" },
  { title: "Organizing Committee Member — Millenial Entrepreneur Talks Event", org: "PPI Dunia", year: 2022, level: "Internasional", category: "Organization", file: "MET_Koordinator Commitee.jpg" },
  { title: "Participant — MTQ (Musabaqah Tilawatil Quran) 2021", org: "LPTQ / Kab. Jember", year: 2021, level: "Kabupaten", category: "Competition", file: "MTQ 2021.pdf" },
  { title: "Participant — MTQ (Musabaqah Tilawatil Quran) 2022", org: "LPTQ / Kab. Jember", year: 2022, level: "Kabupaten", category: "Competition", file: "MTQ 2022.pdf" },
];

// ----------------------------------------------------------------
// PROJECTS DATA
// ----------------------------------------------------------------
const projects = [
  {
    title: "Continuous Casting Inclusion Simulation (M.Eng. Thesis)",
    description: "Numerical modeling of non-metallic inclusion evolution and distribution in continuous casting of heavy rail steel using ANSYS Fluent CFD. Research under LPDP–Tsingshan Group scholarship at USTB Beijing.",
    tags: ["ANSYS Fluent", "CFD", "Maxwell", "ICEM CFD"],
    icon: "simulation",
    year: "2024–Present"
  },
  {
    title: "F-Light — Energy-Efficient Fishing Vessel Lamp Powered by Solar Panels",
    description: "F-Light is a solar-powered lighting system for traditional bagan tancap fishing vessels in Muncar, Banyuwangi, designed to replace costly and polluting diesel generators with a clean, renewable alternative. This project has been selected and funded under the Program Pembinaan Mahasiswa Wirausaha (P2MW) by the Indonesian Ministry of Higher Education, Science, and Technology, recognizing its potential as a sustainable and economically viable innovation for coastal fishing communities.",
    tags: ["Renewable Energy", "Solar", "Entrepreneurship"],
    icon: "energy",
    year: "2022",
    file: "PPMW.pdf"
  },
  {
    title: "PROMAHADESA — Renewable Energy Teaching Kit for SDN Ajung 01 Kalisat",
    description: "Led a community service team under Universitas Jember's Program Mahasiswa Berdesa (PROMAHADESA) to design and develop hands-on renewable energy teaching aids for SDN Ajung 01 Kalisat, supporting K-13 thematic learning and improving science process skills among elementary school students.",
    tags: ["Community Development", "Renewable Energy", "Education"],
    icon: "energy",
    year: "2022",
    file: "PROMAHADESA.pdf"
  },
  {
    title: "Scopus Q3 Journal Publication",
    description: "Undergraduate thesis published in the International Journal of Power Electronics and Drive Systems (2023), indexed in Scopus Q3. Research on closed-loop DC-DC converter control for renewable energy applications.",
    tags: ["Research", "Scopus Q3", "Power Electronics"],
    icon: "research",
    year: "2023",
    file: "IJEPEDS.pdf"
  },
  {
    title: "KBMI Funded Business Plan — Barokah Sari Herbal",
    description: "Led a team that secured national funding from Kemendikbud's KBMI (Business Incubator) program. Kegiatan Berwirausaha Mahasiswa Indonesia (KBMI) 2021, competing among 2,944 proposals from 394 universities across Indonesia. Developed 'Barokah Sari Herbal', a herbal rhizome root powder beverage crafted to strengthen the immune system as a natural solution during the COVID-19 pandemic.",
    tags: ["Entrepreneurship", "Traditional Drink", "Rhyzome root"],
    icon: "business",
    year: "2021",
    file: "Lolos Pendanaan_KBMI.pdf"
  },
  {
    title: "LIDM 2021 — SERVERKITA: Modified Set-Top Box Mini Server for E-Learning",
    description: "Achieved 2nd place at the national LIDM (Lomba Inovasi Digital Mahasiswa). Developed SERVERKITA, an innovative mini server built from a modified set-top box designed to run a Moodle-based e-learning management system. Offers an affordable and reliable alternative to conventional server hardware, significantly reducing infrastructure costs for educational institutions implementing digital learning systems.",
    tags: ["Innovation", "Digital", "E-learning"],
    icon: "award",
    year: "2021",
    file: "Juara 2_LIDM Kementrian.pdf"
  },
  {
    title: "Co-Author — Buku Karya Bersama Mahasiswa (Student Book)",
    description: "Contributing author in a collaborative academic book published under LP3M Universitas Jember, with the tittle Teknologi penyimpanan energi dan perkembangannya.",
    tags: ["Publication", "Author", "Book"],
    icon: "research",
    year: "2020",
    file: "Buku Karya Mahasiswa_Penulis.pdf"
  },
];

// ================================================================
// RENDER FUNCTIONS
// ================================================================

const icons = {
  simulation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  energy:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
  research:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>`,
  business:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`,
  award:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  ai:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 9h.01M12 9h.01M17 9h.01"/></svg>`,
};

function getLevelClass(level) {
  if (level === 'Internasional') return 'level-Internasional';
  if (level === 'Nasional')      return 'level-Nasional';
  if (level === 'Universitas')   return 'level-Universitas';
  if (level === 'Kabupaten')     return 'level-Kabupaten';
  if (level.includes('Regional')) return 'level-Regional';
  return 'level-default';
}

function renderCertificates(filter = 'all') {
  const grid = document.getElementById('certGrid');
  const filtered = filter === 'all'
    ? certificates
    : certificates.filter(c => c.category === filter);

  grid.innerHTML = filtered.map(cert => `
    <div class="cert-card reveal">
      <div class="cert-card-header">
        <span class="cert-title">${cert.title}</span>
        <span class="cert-level ${getLevelClass(cert.level)}">${cert.level}</span>
      </div>
      <div class="cert-meta">${cert.org}</div>
      <div class="cert-year">${cert.year} · ${cert.label || cert.category}</div>
      ${cert.file ? `
      <button class="cert-view-btn" onclick="openModal('${cert.file.replace(/'/g, "\\'")}', '${cert.title.replace(/'/g, "\\'")}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
        </svg>
        View Credential
      </button>` : ''}
    </div>
  `).join('');

  observeReveal();
}

function renderProjects() {
  const grid = document.getElementById('portfolioGrid');
  grid.innerHTML = projects.map(p => `
    <div class="project-card reveal">
      <div class="project-header">
        <div class="project-icon">${icons[p.icon] || icons.research}</div>
      </div>
      <div class="project-body">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
          <h3>${p.title}</h3>
          <span style="font-size:.75rem;color:rgba(255,255,255,.7);background:var(--navy);padding:2px 8px;border-radius:99px;white-space:nowrap;flex-shrink:0">${p.year}</span>
        </div>
        <p>${p.description}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        ${p.file ? `
        <button class="cert-view-btn" onclick="openModal('${p.file.replace(/'/g, "\\'")}', '${p.title.replace(/'/g, "\\'")}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
          </svg>
          View Credential
        </button>` : ''}
      </div>
    </div>
  `).join('');
  observeReveal();
}

// ================================================================
// MODAL
// ================================================================
function openModal(file, title) {
  const overlay  = document.getElementById('modalOverlay');
  const body     = document.getElementById('modalBody');
  const modalTitle = document.getElementById('modalTitle');
  const path     = `assets/images/certificates/${file}`;
  const ext      = file.split('.').pop().toLowerCase();

  modalTitle.textContent = title;

  if (ext === 'pdf') {
    body.innerHTML = `<iframe src="${path}" title="${title}"></iframe>`;
  } else {
    body.innerHTML = `<img src="${path}" alt="${title}" />`;
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.getElementById('modalBody').innerHTML = '';
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ================================================================
// SCROLL REVEAL
// ================================================================
function observeReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

// ================================================================
// FILTERS
// ================================================================
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCertificates(btn.dataset.filter);
  });
});

// ================================================================
// NAVBAR
// ================================================================
const navbar   = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 80;
  sections.forEach(section => {
    const link = document.querySelector(`.nav-links a[href="#${section.id}"]`);
    if (!link) return;
    if (section.offsetTop <= scrollY && section.offsetTop + section.offsetHeight > scrollY) {
      document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
      link.style.color = 'var(--accent)';
    }
  });
});

// ================================================================
// PROFILE IMAGE — auto-detect if profile.jpg exists
// ================================================================
(function() {
  const placeholder = document.querySelector('.profile-placeholder');
  if (!placeholder) return;
  const img = new Image();
  img.onload = () => {
    placeholder.innerHTML = '';
    const el = document.createElement('img');
    el.src = 'assets/images/profile.jpg';
    el.alt = 'Ahmad Ishamul Ayady Akmal';
    placeholder.appendChild(el);
  };
  img.src = 'assets/images/profile.jpg';
})();

// ================================================================
// INIT
// ================================================================
renderCertificates();
renderProjects();
observeReveal();
