# 🌐 Personal Branding Website — Ahmad Ishamul Ayady Akmal

Website portofolio dan personal branding profesional, dideploy menggunakan **GitHub Pages** (gratis).

**Live URL:** `https://[username-kamu].github.io`

---

## 📁 Struktur Folder

```
portfolio/
│
├── index.html                  ← File utama website
│
├── assets/
│   ├── CV_Ahmad_Ishamul_ATS_Mar_2026.pdf   ← CV terbaru (untuk tombol Download CV)
│   │
│   ├── certificates/           ← Semua sertifikat kamu (PDF atau JPG)
│   │   ├── 2023_korea_exchange.pdf
│   │   ├── 2023_sheelx_sre.pdf
│   │   ├── 2022_iybc_gold.pdf
│   │   └── ... (sesuai nama di website)
│   │
│   └── publications/           ← File paper dan publikasi
│       ├── 2023_ijpeds_paper.pdf
│       ├── 2021_enicow_journal.pdf
│       └── 2020_book_energy.pdf
│
└── README.md                   ← File ini
```

---

## 🚀 PANDUAN DEPLOY KE GITHUB (Step by Step)

### TAHAP 1 — Persiapan Awal (Sekali Saja)

#### Langkah 1: Install Git
1. Buka https://git-scm.com/download/win
2. Download dan install Git (klik Next terus sampai selesai)
3. Setelah install, buka **Git Bash** (cari di Start Menu)
4. Ketik untuk verifikasi:
   ```
   git --version
   ```
   Harus muncul versi, misal: `git version 2.43.0`

#### Langkah 2: Buat Akun GitHub
1. Buka https://github.com
2. Klik **Sign up**
3. Buat akun dengan username yang profesional (contoh: `ahmadishamul` atau `ishamulakmal`)
   > ⚠️ Username ini akan jadi URL website kamu: `https://[username].github.io`

#### Langkah 3: Setting Identitas Git (Sekali Saja)
Buka Git Bash, ketik (ganti dengan nama & email kamu):
```bash
git config --global user.name "Ahmad Ishamul Ayady Akmal"
git config --global user.email "ishamulayadyakmal@gmail.com"
```

---

### TAHAP 2 — Buat Repository di GitHub

#### Langkah 4: Buat Repository Baru
1. Login ke GitHub
2. Klik tombol **"+"** di pojok kanan atas → **New repository**
3. Isi:
   - **Repository name:** `[username-kamu].github.io`
   - Contoh: jika username `ahmadishamul` → isi dengan `ahmadishamul.github.io`
   - ✅ Pilih **Public**
   - ✅ Centang **Add a README file**
4. Klik **Create repository**

---

### TAHAP 3 — Upload File Website

#### Langkah 5: Siapkan Folder di Komputer
1. Buat folder baru di komputer, contoh: `C:\Users\[namamu]\Documents\portfolio`
2. Salin file `index.html` ke dalam folder tersebut
3. Buat subfolder `assets/certificates/` dan `assets/publications/`
4. Masukkan semua file sertifikat dan publikasimu ke dalam folder masing-masing

#### Langkah 6: Upload via GitHub Website (Cara Mudah)
1. Buka repository kamu di GitHub
2. Klik **"Add file"** → **"Upload files"**
3. Drag & drop file `index.html` ke area upload
4. Scroll ke bawah, klik **"Commit changes"**

Untuk folder assets:
1. Klik **"Add file"** → **"Upload files"**
2. Masuk ke folder, upload file-file sertifikat
3. GitHub akan otomatis membuat struktur folder
4. Klik **"Commit changes"**

