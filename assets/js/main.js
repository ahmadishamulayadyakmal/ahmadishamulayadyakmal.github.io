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
  { title: "Top 5 — ETIC 2022 (Energy Transition Innovation Challenge)", org: "Nexus Energy & Kementerian ESDM RI", year: 2022, level: "Nasional", category: "Competition", label: "Research and Innovation", file: "Top 5_ETIC.pdf" },
  { title: "Top 5 — Think Efficiency", org: "Shell & SRE (Society of Renewable Energy)", year: 2023, level: "Nasional", category: "Competition", label: "Energy Efficiency Competition", file: "Top 5_Think Efficiency.pdf" },
  { title: "Finalist — NBPC (National Business Plan Competition)", org: "PTN / HMJ", year: 2022, level: "Nasional", category: "Competition", label: "Business Plan", file: "Finalis NBPC.pdf" },
  { title: "Finalist — LKTIN PESC 2021", org: "Himpunan Elektro UM", year: 2021, level: "Nasional", category: "Competition", label: "Scientific Writing Competition", file: "Finalis PESC.pdf" },
  { title: "Finalist — UNYSEF #10 (UNY Scientific Fair)", org: "UKM Penelitian UNY", year: 2021, level: "Nasional", category: "Competition", label: "Scientific Writing Competition", file: "Finalis UNYSEF.pdf" },
  { title: "Runner Up — LKTIN IMATETANI", org: "IMATETANI", year: 2022, level: "Nasional", category: "Competition", file: "Harapan 1 LKTIN IMATETANI.png" },
  { title: "2nd Place — Estec III", org: "Estec", year: 2022, level: "Nasional", category: "Competition", label: "Scientific Writing Competition", file: "Juara 2_Estec III.png" },
  { title: "Finalist — NUSPEST", org: "PTN / Lembaga", year: 2022, level: "Nasional", category: "Competition", label: "Scientific Writing Competition", file: "Finalis NUSPEST.png" },

  // ── UNIVERSITY ACHIEVEMENTS ──
  { title: "Mahasiswa Berprestasi — Faculty of Engineering 2021 (Pilmapres FT)", org: "FT Universitas Jember", year: 2021, level: "Universitas", category: "Competition", label: "Pemilihan Mahasiswa Berprestasi", file: "Pilmapres FT 2021.pdf" },
  { title: "Mahasiswa Berprestasi — Faculty of Engineering 2022 (Pilmapres FT)", org: "FT Universitas Jember", year: 2022, level: "Universitas", category: "Competition", label: "Pemilihan Mahasiswa Berprestasi", file: "Pilmapres FT 2022.pdf" },
  { title: "Rank 2 — Outstanding Student, University of Jember (Pilmapres UNEJ)", org: "Universitas Jember", year: 2022, level: "Universitas", category: "Competition", label: "Pemilihan Mahasiswa Berprestasi", file: "PILMAPRES_Juara.pdf" },
  { title: "Campus Ambassador Favorite — Duta Kampus UNEJ", org: "Universitas Jember", year: 2022, level: "Universitas", category: "Competition", label: "Campus Ambassador Competition", file: "Duta Kampus_Favorit.pdf" },
  { title: "1st Place — PKM Raya (Karsa Cipta Category)", org: "Universitas Jember", year: 2022, level: "Universitas", category: "Competition", label: "Pekan Kreatifitas Mahasiswa", file: "PKM Raya_1 Poster KC.pdf" },
  { title: "Participant — PKM Raya Presentation (Karsa Cipta)", org: "Universitas Jember", year: 2022, level: "Universitas", category: "Competition", label: "Pekan Kreatifitas Mahasiswa", file: "PKM Raya_3 Presentasi KC.pdf" },
  { title: "Participant — Logo Design Competition, Electrical Engineering", org: "FT Universitas Jember", year: 2022, level: "Universitas", category: "Competition", file: "Lomba Logo Jurusan.pdf" },

  // ── CERTIFICATIONS ──
  // New entries from CV — upload the PDF with the exact `file` name below and the button will show it
  { title: "Cloud & Generative AI Fundamentals on AWS", org: "Dicoding Indonesia", year: 2026, level: "Nasional", category: "Credential", file: "Dicoding_AWS Cloud GenAI.pdf" },
  { title: "Applied Machine Learning", org: "Dicoding Indonesia", year: 2022, level: "Nasional", category: "Credential", file: "Dicoding_Applied Machine Learning.pdf" },
  { title: "Building Machine Learning Systems", org: "Dicoding Indonesia", year: 2026, level: "Nasional", category: "Credential", file: "Dicoding_Building ML Systems.pdf" },
  { title: "Deep Learning Fundamentals", org: "Dicoding Indonesia", year: "", level: "Nasional", category: "Credential", file: "Dicoding_Deep Learning Fundamentals.pdf" },
  { title: "Generative AI Fundamentals", org: "Dicoding Indonesia", year: 2026, level: "Nasional", category: "Credential", file: "Dicoding_Generative AI Fundamentals.pdf" },
  { title: "Data Analysis for Beginners", org: "Dicoding Indonesia", year: 2026, level: "Nasional", category: "Credential", file: "Dicoding_Data Analysis.pdf" },
  { title: "Data Science Fundamentals", org: "Dicoding Indonesia", year: 2026, level: "Nasional", category: "Credential", file: "Dicoding_Data Science Fundamentals.pdf" },
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
  { title: "BNSP Certification — PLC-Based Electronic Equipment Operation", org: "BNSP (Badan Nasional Sertifikasi Profesi)", year: 2022, level: "Nasional", category: "Credential", file: "Sertifikasi PLC.pdf" },

  // ── ORGANIZATION ──
  { title: "Chairman — UKM Einstein Research Club, FT UNEJ", org: "UKM Einstein FT UNEJ", year: 2021, level: "Universitas", category: "Organization", label: "Led 4 departments · 84% program completion · 26 awards", file: "UKM Einstein.pdf" },
  { title: "East Java Representative — Indonesia–Korea Youth Exchange Program", org: "Kemenpora RI", year: 2023, level: "Internasional", category: "Organization", label: "Youth Exchange Program", file: "Korea Youth Exchange.pdf" },
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
    description: "Building a multiphase CFD model that couples turbulent flow, thermal gradients and inclusion nucleation/transport to predict how non-metallic inclusions evolve and distribute in continuous casting of heavy rail steel, validated against industrial casting data from partner plants. Research under the LPDP–Tsingshan Group scholarship at USTB Beijing.",
    tags: ["CFD", "Multiphase Flow", "Heat Transfer", "Numerical Modeling"],
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
    title: "Scopus Q3 Journal Publication & Patent Application",
    description: "Undergraduate thesis published in the International Journal of Power Electronics and Drive Systems (IJPEDS, Scopus Q3, 2023): “Switch mode power supply with flyback LED driver topology in public lighting systems energy supply.” A patent application has also been filed for the flyback switch-mode power supply for LED drivers.",
    tags: ["Power Electronics", "Scopus Q3", "Patent Filed"],
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
    description: "Co-author of a registered-copyright collaborative academic book on energy storage technology, published under LP3M Universitas Jember, titled “Teknologi Penyimpanan Energi dan Perkembangannya.”",
    tags: ["Publication", "Author", "Book"],
    icon: "research",
    year: "2020",
    file: "Buku Karya Mahasiswa_Penulis.pdf"
  },
];


