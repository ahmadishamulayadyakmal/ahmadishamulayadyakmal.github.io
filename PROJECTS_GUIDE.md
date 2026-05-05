# Panduan Edit Section: Projects & Research

Data proyek dikelola di satu tempat: **[assets/js/main.js](assets/js/main.js)** — cari bagian `const projects = [` (sekitar baris 95).

---

## Struktur Satu Item Proyek

```js
{
  title: "Judul Proyek",              // ← teks judul kartu
  description: "Deskripsi singkat.", // ← teks deskripsi kartu
  tags: ["Tag1", "Tag2", "Tag3"],    // ← label kecil di bawah deskripsi
  icon: "simulation",                // ← ikon kartu (pilihan di bawah)
  year: "2024–Present",              // ← tahun ditampilkan di kartu
  file: "nama-file.pdf"              // ← OPSIONAL, aktifkan tombol "View"
}
```

> **`file`** bersifat opsional. Hapus baris `file:` jika belum ada dokumennya.
> File harus diletakkan di folder `assets/images/certificates/`.

---

## Pilihan Icon

| Nilai `icon`  | Tampilan          | Cocok untuk                        |
|---------------|-------------------|------------------------------------|
| `simulation`  | Lapisan segitiga  | Simulasi, pemodelan, CFD           |
| `energy`      | Matahari / sinar  | Energi terbarukan, kelistrikan     |
| `research`    | Buku terbuka      | Publikasi, jurnal, riset           |
| `business`    | Koper kantor      | Bisnis, kewirausahaan, funding     |
| `award`       | Medali            | Kompetisi, penghargaan             |
| `ai`          | Layar + titik     | AI, data science, pemrograman      |

---

## Cara Menambah Proyek Baru

1. Buka [assets/js/main.js](assets/js/main.js)
2. Temukan `const projects = [` (baris ~95)
3. Tambahkan item baru di posisi yang diinginkan (paling atas = tampil pertama)
4. Gunakan template berikut, lalu sesuaikan isinya:

```js
{
  title: "Judul Proyek Baru",
  description: "Penjelasan singkat mengenai proyek ini.",
  tags: ["Tag1", "Tag2"],
  icon: "research",
  year: "2025"
},
```

---

## Cara Mengedit Proyek yang Sudah Ada

Cari judul proyek menggunakan Ctrl+F di editor, lalu ubah field yang perlu diperbarui.

### Daftar proyek saat ini:

---

**#1**
```js
{
  title: "Continuous Casting Inclusion Simulation (M.Eng. Thesis)",
  description: "Numerical modeling of non-metallic inclusion evolution and distribution in continuous casting of heavy rail steel using ANSYS Fluent CFD. Research under LPDP–Tsingshan Group scholarship at USTB Beijing.",
  tags: ["ANSYS Fluent", "CFD", "Maxwell", "ICEM CFD"],
  icon: "simulation",
  year: "2024–Present"
}
```

---

**#2**
```js
{
  title: "F-Light — Energy-Efficient Fishing Vessel Lamp Powered by Solar Panels",
  description: "F-Light is a solar-powered lighting system for traditional bagan tancap fishing vessels in Muncar, Banyuwangi, designed to replace costly and polluting diesel generators with a clean, renewable alternative. This project has been selected and funded under the Program Pembinaan Mahasiswa Wirausaha (P2MW) by the Indonesian Ministry of Higher Education, Science, and Technology, recognizing its potential as a sustainable and economically viable innovation for coastal fishing communities.",
  tags: ["Renewable Energy", "Solar", "Entrepreneurship"],
  icon: "energy",
  year: "2022",
  file: "PPMW.pdf"
}
```

---

**#3**
```js
{
  title: "PROMAHADESA — Renewable Energy Teaching Kit for SDN Ajung 01 Kalisat",
  description: "Led a community service team under Universitas Jember's Program Mahasiswa Berdesa (PROMAHADESA) to design and develop hands-on renewable energy teaching aids for SDN Ajung 01 Kalisat, supporting K-13 thematic learning and improving science process skills among elementary school students.",
  tags: ["Community Development", "Renewable Energy", "Education"],
  icon: "Education",
  year: "2022",
  file: "PROMAHADESA.pdf"
}
```

---

**#4**
```js
{
  title: "Scopus Q3 Journal Publication",
  description: "Undergraduate thesis published in the International Journal of Power Electronics and Drive Systems (2023), indexed in Scopus Q3. Research on closed-loop DC-DC converter control for renewable energy applications.",
  tags: ["Research", "Scopus Q3", "Power Electronics"],
  icon: "research",
  year: "2023",
  file: "IJEPEDS.pdf"
}
```

---

**#5**
```js
{
  title: "KBMI Funded Business Plan — Barokah Sari Herbal",
  description: "Led a team that secured national funding from Kemendikbud's KBMI (Business Incubator) program. Kegiatan Berwirausaha Mahasiswa Indonesia (KBMI) 2021, competing among 2,944 proposals from 394 universities across Indonesia. Developed 'Barokah Sari Herbal', a herbal rhizome root powder beverage crafted to strengthen the immune system as a natural solution during the COVID-19 pandemic.",
  tags: ["Entrepreneurship", "Traditional Drink", "Rhyzome root"],
  icon: "business",
  year: "2021",
  file: "Lolos Pendanaan_KBMI.pdf"
}
```

---

**#6**
```js
{
  title: "LIDM 2021 — SERVERKITA: Modified Set-Top Box Mini Server for E-Learning",
  description: "Achieved 2nd place at the national LIDM (Lomba Inovasi Digital Mahasiswa). Developed SERVERKITA, an innovative mini server built from a modified set-top box designed to run a Moodle-based e-learning management system. Offers an affordable and reliable alternative to conventional server hardware, significantly reducing infrastructure costs for educational institutions implementing digital learning systems.",
  tags: ["Innovation", "Digital", "E-learning"],
  icon: "award",
  year: "2021",
  file: "Juara 2_LIDM Kementrian.pdf"
}
```

---

**#7**
```js
{
  title: "Co-Author — Buku Karya Bersama Mahasiswa (Student Book)",
  description: "Contributing author in a collaborative academic book published under LP3M Universitas Jember, with the tittle Teknologi penyimpanan energi dan perkembangannya.",
  tags: ["Publication", "Author", "Book"],
  icon: "Book",
  year: "2020",
  file: "Buku Karya Mahasiswa_Penulis.pdf"
}
```

---

## Cara Menghapus Proyek

Hapus seluruh blok `{ ... },` yang berisi proyek tersebut. Pastikan tidak ada koma gantung di item terakhir dalam array.

---

## Cara Menambahkan Tombol "View" (opsional)

1. Letakkan file PDF/gambar di folder `assets/images/certificates/`
2. Tambahkan field `file:` pada item proyek:

```js
file: "nama-dokumen.pdf"
```

Tombol **View** akan muncul otomatis di kartu tersebut.
