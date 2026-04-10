/* ============================================================
   SCRIPT.JS — Ahmad Ishamul Personal Branding Website
   ============================================================ */

/* ---- PORTFOLIO DATA ---- */
const portfolio = {

  prestasi: {
    internasional: [
      { name: "Gold Medal – International Youth Business Competition (IYBC)", org: "IYBC Organizer", year: 2022, status: "Gold Medal", file: "documents/Prestasi/Internasional/Gold Medal IYBC.pdf" },
      { name: "Silver Medal – Glocolis International Competition", org: "Glocolis", year: 2022, status: "Silver Medal", file: "documents/Prestasi/Internasional/Silver Medal Glocolis.pdf" },
      { name: "Silver Medal – IEI2C Business Plan", org: "IEI2C", year: 2022, status: "Silver Medal", file: "documents/Prestasi/Internasional/Silver Medal IEI2C BP.pdf" },
      { name: "Silver Medal – IEI2C Scientific Paper", org: "IEI2C", year: 2022, status: "Silver Medal", file: "documents/Prestasi/Internasional/Silver Medal IEI2C PAPER.pdf" },
      { name: "Silver Medal – World Youth Invention and Innovation Award (WYIIA)", org: "WYIIA", year: 2022, status: "Silver Medal", file: "documents/Prestasi/Internasional/Silver Medal WYIIA.pdf" },
      { name: "Bronze Medal – Youth International Science Fair (YISF)", org: "YISF", year: 2022, status: "Bronze Medal", file: "documents/Prestasi/Internasional/Bronze Medal YISF.pdf" },
      { name: "Juara 1 Esai – PPIT Chengdu / USTB", org: "PPI Tiongkok / USTB", year: 2025, status: "Juara 1", file: "documents/Prestasi/Internasional/Juara 1 Esai PPIT Chengdu.jpg" },
      { name: "Peserta – AWMUN III (ASEAN World Model United Nations)", org: "AWMUN", year: 2021, status: "Peserta", file: "documents/Prestasi/Internasional/AWMUN III.png" },
    ],
    regional: [
      { name: "Runner Up – SEA U-ICON 2021 (Bank Mandiri Category)", org: "STIE IBS / SEA U-ICON", year: 2021, status: "Runner Up", file: "documents/Prestasi/Regional Asia/Sea U Icon.pdf" },
    ],
    nasional: [
      { name: "Beswan Djarum Angkatan 37 – Djarum Beasiswa Plus", org: "Djarum Foundation", year: 2022, status: "Penerima Beasiswa", file: "documents/Prestasi/Nasional/Beswan Djarum 37.pdf" },
      { name: "Penulis Buku Karya Bersama Mahasiswa", org: "LP3M Universitas Jember", year: 2020, status: "Penulis", file: "documents/Prestasi/Nasional/Buku Karya Mahasiswa_Penulis.pdf" },
      { name: "Juara 1 – Lomba Poster Nasional EPIC (Dies Natalis Elektro)", org: "Jurusan Teknik Elektro UNEJ", year: 2022, status: "Juara 1", file: "documents/Prestasi/Nasional/Juara 1_EPIC.pdf" },
      { name: "Juara 2 – LIDM (Sertifikat Kementerian Dikbud Ristek)", org: "Kemendikbud Ristek", year: 2021, status: "Juara 2", file: "documents/Prestasi/Nasional/Juara 2_LIDM Kementrian.pdf" },
      { name: "Best Team – BPCPRE (Business Plan Competition in Renewable Energy)", org: "UNDP Indonesia", year: 2022, status: "Best Team", file: "documents/Prestasi/Nasional/Best Team_BPCPRE.pdf" },
      { name: "Top 10 – ETIC (Energy Transitions Innovation Challenge) 2022", org: "Kementerian ESDM RI", year: 2022, status: "Top 10", file: "documents/Prestasi/Nasional/Top 10_ETIC.png" },
      { name: "Top 5 – ETIC (Energy Transitions Innovation Challenge) 2022", org: "Kementerian ESDM RI", year: 2022, status: "Top 5", file: "documents/Prestasi/Nasional/Top 5_ETIC.pdf" },
      { name: "Finalis – NBPC (National Business Plan Competition)", org: "PTN / HMJ", year: 2022, status: "Finalis", file: "documents/Prestasi/Nasional/Finalis NBPC.pdf" },
      { name: "Finalis – LKTIN PESC 2021", org: "Himpunan Elektro UM", year: 2021, status: "Finalis", file: "documents/Prestasi/Nasional/Finalis PESC.pdf" },
      { name: "Finalis – UNYSEF #10 (UNY Scientific Fair)", org: "UKM Penelitian UNY", year: 2021, status: "Finalis", file: "documents/Prestasi/Nasional/Finalis UNYSEF.pdf" },
      { name: "Harapan 1 – LKTIN IMATETANI", org: "IMATETANI", year: 2022, status: "Harapan 1", file: "documents/Prestasi/Nasional/Harapan 1 LKTIN IMATETANI.png" },
      { name: "Juara 2 – Estec III", org: "Estec", year: 2022, status: "Juara 2", file: "documents/Prestasi/Nasional/Juara 2_Estec III.png" },
      { name: "Finalis – NUSPEST", org: "PTN / Lembaga", year: 2022, status: "Finalis", file: "documents/Prestasi/Nasional/Finalis NUSPEST.png" },
      { name: "Lolos Pendanaan – KBMI (Kompetisi Bisnis Mahasiswa Indonesia)", org: "Kemendikbud Ristek", year: 2021, status: "Peserta Pendanaan", file: "documents/Prestasi/Nasional/KBMI.pdf" },
      { name: "Penerima Hibah – PROMAHADESA (Program Mahasiswa Desa)", org: "Universitas Jember", year: 2022, status: "Penerima Hibah", file: "documents/Prestasi/Nasional/PROMAHADESA.pdf" },
      { name: "F-Light – Penerima PPMW (Program Pengembangan Mahasiswa Wirausaha)", org: "Universitas Jember", year: 2022, status: "Penerima Dana", file: "documents/Prestasi/Nasional/PPMW.pdf" },
    ],
    universitas: [
      { name: "Mahasiswa Berprestasi – Fakultas Teknik UNEJ 2021", org: "FT Universitas Jember", year: 2021, status: "Juara (Pilmapres FT)", file: "documents/Prestasi/Universitas/Pilmapres FT 2021.pdf" },
      { name: "Mahasiswa Berprestasi – Fakultas Teknik UNEJ 2022", org: "FT Universitas Jember", year: 2022, status: "Juara (Pilmapres FT)", file: "documents/Prestasi/Universitas/Pilmapres FT 2022.pdf" },
      { name: "Mahasiswa Berprestasi Universitas Jember (PILMAPRES)", org: "Universitas Jember", year: 2022, status: "Juara (Pilmapres UNEJ)", file: "documents/Prestasi/Universitas/PILMAPRES_Juara.pdf" },
      { name: "Duta Kampus UNEJ – Favorit Rektor", org: "Universitas Jember", year: 2022, status: "Duta Favorit Rektor", file: "documents/Prestasi/Universitas/Duta Kampus_Favorit Rektor.pdf" },
      { name: "PKM Raya – Juara 1 Poster Kreasi Cerita (KC)", org: "Universitas Jember", year: 2022, status: "Juara 1", file: "documents/Prestasi/Universitas/PKM Raya_1 Poster KC.pdf" },
    ],
    kabupaten: [
      { name: "Musabaqah Tilawatil Quran (MTQ) 2021 – Kab. Jember", org: "LPTQ / Kab. Jember", year: 2021, status: "Peserta / Juara", file: "documents/Prestasi/Kabupaten/MTQ 2021.pdf" },
      { name: "Musabaqah Tilawatil Quran (MTQ) 2022 – Kab. Jember", org: "LPTQ / Kab. Jember", year: 2022, status: "Peserta / Juara", file: "documents/Prestasi/Kabupaten/MTQ 2022.pdf" },
    ],
    ma: [
      { name: "Duta Karya – Madrasah Aliyah", org: "Madrasah Aliyah", year: "~2018", status: "Duta Karya", file: "documents/Prestasi/MA - Madrasah Aliyah/Duta Karya.png" },
      { name: "Finalis National English Competition", org: "Nasional", year: "~2018", status: "Finalis", file: "documents/Prestasi/MA - Madrasah Aliyah/Finalis_National English.png" },
      { name: "Finalis National Math Competition", org: "Nasional", year: "~2018", status: "Finalis", file: "documents/Prestasi/MA - Madrasah Aliyah/Finalis_National Math.png" },
      { name: "Harapan 2 – OISEMA", org: "OISEMA", year: "~2018", status: "Harapan 2", file: "documents/Prestasi/MA - Madrasah Aliyah/Harapan 2_OISEMA.png" },
      { name: "Juara 1 – Baca Kitab Kuning", org: "Madrasah Aliyah", year: "~2018", status: "Juara 1", file: "documents/Prestasi/MA - Madrasah Aliyah/Juara 1_Baca Kitab Kuning.png" },
      { name: "Juara 2 – JUMBARA PMR", org: "PMR", year: "~2018", status: "Juara 2", file: "documents/Prestasi/MA - Madrasah Aliyah/Juara 2_JUMBARA.png" },
      { name: "Juara 2 – KSM Biologi", org: "Kemenag", year: "~2018", status: "Juara 2", file: "documents/Prestasi/MA - Madrasah Aliyah/Juara 2_KSM Bio.png" },
      { name: "Juara 3 – KSM Bahasa Arab", org: "Kemenag", year: "~2018", status: "Juara 3", file: "documents/Prestasi/MA - Madrasah Aliyah/Juara 3_KSM B Arab.png" },
      { name: "Wisudawan Terbaik – Madrasah Aliyah", org: "Madrasah Aliyah", year: 2019, status: "Wisudawan Terbaik", file: "documents/Prestasi/MA - Madrasah Aliyah/Wisudawan Terbaik.png" },
    ],
  },

  sertifikasi: {
    onlineCourse: [
      { name: "Belajar Penerapan Data Science dengan Microsoft Fabric", org: "Dicoding Indonesia", year: 2026, status: "Lulus", file: "documents/Sertifikasi/Online Course/sertifikat_course_902_1510859_260226145240.pdf" },
      { name: "Membangun Aplikasi Gen AI dengan Microsoft Azure", org: "Dicoding Indonesia", year: 2026, status: "Lulus", file: "documents/Sertifikasi/Online Course/sertifikat_course_899_1510859_150326110907.pdf" },
      { name: "Belajar Fundamental Pemrosesan Data", org: "Dicoding Indonesia", year: 2026, status: "Lulus", file: "documents/Sertifikasi/Online Course/sertifikat_course_708_1510859_250326114410.pdf" },
      { name: "Belajar Machine Learning untuk Pemula", org: "Dicoding Indonesia", year: 2026, status: "Lulus", file: "documents/Sertifikasi/Online Course/sertifikat_course_184_1510859_290326090040.pdf" },
      { name: "Belajar Dasar AI", org: "Dicoding Indonesia", year: 2026, status: "Lulus", file: "documents/Sertifikasi/Online Course/sertifikat_course_653_1510859_280326145627.pdf" },
      { name: "Belajar Strategi Pengembangan Diri", org: "Dicoding Indonesia", year: 2026, status: "Lulus", file: "documents/Sertifikasi/Online Course/sertifikat_course_697_1510859_290326191337.pdf" },
      { name: "Prompt Engineering untuk Software Developer", org: "Dicoding Indonesia", year: 2026, status: "Lulus", file: "documents/Sertifikasi/Online Course/sertifikat_course_753_1510859_280326152133.pdf" },
      { name: "Memulai Pemrograman dengan Python", org: "Dicoding Indonesia", year: 2026, status: "Lulus", file: "documents/Sertifikasi/Online Course/sertifikat_course_86_1510859_280326192907.pdf" },
      { name: "Belajar Dasar Git dengan GitHub", org: "Dicoding Indonesia", year: 2022, status: "Lulus", file: "documents/Sertifikasi/Online Course/Dicoding_Studi Independent.pdf" },
      { name: "Belajar Dasar Visualisasi Data", org: "Dicoding Indonesia", year: 2021, status: "Lulus", file: "documents/Sertifikasi/Online Course/Dicoding_Dasar Visualisasi Data.pdf" },
      { name: "Studi Independen Bersertifikat Dicoding (SIB)", org: "Dicoding / Kemendikbud", year: 2022, status: "Lulus", file: "documents/Sertifikasi/Online Course/SIB.pdf" },
      { name: "Renewable Power and Electricity Systems", org: "Coursera / Univ. of Colorado Boulder", year: 2023, status: "Lulus", file: "documents/Sertifikasi/Online Course/Coursera KWKAQDY2GEQW.pdf" },
      { name: "Electrical Power Generation – An Industrial Outlook", org: "Coursera / L&T EduTech", year: 2023, status: "Lulus", file: "documents/Sertifikasi/Online Course/Coursera Q4V8U4T47QRW.pdf" },
      { name: "ET3034x: Solar Energy – TU Delft", org: "DelftX / edX (TU Delft)", year: 2023, status: "Lulus", file: "documents/Sertifikasi/Online Course/DelftX ET3034x Certificate _ edX.pdf" },
      { name: "Machine Learning & Deep Learning (KMMI)", org: "KMMI / Kemendikbud", year: 2022, status: "Lulus", file: "documents/Sertifikasi/Online Course/KMMI_MLDL.pdf" },
    ],
    pelatihan: [
      { name: "LKMM-TD (Latihan Kepemimpinan Manajemen Mahasiswa Tingkat Dasar)", org: "Universitas Jember", year: 2020, status: "Peserta", file: "documents/Sertifikasi/Pelatihan/LKMM-TD.pdf" },
      { name: "LKMM-TM (Tingkat Menengah)", org: "Universitas Jember", year: 2021, status: "Peserta", file: "documents/Sertifikasi/Pelatihan/LKMM-TM.pdf" },
      { name: "Sertifikasi PLC (Programmable Logic Controller)", org: "Lembaga Sertifikasi", year: 2022, status: "Bersertifikat", file: "documents/Sertifikasi/Pelatihan/Sertifikasi PLC.pdf" },
    ],
    internship: [
      { name: "Asisten Laboratorium Teknik Elektro", org: "FT Universitas Jember", year: 2021, status: "Asisten Lab", file: "documents/Sertifikasi/Internship/Asisten Lab.pdf" },
      { name: "Kerja Praktik – PT Lentera Bumi Nusantara (Closeloop Control DC-DC Converter)", org: "PT Lentera Bumi Nusantara", year: 2022, status: "Magang Mandiri", file: "documents/Sertifikasi/Internship/Kerja Praktik_LBN.pdf" },
    ],
  },

  organisasi: [
    { name: "Ketua UKM Einstein FT UNEJ", org: "UKM Einstein FT UNEJ", year: 2022, status: "Ketua", kategori: "UKM & Lembaga", file: "documents/Organisasi/UKM Einstein.pdf" },
    { name: "Dewan Pengawas UKM Einstein", org: "UKM Einstein FT UNEJ", year: 2023, status: "Dewan Pengawas", kategori: "UKM & Lembaga", file: "documents/Organisasi/Dewas Einstein.pdf" },
    { name: "Surat Aktif UKM Einstein FT UNEJ", org: "UKM Einstein FT UNEJ", year: 2022, status: "Anggota Aktif", kategori: "UKM & Lembaga", file: "documents/Organisasi/Surat Aktif UKM EInstein.pdf" },
    { name: "Anggota UKM Mustika UNEJ", org: "UKM Mustika UNEJ", year: 2021, status: "Anggota", kategori: "UKM & Lembaga", file: "documents/Organisasi/UKM Mustika.pdf" },
    { name: "Pengurus UKMKI LDK Universitas Jember", org: "UKMKI LDK UNEJ", year: 2021, status: "Pengurus", kategori: "UKM & Lembaga", file: "documents/Organisasi/SK Pengurus UKMKI LDK.pdf" },
    { name: "Anggota Sahabat Perpustakaan UNEJ", org: "Sahabat Perpustakaan UNEJ", year: 2021, status: "Anggota", kategori: "UKM & Lembaga", file: "documents/Organisasi/Sahabat Perpustakaan.png" },
    { name: "Chief Executive EYF Webinar Internasional", org: "Education Youth Forum", year: 2021, status: "Chief Executive", kategori: "Kepemimpinan", file: "documents/Organisasi/EYF_Ketupel.pdf" },
    { name: "Ketua Pelaksana EGE (Electrical Great Exhibition)", org: "EGE / UNEJ", year: 2021, status: "Ketua Pelaksana", kategori: "Kepanitiaan", file: "documents/Organisasi/EGE_Ketupel.pdf" },
    { name: "Ketua Panitia Acara JLT", org: "UNEJ / HMJ", year: 2022, status: "Ketua Panitia", kategori: "Kepanitiaan", file: "documents/Organisasi/JLT_Acara.pdf" },
    { name: "Koordinator Committee – MET (Mechanical Electrical Talkshow)", org: "MET / UNEJ", year: 2022, status: "Koordinator", kategori: "Kepanitiaan", file: "documents/Organisasi/MET_Koordinator Commitee.jpg" },
    { name: "Anggota SINO (Scholars of Indonesia-China Network)", org: "SINO", year: 2025, status: "Anggota", kategori: "Internasional", file: "documents/Organisasi/SK Anggota 01-ORG-X-25.pdf" },
    { name: "Leadership Development Program – Beswan Djarum", org: "Djarum Foundation", year: 2022, status: "Peserta Program", kategori: "Program", file: null },
  ],
};

