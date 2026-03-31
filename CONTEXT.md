# PROJECT CONTEXT — Portfolio Website
# File ini untuk Claude Code agar memahami konteks project

## Pemilik
- Nama: Ahmad Ishamul Ayady Akmal, S.T.
- Email: ishamulayadyakmal@gmail.com
- LinkedIn: linkedin.com/in/ahmadishamulayadyakmal
- Instagram: @ahmadishamulayadyakmal
- GitHub username: ahmadishamulayadyakmal (konfirmasi dulu jika belum dibuat)

## Tujuan Project
Website personal branding dan portofolio profesional untuk melamar pekerjaan
di bidang metallurgical engineering, R&D, laboratorium, dan quality assurance
di industri smelter/baja (target: IMIP, IWIP, Tsingshan Group ecosystem).

## Status Saat Ini
- [x] index.html sudah dibuat lengkap
- [x] README.md panduan deploy sudah dibuat
- [ ] Repository GitHub belum dibuat
- [ ] File sertifikat belum diunggah
- [ ] GitHub Pages belum diaktifkan

## Stack Teknologi
- Pure HTML + CSS + JavaScript (tanpa framework)
- Font: Montserrat + Roboto (Google Fonts)
- Tema: Dominan putih/off-white, aksen navy blue (#0d2240), gold (#b8943a)
- Deploy target: GitHub Pages (gratis)

## Struktur Folder
```
portfolio/
├── index.html                          ← file utama website
├── README.md                           ← panduan deploy
├── CONTEXT.md                          ← file ini
└── assets/
    ├── CV_Ahmad_Ishamul_ATS_Mar_2026.pdf
    ├── certificates/                   ← PDF/JPG sertifikat lomba & training
    └── publications/                   ← PDF paper & publikasi
```

## Penamaan File Sertifikat (sudah dikonfigurasi di index.html)
### Achievements / Lomba:
- 2023_korea_exchange.pdf
- 2023_sheelx_sre.pdf
- 2023_astra_startup.pdf
- 2023_getfunding_lp2m.pdf
- 2022_mtq_jember.pdf
- 2022_business_plan.pdf
- 2022_nexus_energy.pdf
- 2022_campus_ambassador.pdf
- 2022_mapres_fakultas.pdf
- 2022_mapres_univ.pdf
- 2022_iybc_gold.pdf
- 2022_epic_poster.pdf
- 2022_gcls_silver.pdf
- 2021_mapres_fakultas.pdf
- 2021_wyiia_silver.pdf
- 2021_nuspest.pdf
- 2021_seauicon.pdf
- 2021_lidm.pdf
- 2021_ieiic_silver_science.pdf
- 2021_ieiic_silver_business.pdf
- 2021_yisfin_bronze.pdf
- 2021_kbmi.pdf
- 2021_lktinimaten.pdf
- 2020_scientific_writing.pdf

### Certifications / Training:
- 2026_data_processing.pdf
- 2026_azure_genai.pdf
- 2023_colorado_renewable.pdf
- 2023_dicoding_ml.pdf
- 2023_dicoding_frontend.pdf
- 2023_lt_edutech.pdf
- 2023_dicoding_ux.pdf
- 2022_edx_solar.pdf
- 2021_dqlab_ds.pdf
- 2021_ecadin.pdf
- 2021_dicoding_agroindustry.pdf

### Publications:
- 2023_ijpeds_paper.pdf
- 2021_enicow_journal.pdf
- 2020_book_energy.pdf

## Fitur Penting di index.html
1. Modal popup sertifikat — klik tombol "View Certificate" → muncul popup
   - Otomatis coba load PDF dulu
   - Fallback ke JPG/PNG jika PDF tidak ada
   - Tampilkan placeholder instruksi jika file belum diupload
2. Navigasi sticky di atas
3. Scroll fade-in animation
4. Responsive untuk mobile
5. Download CV button → href: assets/CV_Ahmad_Ishamul_ATS_Mar_2026.pdf

## Target Deploy
- URL: https://[username].github.io
- Platform: GitHub Pages (branch main, folder root)
- Repository name harus: [username].github.io

## Hal yang Perlu Dilakukan Claude Code
1. Pastikan git sudah ter-install: `git --version`
2. Set git config nama & email
3. `git init` di folder ini
4. `git add .`
5. `git commit -m "Initial portfolio website"`
6. Buat repository di GitHub bernama [username].github.io
7. `git remote add origin https://github.com/[username]/[username].github.io.git`
8. `git push -u origin main`
9. Instruksikan user untuk aktifkan GitHub Pages di Settings repo