// ----------------------------------------------------------------
// HERO — rotating roles (edit freely)
// ----------------------------------------------------------------
const roles = [
  "Metallurgical Engineer",
  "Process Modeling & Simulation",
  "Metallurgical Data Analytics",
  "Engineering Design",
];

// ----------------------------------------------------------------
// RESEARCH — continuous casting stage texts
// ----------------------------------------------------------------
const castStages = {
  ladle: {
    tag: "Stage 01 · Ladle",
    title: "Ladle — Refining & Deoxidation",
    text: "Molten steel is refined and deoxidized before casting. Deoxidation and alloying reactions create the first population of non-metallic inclusions, and reoxidation during transfer can add more.",
  },
  tundish: {
    tag: "Stage 02 · Tundish",
    title: "Tundish — Buffer & Flotation",
    text: "The tundish distributes steel to the mold and gives inclusions time to float up into the covering slag. The flow pattern here decides how many inclusions are removed before solidification starts.",
  },
  mold: {
    tag: "Stage 03 · Mold",
    title: "Mold — Jet Flow & Entrapment",
    text: "Steel enters through the submerged entry nozzle (SEN) as a jet that recirculates inside the copper mold. Inclusions can be captured by the solidifying shell or carried deep into the liquid pool. This is the core of my CFD thesis work.",
  },
  strand: {
    tag: "Stage 04 · Strand",
    title: "Strand — Solidification & Final Distribution",
    text: "Spray cooling and support rolls complete solidification along the curved strand. Where inclusions end up across the section defines the cleanliness and fatigue performance of heavy rail steel.",
  },
};