/* ---- STATUS ICON HELPER ---- */
function getStatusIcon(status) {
  const s = status.toLowerCase();
  if (s.includes('gold') || s.includes('juara 1') || s.includes('terbaik')) return '🥇';
  if (s.includes('silver') || s.includes('juara 2') || s.includes('runner up')) return '🥈';
  if (s.includes('bronze') || s.includes('juara 3')) return '🥉';
  if (s.includes('beasiswa') || s.includes('lpdp')) return '🎓';
  if (s.includes('best team')) return '🏆';
  if (s.includes('top 10') || s.includes('top 5')) return '⭐';
  if (s.includes('harapan')) return '🎖️';
  if (s.includes('finalis')) return '🎯';
  if (s.includes('juara')) return '🏅';
  if (s.includes('lulus')) return '✅';
  if (s.includes('ketua')) return '👑';
  if (s.includes('chief')) return '🌐';
  if (s.includes('penulis')) return '📝';
  if (s.includes('penerima')) return '💰';
  if (s.includes('asisten')) return '🔬';
  return '📄';
}

/* ---- LEVEL BADGE CLASS HELPER ---- */
function getLevelClass(level) {
  const l = (level || '').toLowerCase();
  if (l.includes('internasional')) return 'level-intl';
  if (l.includes('regional')) return 'level-regional';
  if (l.includes('nasional')) return 'level-national';
  if (l.includes('universitas')) return 'level-univ';
  if (l.includes('kabupaten')) return 'level-kab';
  if (l.includes('ma') || l.includes('madrasah') || l.includes('sekolah')) return 'level-ma';
  return 'level-univ';
}