#### Langkah 7: Upload via Git Bash (Cara Lebih Cepat, Jika Banyak File)
Buka Git Bash di folder portfolio kamu:
```bash
# Masuk ke folder portfolio
cd "C:/Users/[namamu]/Documents/portfolio"

# Inisialisasi git
git init

# Hubungkan ke repository GitHub
git remote add origin https://github.com/[username-kamu]/[username-kamu].github.io.git

# Tambahkan semua file
git add .

# Simpan perubahan (commit)
git commit -m "Initial portfolio website"

# Upload ke GitHub
git push -u origin main
```
> Saat diminta login, masukkan username dan password GitHub kamu.

---

### TAHAP 4 — Aktifkan GitHub Pages

#### Langkah 8: Enable GitHub Pages
1. Buka repository di GitHub
2. Klik **Settings** (tab paling kanan)
3. Scroll ke bawah, cari bagian **"Pages"** di menu kiri
4. Di **Source**, pilih:
   - Branch: **main**
   - Folder: **/ (root)**
5. Klik **Save**
6. Tunggu 1-2 menit
7. Akan muncul URL: `https://[username-kamu].github.io` ✅

---

### TAHAP 5 — Menambah Sertifikat Baru

#### Cara Menambah/Update File di GitHub:
```bash
# Di folder portfolio, setelah menambah file baru
git add .
git commit -m "Tambah sertifikat baru [nama sertifikat]"
git push
```

Atau lewat website GitHub:
1. Buka repository
2. Masuk ke folder `assets/certificates/`
3. Klik **"Add file"** → **"Upload files"**
4. Upload file PDF sertifikat
5. Commit

---

## 📎 Cara Menghubungkan Sertifikat ke Website

Di `index.html`, setiap achievement sudah ada link seperti:
```html
<a href="assets/certificates/2022_iybc_gold.pdf" class="ach-link" target="_blank">View Certificate →</a>
```

Pastikan nama file PDF kamu **persis sama** dengan yang ada di kode.
Contoh: `2022_iybc_gold.pdf` harus tersimpan di folder `assets/certificates/`.

### Jika Sertifikat Berupa Foto (JPG/PNG):
Ganti ekstensi di kode:
```html
<a href="assets/certificates/2022_iybc_gold.jpg" ...>View Certificate →</a>
```

### Jika Sertifikat Online (Link URL):
```html
<a href="https://www.dicoding.com/certificates/[kode-sertifikat]" ...>View Certificate →</a>
```

---

## ✏️ Cara Update Konten Website

### Edit Nama/Info Kontak:
Buka `index.html` dengan Notepad++ atau VS Code, cari dan edit:
- `ishamulayadyakmal@gmail.com` → ganti email
- `+62 822-3022-8019` → ganti nomor HP
- `linkedin.com/in/ahmadishamulayadyakmal` → ganti LinkedIn

### Tambah Achievement Baru:
Copy salah satu blok `<div class="ach-card">` dan ubah isinya:
```html
<div class="ach-card">
  <div class="ach-year">2025</div>
  <div class="ach-content">
    <div class="ach-medal">🏅 [Medal/Award Type]</div>
    <div class="ach-title">[Nama Penghargaan]</div>
    <div class="ach-desc">[Deskripsi singkat]</div>
    <a href="assets/certificates/[nama-file].pdf" class="ach-link" target="_blank">View Certificate →</a>
  </div>
</div>
```

---

## 🔗 Tips Domain Custom (Opsional)

Jika ingin domain seperti `www.ishamulakmal.com`:
1. Beli domain di Niagahoster, Rumahweb, atau Namecheap (~Rp100k/tahun)
2. Di Settings GitHub Pages → **Custom domain** → masukkan domain kamu
3. Di provider domain, tambahkan CNAME record mengarah ke `[username].github.io`

---

## 🛠️ Tools yang Direkomendasikan

- **VS Code** (text editor terbaik) → https://code.visualstudio.com
- **Git Bash** → sudah terinstall dengan Git
- **GitHub Desktop** (GUI, lebih mudah dari Git Bash) → https://desktop.github.com

---

*Website ini dibuat dengan HTML + CSS murni (tanpa framework) agar cepat, ringan, dan mudah diedit.*