// ================================================================
// HELPERS
// ================================================================
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer  = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const $  = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

function highlight(text, query) {
  const safe = esc(text);
  const q = query.trim();
  if (!q) return safe;
  const re = new RegExp(`(${esc(q).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig');
  return safe.replace(re, '<mark>$1</mark>');
}

let toastTimer;
function showToast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

const icons = {
  simulation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  energy:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
  research:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>`,
  business:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`,
  award:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  ai:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 9h.01M12 9h.01M17 9h.01"/></svg>`,
};
const eyeIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;

function getLevelClass(level) {
  if (level === 'Internasional') return 'level-Internasional';
  if (level === 'Nasional')      return 'level-Nasional';
  if (level === 'Universitas')   return 'level-Universitas';
  if (level === 'Kabupaten')     return 'level-Kabupaten';
  if (level.includes('Regional')) return 'level-Regional';
  return 'level-default';
}

// ================================================================
// CERTIFICATES — filter + search + show more
// ================================================================
const CERT_PREVIEW = 12;
const certState = { filter: 'all', query: '', expanded: false };

function filteredCerts() {
  const q = certState.query.trim().toLowerCase();
  return certificates.filter(c =>
    (certState.filter === 'all' || c.category === certState.filter) &&
    (!q || `${c.title} ${c.org} ${c.year} ${c.level} ${c.label || ''}`.toLowerCase().includes(q))
  );
}

function renderCertificates() {
  const grid = $('#certGrid');
  const list = filteredCerts();
  const searching = certState.query.trim() !== '';
  const visible = (certState.expanded || searching) ? list : list.slice(0, CERT_PREVIEW);
  const q = certState.query;

  grid.innerHTML = visible.length ? visible.map((cert, i) => `
    <div class="cert-card" style="--i:${Math.min(i, 14)}">
      <div class="cert-card-header">
        <span class="cert-title">${highlight(cert.title, q)}</span>
        <span class="cert-level ${getLevelClass(cert.level)}">${esc(cert.level)}</span>
      </div>
      <div class="cert-meta">${highlight(cert.org, q)}</div>
      <div class="cert-year">${[cert.year, esc(cert.label || cert.category)].filter(Boolean).join(' · ')}</div>
      ${cert.file ? `<button class="cert-view-btn" data-file="${esc(cert.file)}" data-title="${esc(cert.title)}">${eyeIcon} View Credential</button>` : ''}
    </div>
  `).join('') : `<p class="cert-empty">No certificates match “${esc(q)}”.</p>`;

  $('#certCount').textContent = `Showing ${visible.length} of ${list.length}`;

  const more = $('#certMore');
  more.innerHTML = (!searching && list.length > CERT_PREVIEW)
    ? `<button class="btn btn-outline" id="certMoreBtn">${certState.expanded ? 'Show less' : `Show all ${list.length} certificates`}</button>`
    : '';
}

function initCertificates() {
  // Counts on filter buttons
  $$('.filter-btn').forEach(btn => {
    const f = btn.dataset.filter;
    const n = f === 'all' ? certificates.length : certificates.filter(c => c.category === f).length;
    btn.insertAdjacentHTML('beforeend', `<span class="filter-count">${n}</span>`);
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      certState.filter = f;
      certState.expanded = false;
      renderCertificates();
    });
  });

  let searchTimer;
  $('#certSearch').addEventListener('input', e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { certState.query = e.target.value; renderCertificates(); }, 150);
  });

  $('#certMore').addEventListener('click', e => {
    if (!e.target.closest('#certMoreBtn')) return;
    certState.expanded = !certState.expanded;
    renderCertificates();
    if (!certState.expanded) $('#certificates').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  // Cards animate in once the grid enters the viewport
  const grid = $('#certGrid');
  new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) { grid.classList.add('in-view'); obs.disconnect(); }
  }, { threshold: 0.05 }).observe(grid);

  renderCertificates();
}