/* ---- BUILD ACHIEVEMENT CARD ---- */
function buildCard(item, levelLabel, levelClass) {
  const icon = getStatusIcon(item.status);
  const fileExt = item.file ? item.file.split('.').pop().toLowerCase() : '';
  const isImage = ['png', 'jpg', 'jpeg', 'jfif'].includes(fileExt);

  const proofBtn = item.file
    ? `<button class="btn-proof" onclick="openModal('${encodeURIComponent(item.file)}', '${escapeAttr(item.name)}', ${isImage})">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        Lihat Bukti
       </button>`
    : `<span style="font-size:0.78rem;color:var(--text-light);">Dokumen tidak tersedia</span>`;

  return `
    <div class="card">
      <div class="card-level-badge ${levelClass}">${levelLabel}</div>
      <div class="card-status"><span class="icon">${icon}</span> ${item.status}</div>
      <div class="card-name">${item.name}</div>
      <div class="card-meta">
        <span>🏛️ ${item.org}</span>
        <span>📅 ${item.year}</span>
      </div>
      <div class="card-footer">${proofBtn}</div>
    </div>`;
}

/* ---- RENDER PRESTASI ---- */
function renderPrestasi() {
  const sections = [
    { key: 'internasional', label: '🌏 Internasional', levelLabel: 'Internasional', levelClass: 'level-intl', tabLabel: '🌏 Internasional' },
    { key: 'regional',      label: '🌏 Regional Asia',  levelLabel: 'Regional Asia', levelClass: 'level-regional', tabLabel: '🌏 Regional Asia' },
    { key: 'nasional',      label: '🇮🇩 Nasional',       levelLabel: 'Nasional',      levelClass: 'level-national', tabLabel: '🇮🇩 Nasional' },
    { key: 'universitas',   label: '🎓 Universitas',    levelLabel: 'Universitas',   levelClass: 'level-univ',     tabLabel: '🎓 Universitas' },
    { key: 'kabupaten',     label: '📍 Kabupaten',      levelLabel: 'Kabupaten',     levelClass: 'level-kab',      tabLabel: '📍 Kabupaten' },
    { key: 'ma',            label: '🏫 MA',             levelLabel: 'MA/SMA',        levelClass: 'level-ma',       tabLabel: '🏫 MA / SMA' },
  ];

  const tabsHeader = document.getElementById('prestasi-tabs-header');
  const tabsBody   = document.getElementById('prestasi-tabs-body');

  sections.forEach((sec, i) => {
    const items = portfolio.prestasi[sec.key] || [];
    // Tab button
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i === 0 ? ' active' : '');
    btn.setAttribute('data-tab', 'prestasi-' + sec.key);
    btn.innerHTML = `${sec.tabLabel} <span style="opacity:0.6;font-weight:400;font-size:0.78rem;">(${items.length})</span>`;
    tabsHeader.appendChild(btn);

    // Pane
    const pane = document.createElement('div');
    pane.className = 'tab-pane' + (i === 0 ? ' active' : '');
    pane.id = 'prestasi-' + sec.key;
    pane.innerHTML = `<div class="cards-grid">${items.map(it => buildCard(it, sec.levelLabel, sec.levelClass)).join('')}</div>`;
    tabsBody.appendChild(pane);
  });
}

