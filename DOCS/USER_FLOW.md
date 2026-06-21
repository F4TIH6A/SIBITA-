# Spesifikasi Use Case / User Flow Sistem Bimbingan (Detail Lengkap)

## 1. Pendahuluan
Dokumen ini merupakan penjabaran lengkap (Use Case Narrative/Specification) dari alur pengguna pada Sistem Bimbingan. Dokumen ini disusun untuk memudahkan tim pengembang (developer) dan tim penguji (QA) dalam memahami detail aktivitas setiap peran, prasyarat, dan alur utamanya.

---

## 2. Aktor: MAHASISWA

### UC-M01: Mengelola Progress Bimbingan
*   **Aktor Utama:** Mahasiswa
*   **Deskripsi:** Mahasiswa dapat melihat alur waktu (timeline) penyusunan tugas akhir/bimbingan dan mengunggah dokumen sesuai dengan tahapan saat ini.
*   **Pre-condition (Prasyarat):** Mahasiswa telah berhasil *login* dan sudah ditetapkan dengan dosen pembimbing.
*   **Alur Utama (Main Flow):**
    1. Mahasiswa mengakses menu **Dashboard**.
    2. Sistem menampilkan halaman **Timeline bimbingan** yang berisi tahapan-tahapan yang harus dilalui.
    3. Mahasiswa memilih tahapan yang sedang aktif dan melakukan **Upload dokumen sesuai progress bimbingan**.
    4. Sistem menyimpan dokumen dan memperbarui status *progress* bimbingan.

### UC-M02: Mengakses Dokumen Referensi
*   **Aktor Utama:** Mahasiswa
*   **Deskripsi:** Mahasiswa mencari, membaca, dan mengunduh dokumen referensi pendukung yang disediakan oleh kampus/admin.
*   **Alur Utama (Main Flow):**
    1. Mahasiswa mengakses menu **Referensi**.
    2. Sistem menampilkan daftar seluruh dokumen referensi yang tersedia.
    3. Mahasiswa dapat **melihat semua dokumen referensi dan mendownloadnya** ke penyimpanan lokal.

---

## 3. Aktor: DOSEN

### UC-D01: Memantau Dashboard Bimbingan
*   **Aktor Utama:** Dosen
*   **Deskripsi:** Dosen melihat ringkasan dari aktivitas bimbingan mahasiswa yang dibimbingnya.
*   **Alur Utama (Main Flow):**
    1. Dosen mengakses menu **Dashboard**.
    2. Sistem menampilkan antarmuka yang memungkinkan dosen untuk **melihat dashboard bimbingan** (berisi notifikasi, jadwal, atau rekap mahasiswa bimbingan).

### UC-D02: Meninjau Detail Bimbingan
*   **Aktor Utama:** Dosen
*   **Deskripsi:** Dosen melihat rincian riwayat bimbingan, catatan, dan dokumen yang telah diunggah oleh mahasiswa.
*   **Alur Utama (Main Flow):**
    1. Dosen mengakses menu **Bimbingan**.
    2. Sistem menampilkan daftar mahasiswa bimbingan.
    3. Dosen memilih salah satu mahasiswa untuk **melihat detail semua bimbingan** secara komprehensif.

---

## 4. Aktor: ADMIN

### UC-A01: Pemantauan Manajemen Dosen
*   **Aktor Utama:** Admin
*   **Deskripsi:** Admin mengelola dan memantau aktivitas dosen terkait *timeline* bimbingan mahasiswa.
*   **Alur Utama (Main Flow):**
    1. Admin mengakses menu **Manajemen Dosen**.
    2. Admin dapat memantau **Timeline bimbingan** dari masing-masing pasangan dosen dan mahasiswa.
    3. Admin dapat meninjau riwayat **Upload dokumen sesuai progress bimbingan** untuk keperluan administratif kampus.

### UC-A02: Monitoring Progress Keseluruhan
*   **Aktor Utama:** Admin
*   **Deskripsi:** Admin memantau progres bimbingan seluruh dosen dan anak bimbingannya secara visual.
*   **Alur Utama (Main Flow):**
    1. Admin mengakses menu **Dashboard**.
    2. Sistem menampilkan informasi untuk **melihat list dosen dan anak bimbingannya**.
    3. Admin dapat **melihat progres bimbingan dalam bentuk progres bar** (persentase/visualisasi) untuk evaluasi lebih cepat.

### UC-A03: Mengelola Data Referensi
*   **Aktor Utama:** Admin
*   **Deskripsi:** Admin bertanggung jawab menyediakan materi, pedoman, atau *template* dokumen pendukung untuk mahasiswa.
*   **Alur Utama (Main Flow):**
    1. Admin mengakses menu **Referensi**.
    2. Admin memilih opsi tambah referensi baru.
    3. Admin **mengupload referensi dengan mengisi form** (meliputi judul, kategori, deskripsi, dan melampirkan file dokumen).
    4. Sistem menyimpan dan mempublikasikan referensi tersebut ke halaman mahasiswa.

---

## 5. Aktor: SUPER ADMIN

### UC-SA01: Melihat Rekapitulasi Sistem
*   **Aktor Utama:** Super Admin
*   **Deskripsi:** Super admin memantau statistik *user* secara keseluruhan di dalam sistem.
*   **Alur Utama (Main Flow):**
    1. Super Admin mengakses menu **Dashboard**.
    2. Sistem menghitung dan menampilkan visualisasi data rekapitulasi: **berapa jumlah dosen, mahasiswa, dan admin** yang aktif.

### UC-SA02: Manajemen Pengguna Terpusat
*   **Aktor Utama:** Super Admin
*   **Deskripsi:** Super admin mengelola akun level *admin* untuk operasional sistem.
*   **Alur Utama (Main Flow):**
    1. Super Admin mengakses menu **Manajemen pengguna**.
    2. Super admin memilih opsi tambah pengguna baru.
    3. Super admin melakukan proses form untuk **menambahkan admin** baru (mengisi nama, email, password, dll).
    4. Sistem menyimpan kredensial dan memberikan akses *role* Admin kepada pengguna baru.