// ================================================================
// PROJECTS
// ================================================================
function renderProjects() {
  const grid = $('#portfolioGrid');
  grid.innerHTML = projects.map(p => `
    <div class="project-card reveal">
      <div class="project-header">
        <div class="project-icon">${icons[p.icon] || icons.research}</div>
        <span class="project-year">${esc(p.year)}</span>
      </div>
      <div class="project-body">
        <h3>${esc(p.title)}</h3>
        <p class="project-desc">${esc(p.description)}</p>
        <button class="read-more" hidden>Read more</button>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${esc(t)}</span>`).join('')}
        </div>
        ${p.file ? `<div class="project-actions"><button class="cert-view-btn" data-file="${esc(p.file)}" data-title="${esc(p.title)}">${eyeIcon} View Credential</button></div>` : ''}
      </div>
    </div>
  `).join('');

  // Show "Read more" only when the description is actually clipped
  requestAnimationFrame(() => {
    $$('.project-card', grid).forEach(card => {
      const desc = $('.project-desc', card);
      const btn  = $('.read-more', card);
      if (desc.scrollHeight > desc.clientHeight + 2) btn.hidden = false;
      btn.addEventListener('click', () => {
        const open = desc.classList.toggle('expanded');
        btn.textContent = open ? 'Show less' : 'Read more';
      });
    });
  });
}

// ================================================================
// MODAL
// ================================================================
let lastFocus = null;
function openModal(file, title) {
  const body = $('#modalBody');
  const path = `assets/images/certificates/${encodeURI(file)}`;
  const ext  = file.split('.').pop().toLowerCase();

  $('#modalTitle').textContent = title;
  $('#modalOpen').href = path;
  $('#modalOpen').hidden = false;
  body.innerHTML = '<p class="modal-note">Loading…</p>';

  // If the credential file hasn't been uploaded yet, show a friendly note instead of a 404
  fetch(path, { method: 'HEAD' })
    .then(r => r.ok)
    .catch(() => true) // offline / file:// — just try to show it
    .then(exists => {
      if (!$('#modalOverlay').classList.contains('active')) return;
      if (!exists) {
        $('#modalOpen').hidden = true;
        body.innerHTML = `<p class="modal-note">The credential file for this certificate will be available soon.</p>`;
        return;
      }
      body.innerHTML = ext === 'pdf'
        ? `<iframe src="${path}" title="${esc(title)}"></iframe>`
        : `<img src="${path}" alt="${esc(title)}" />`;
    });

  lastFocus = document.activeElement;
  $('#modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  $('#modalClose').focus();
}

function closeModal() {
  const overlay = $('#modalOverlay');
  if (!overlay.classList.contains('active')) return;
  overlay.classList.remove('active');
  $('#modalBody').innerHTML = '';
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}

$('#modalClose').addEventListener('click', closeModal);
$('#modalOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// One listener for every "View Credential" button and "Copy" button
document.addEventListener('click', e => {
  const view = e.target.closest('[data-file]');
  if (view) { openModal(view.dataset.file, view.dataset.title); return; }

  const copy = e.target.closest('[data-copy]');
  if (copy) {
    const text = copy.dataset.copy;
    const done = () => showToast(`Copied: ${text}`);
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, () => showToast(text));
    else showToast(text);
  }
});

// ================================================================
// SCROLL REVEAL
// ================================================================
const revealObserver = new IntersectionObserver(entries => {
  let i = 0;
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    setTimeout(() => el.classList.add('visible'), (i++) * 80);
    revealObserver.unobserve(el);
  });
}, { threshold: 0.1 });

function observeReveal() {
  $$('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

// ================================================================
// HERO — typing roles
// ================================================================
function initTyping() {
  const el = $('#typed');
  if (!el || reduceMotion) return;
  let r = 0, c = roles[0].length, deleting = true;
  const tick = () => {
    const word = roles[r];
    if (deleting) {
      c--;
      if (c <= 0) { deleting = false; r = (r + 1) % roles.length; }
    } else {
      c++;
      if (c >= roles[r].length) { deleting = true; el.textContent = roles[r]; return setTimeout(tick, 2200); }
    }
    el.textContent = roles[r].slice(0, Math.max(0, c)) || '​';
    setTimeout(tick, deleting ? 35 : 70);
  };
  setTimeout(tick, 2600);
}

// ================================================================
// HERO — "molten flow" field on canvas (reacts to the cursor)
// ================================================================
function initHeroFlow() {
  const canvas = $('#heroCanvas');
  const hero = $('#home');
  if (!canvas || reduceMotion) return;
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, particles = [], running = false, t = 0;
  const mouse = { x: -9999, y: -9999 };

  const spawn = () => ({ x: Math.random() * w, y: Math.random() * h, life: 80 + Math.random() * 220, hot: Math.random() < 0.14 });

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(240, Math.floor((w * h) / 6500));
    particles = Array.from({ length: n }, spawn);
  }

  // Smooth pseudo flow field, mostly drifting to the right
  const angle = (x, y) =>
    Math.sin(x * 0.0024 + t * 0.004) * 1.4 + Math.cos(y * 0.0032 - t * 0.003) * 1.1 + 0.2;

  function frame() {
    if (!running) return;
    t++;
    // Fade previous frame to leave soft trails (keeps the CSS gradient visible)
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0,0,0,0.07)';
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'source-over';
    ctx.lineWidth = 1.3;

    const cool = new Path2D(), hot = new Path2D();
    for (const p of particles) {
      const a = angle(p.x, p.y);
      let vx = Math.cos(a) * 1.15, vy = Math.sin(a) * 1.15;
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
      if (d2 < 19000) { // vortex around the cursor, like a stirring rod
        const d = Math.sqrt(d2) || 1, f = (1 - d / 138) * 2.6;
        vx += (-dy / d) * f + (dx / d) * f * 0.4;
        vy += (dx / d) * f + (dy / d) * f * 0.4;
      }
      const path = p.hot ? hot : cool;
      path.moveTo(p.x, p.y);
      p.x += vx; p.y += vy; p.life--;
      path.lineTo(p.x, p.y);
      if (p.life < 0 || p.x < -10 || p.x > w + 10 || p.y < -10 || p.y > h + 10) Object.assign(p, spawn());
    }
    ctx.strokeStyle = 'rgba(30,95,191,.30)'; ctx.stroke(cool);
    ctx.strokeStyle = 'rgba(249,115,22,.60)'; ctx.stroke(hot);
    requestAnimationFrame(frame);
  }

  hero.addEventListener('pointermove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  hero.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });

  let resizeTimer;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150); });

  new IntersectionObserver(([entry]) => {
    const was = running;
    running = entry.isIntersecting && !document.hidden;
    if (running && !was) requestAnimationFrame(frame);
  }).observe(hero);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) running = false;
    else if (hero.getBoundingClientRect().bottom > 0) { running = true; requestAnimationFrame(frame); }
  });

  resize();
}

// ================================================================
// HERO — parallax on the profile + element tiles, magnetic buttons
// ================================================================
function initHeroParallax() {
  if (!finePointer || reduceMotion) return;
  const hero = $('#home');
  const wrap = $('#profileWrapper');
  const tiles = $$('.element-tile');
  hero.addEventListener('pointermove', e => {
    const nx = e.clientX / window.innerWidth - 0.5;
    const ny = e.clientY / window.innerHeight - 0.5;
    wrap.style.transform = `perspective(900px) rotateY(${nx * 10}deg) rotateX(${-ny * 10}deg)`;
    tiles.forEach(t => {
      const d = +t.dataset.depth || 20;
      t.style.transform = `translate(${nx * d}px, ${ny * d}px)`;
    });
  });
  hero.addEventListener('pointerleave', () => {
    wrap.style.transform = '';
    tiles.forEach(t => (t.style.transform = ''));
  });

  $$('.magnetic').forEach(btn => {
    btn.addEventListener('pointermove', e => {
      const r = btn.getBoundingClientRect();
      btn.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.25}px ${(e.clientY - r.top - r.height / 2) * 0.35}px`;
    });
    btn.addEventListener('pointerleave', () => (btn.style.translate = ''));
  });
}