/* ---- RENDER SERTIFIKASI ---- */
function renderSertifikasi() {
  const sections = [
    { key: 'onlineCourse', tabLabel: '💻 Online Course', levelLabel: 'Online Course', levelClass: 'level-national' },
    { key: 'pelatihan',    tabLabel: '🔧 Pelatihan',     levelLabel: 'Pelatihan',     levelClass: 'level-univ' },
    { key: 'internship',   tabLabel: '💼 Internship',    levelLabel: 'Internship',    levelClass: 'level-kab' },
  ];

  const tabsHeader = document.getElementById('sertif-tabs-header');
  const tabsBody   = document.getElementById('sertif-tabs-body');

  sections.forEach((sec, i) => {
    const items = portfolio.sertifikasi[sec.key] || [];
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i === 0 ? ' active' : '');
    btn.setAttribute('data-tab', 'sertif-' + sec.key);
    btn.innerHTML = `${sec.tabLabel} <span style="opacity:0.6;font-weight:400;font-size:0.78rem;">(${items.length})</span>`;
    tabsHeader.appendChild(btn);

    const pane = document.createElement('div');
    pane.className = 'tab-pane' + (i === 0 ? ' active' : '');
    pane.id = 'sertif-' + sec.key;
    pane.innerHTML = `<div class="cards-grid">${items.map(it => buildCard(it, sec.levelLabel, sec.levelClass)).join('')}</div>`;
    tabsBody.appendChild(pane);
  });
}

/* ---- RENDER ORGANISASI ---- */
function renderOrganisasi() {
  const grid = document.getElementById('org-grid');
  grid.innerHTML = portfolio.organisasi.map(item => buildCard(item, item.kategori, getLevelClass(item.kategori))).join('');
}

/* ---- TABS INTERACTION ---- */
function initTabs() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    const tabId = btn.getAttribute('data-tab');
    const parent = btn.closest('section') || document;

    parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    parent.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    const pane = parent.querySelector('#' + tabId);
    if (pane) pane.classList.add('active');
  });
}

/* ---- MODAL ---- */
function escapeAttr(str) {
  return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function openModal(encodedFile, title, isImage) {
  const file = decodeURIComponent(encodedFile);
  const modal = document.getElementById('doc-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  modalTitle.textContent = title;
  if (isImage) {
    modalBody.innerHTML = `<img src="${file}" alt="${title}" />`;
  } else {
    modalBody.innerHTML = `<iframe src="${file}"></iframe>`;
  }
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('doc-modal');
  modal.classList.remove('open');
  document.getElementById('modal-body').innerHTML = '';
  document.body.style.overflow = '';
}

/* ---- NAVBAR ACTIVE LINK ON SCROLL ---- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ---- HAMBURGER MENU ---- */
function initHamburger() {
  const ham = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (!ham) return;
  ham.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    ham.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      ham.classList.remove('open');
    });
  });
}

/* ---- MODAL CLOSE ON OVERLAY CLICK ---- */
document.addEventListener('DOMContentLoaded', () => {
  renderPrestasi();
  renderSertifikasi();
  renderOrganisasi();
  initTabs();
  initScrollSpy();
  initHamburger();

  document.getElementById('doc-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('doc-modal')) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