// ================================================================
// TILT + SPOTLIGHT CARDS
// ================================================================
function initTilt() {
  if (!finePointer || reduceMotion) return;
  $$('.skill-group, .project-card, .contact-card, .stat-card').forEach(el => {
    el.classList.add('tilt');
    const max = el.classList.contains('stat-card') ? 10 : 6;
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      el.style.setProperty('--rx', `${((0.5 - py) * max).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${((px - 0.5) * max).toFixed(2)}deg`);
      el.style.setProperty('--mx', `${px * 100}%`);
      el.style.setProperty('--my', `${py * 100}%`);
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  });
}

// ================================================================
// STAT COUNTERS
// ================================================================
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      obs.unobserve(el);
      const target = +el.dataset.count, suffix = el.dataset.suffix || '';
      el.closest('.stat-card')?.classList.add('counted');
      if (reduceMotion) return;
      const dur = 1400, start = performance.now();
      const step = now => {
        const k = clamp((now - start) / dur, 0, 1);
        const eased = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(target * eased) + (k === 1 ? suffix : '');
        if (k < 1) requestAnimationFrame(step);
      };
      el.textContent = '0';
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  $$('[data-count]').forEach(el => obs.observe(el));
}

// ================================================================
// RESEARCH — interactive continuous casting
// ================================================================
function initCasting() {
  const svg = $('#castSvg');
  if (!svg) return;
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs, parent) => {
    const el = document.createElementNS(NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    parent.appendChild(el);
    return el;
  };

  // Rollers and spray nozzles along the strand
  const strand = $('#strandPath', svg);
  const SL = strand.getTotalLength();
  const rollers = $('#rollers', svg), sprays = $('#sprays', svg);
  let k = 0;
  for (let s = 18; s < SL - 30; s += 34, k++) {
    const p = strand.getPointAtLength(s), q = strand.getPointAtLength(s + 1);
    let nx = -(q.y - p.y), ny = q.x - p.x;
    const n = Math.hypot(nx, ny) || 1; nx /= n; ny /= n;
    [-1, 1].forEach(side => mk('circle', { cx: p.x + side * nx * 29, cy: p.y + side * ny * 29, r: 6, class: 'roller' }, rollers));
    if (s < 260 && k % 2 === 0) {
      // nozzle on the outer side of the arc, spraying toward the strand
      const ox = p.x + nx * 44, oy = p.y + ny * 44;
      mk('line', { x1: ox, y1: oy, x2: p.x + nx * 36, y2: p.y + ny * 36, class: 'spray', style: `animation-delay:${-k * 0.15}s` }, sprays);
    }
  }

  // Inclusion particles travelling along the flow path
  const flow = $('#flowPath', svg);
  const L = flow.getTotalLength();
  const layer = $('#inclusions', svg);
  let speed = 1, playing = !reduceMotion, visible = false;

  const halfWidth = pt => {
    if (pt.x < 140 && pt.y < 150) return 1.5;                    // ladle shroud stream
    if (pt.y < 197 && pt.x < 296) return 13;                     // tundish pool
    if (pt.y < 232 && Math.abs(pt.x - 300) < 6) return 1.5;      // SEN
    if (pt.y < 290) return 15;                                    // mold
    return 15;                                                    // strand
  };

  const reset = (p, s = 0) => Object.assign(p, {
    s, j: Math.random() * 2 - 1, v: 0.75 + Math.random() * 0.5,
    floater: Math.random() < 0.38, mode: 'flow', alpha: 1, w: 1.5, x: 0, y: 0,
  });
  const parts = Array.from({ length: 38 }, (_, i) => {
    const el = mk('circle', { r: (1.6 + Math.random() * 1.8).toFixed(1), class: 'incl' }, layer);
    return reset({ el }, (i / 38) * L);
  });

  function place(p) {
    p.el.setAttribute('cx', p.x.toFixed(1));
    p.el.setAttribute('cy', p.y.toFixed(1));
    p.el.setAttribute('opacity', p.alpha.toFixed(2));
  }

  function step() {
    for (const p of parts) {
      if (p.mode === 'float') {
        // Rising into the tundish slag layer, then absorbed
        p.y -= 0.45 * speed;
        p.x += Math.sin(p.y * 0.3) * 0.2;
        if (p.y < 152) p.alpha -= 0.04 * speed;
        if (p.alpha <= 0) reset(p, 0);
        place(p);
        continue;
      }
      const pt = flow.getPointAtLength(p.s);
      const ahead = flow.getPointAtLength(Math.min(L, p.s + 1));
      let nx = -(ahead.y - pt.y), ny = ahead.x - pt.x;
      const n = Math.hypot(nx, ny) || 1; nx /= n; ny /= n;
      const target = halfWidth(pt);
      p.w += (target - p.w) * 0.12;
      p.x = pt.x + nx * p.j * p.w;
      p.y = pt.y + ny * p.j * p.w;
      const boost = target < 3 ? 2.4 : 1;      // faster through narrow nozzles
      p.s += p.v * speed * boost * 1.1;
      if (p.floater && pt.x > 175 && pt.x < 265 && pt.y < 200 && Math.random() < 0.03) p.mode = 'float';
      if (p.s >= L) reset(p, 0);
      place(p);
    }
  }

  function loop() {
    if (!playing || !visible) return;
    step();
    requestAnimationFrame(loop);
  }
  step(); // initial placement (also used when motion is reduced)

  new IntersectionObserver(([entry]) => {
    const was = visible && playing;
    visible = entry.isIntersecting;
    if (visible && playing && !was) requestAnimationFrame(loop);
    syncCycle();
  }, { threshold: 0.15 }).observe(svg);

  // Controls
  const playBtn = $('#castPlay');
  const setPlaying = on => {
    playing = on;
    playBtn.classList.toggle('paused', !on);
    playBtn.setAttribute('aria-label', on ? 'Pause animation' : 'Play animation');
    svg.classList.toggle('paused', !on);
    if (on && visible) requestAnimationFrame(loop);
  };
  playBtn.addEventListener('click', () => setPlaying(!playing));
  setPlaying(playing);

  const speedInput = $('#castSpeed'), speedOut = $('#castSpeedOut');
  const applySpeed = () => {
    speed = +speedInput.value;
    speedOut.textContent = `${speed.toFixed(1)}×`;
    svg.style.setProperty('--flow-dur', `${(1.6 / speed).toFixed(2)}s`);
  };
  speedInput.addEventListener('input', applySpeed);
  applySpeed();

  // Stage selection (buttons, hotspots, or clicking a part of the drawing)
  const order = Object.keys(castStages);
  const card = $('#castCard'), bar = $('#castProgress');
  const CYCLE = 6000;
  let current = null, autoplay = !reduceMotion, cycleTimer = null;
  card.style.setProperty('--cycle', `${CYCLE}ms`);

  function setStage(key) {
    current = key;
    const s = castStages[key];
    svg.dataset.active = key;
    $$('.cast-step').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.stage === key)));
    $$('.hotspot', svg).forEach(h => h.classList.toggle('active', h.dataset.stage === key));
    $('#castTag').textContent = s.tag;
    $('#castHeading').textContent = s.title;
    $('#castText').textContent = s.text;
    card.classList.remove('swap'); void card.offsetWidth; card.classList.add('swap');
    bar.classList.remove('run'); void bar.offsetWidth;
    if (autoplay && visible) bar.classList.add('run');
  }

  function syncCycle() {
    clearInterval(cycleTimer);
    if (!autoplay || !visible) { bar.classList.remove('run'); return; }
    bar.classList.remove('run'); void bar.offsetWidth; bar.classList.add('run');
    cycleTimer = setInterval(() => setStage(order[(order.indexOf(current) + 1) % order.length]), CYCLE);
  }

  const choose = key => { autoplay = false; clearInterval(cycleTimer); setStage(key); };
  $$('.cast-step').forEach(b => b.addEventListener('click', () => choose(b.dataset.stage)));
  $$('[data-stage]', svg).forEach(el => {
    el.addEventListener('click', () => choose(el.dataset.stage));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(el.dataset.stage); }
    });
  });

  setStage(order[0]);
}

// ================================================================
// SCROLL: navbar, active link, progress bar, timelines, back-to-top
// ================================================================
function initScroll() {
  const navbar = $('#navbar');
  const progress = $('#scrollProgress');
  const toTop = $('#toTop'), toTopFill = $('#toTopFill');
  const sections = $$('section[id]');
  const links = $$('.nav-links a');
  const timelines = $$('.timeline');
  const RING = 132;
  let ticking = false;

  function update() {
    ticking = false;
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? y / max : 0;

    navbar.classList.toggle('scrolled', y > 20);
    progress.style.transform = `scaleX(${ratio})`;
    toTop.classList.toggle('show', y > 600);
    toTopFill.style.strokeDashoffset = RING * (1 - ratio);

    // Active nav link
    const probe = y + 90;
    let activeId = null;
    sections.forEach(s => { if (s.offsetTop <= probe) activeId = s.id; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${activeId}`));

    // Timeline line fills as you scroll; markers light up when passed
    const mid = window.innerHeight * 0.6;
    timelines.forEach(tl => {
      const r = tl.getBoundingClientRect();
      const pct = clamp((mid - r.top) / r.height, 0, 1);
      tl.style.setProperty('--progress', `${pct * 100}%`);
      $$('.timeline-item', tl).forEach(item => {
        const mr = $('.timeline-marker', item).getBoundingClientRect();
        item.classList.toggle('passed', mr.top < mid);
      });
    });
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();

  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

  // Mobile menu
  const navToggle = $('#navToggle'), navLinks = $('#navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  links.forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// ================================================================
// INIT
// ================================================================
$('#year').textContent = new Date().getFullYear();
// "Certificates & Awards" stat always matches the list above
$('#statCerts').dataset.count = certificates.length;
$('#statCerts').textContent = `${certificates.length}+`;
initCertificates();
renderProjects();
observeReveal();
initScroll();
initTyping();
initHeroFlow();
initHeroParallax();
initCounters();
initCasting();
// Tilt needs the project cards to exist, so it runs after renderProjects()
initTilt();
