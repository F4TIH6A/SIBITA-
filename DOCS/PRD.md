# Product Requirements Document (PRD)

## Informasi Dokumen
- **Nama Proyek**: SIBITA (Sistem Bimbingan Tugas Akhir)
- **Penulis**: 
- **Tanggal Dibuat**: 2026
- **Status Dokumen**: 
- **Versi**: 

## Ringkasan Proyek
SIBITA adalah platform web berbasis peran (role-based) untuk mendigitalisasi, memonitor, dan mengoptimalkan seluruh proses pembimbingan tugas akhir mahasiswa, mulai dari pengajuan topik, penjadwalan bimbingan, pengelolaan dokumen, hingga sidang akhir.

Platform ini ditujukan untuk tiga aktor utama:
- Mahasiswa yang membutuhkan panduan terstruktur
- Dosen pembimbing yang membutuhkan alat manajemen bimbingan yang efisien
- Program studi yang membutuhkan visibilitas dan kontrol kualitas atas proses akademik

Dengan SIBITA, proses yang sebelumnya dilakukan secara manual dan tersebar di WhatsApp, email, dan kertas akan terintegrasi dalam satu platform yang transparan, terdokumentasi, dan dapat diaudit.

## Latar Belakang

### Konteks
Proses tugas akhir (skripsi, tesis, disertasi) merupakan tahapan akademik yang krusial sekaligus rentan terhadap ketidakefisiensian. Di banyak institusi pendidikan tinggi Indonesia, proses ini masih menghadapi berbagai hambatan struktural dan operasional.

### Masalah Utama
- Kesulitan dalam memantau progres dan target capaian tugas akhir
- Dokumen bimbingan mudah hilang karena tidak tersimpan secara terpusat
- Kesulitan memantau progres mahasiswa yang dibimbing secara bersamaan
- Tidak ada rekam jejak (audit trail) sesi bimbingan yang terstandarisasi
- Komunikasi tersebar di berbagai platform (WA, email, SMS) yang sulit diorganisir

## Tujuan dan Batasan

### Tujuan
- Menyediakan platform terpadu untuk seluruh proses bimbingan tugas akhir
- Mempercepat penyelesaian tugas akhir melalui manajemen progres yang terstruktur

### Batasan Proyek
- Aplikasi hanya berbasis web, bukan mobile

## Target Pengguna
- Mahasiswa Akhir
- Dosen Pembimbing

## User Story
- Saya perlu bantuan bimbingan tugas akhir

## Fitur Utama

### 1. Modul Autentikasi dan Role-Based Access
Memberikan fungsi autentikasi login sistem berbasis role-based untuk:
- Mahasiswa
- Dosen
- Admin
- Superadmin

Autentikasi menggunakan email dan password.

### 2. Modul Daftar dan Pembayaran
Memiliki fungsi daftar di sistem untuk mahasiswa dengan:
- Mengisi data
- Melakukan pembayaran menggunakan payment gateway
- Sistem otomatis meng-generate akun mahasiswa

### 3. Modul Pengelolaan Pengguna
- Role mahasiswa di-generate oleh sistem setelah berhasil melakukan pembayaran
- Role dosen didaftarkan oleh Admin melalui website dengan email dan password default `12345678`
- Role admin didaftarkan oleh Superadmin melalui website dengan email dan password default `12345678`

### 4. Modul Dashboard
Menampilkan ringkasan statistik bimbingan atau data lain yang bergantung pada role pengguna.

### 5. Modul Pengajuan dan Persetujuan Topik
Memberikan form pengajuan tugas akhir dengan beberapa input untuk memberi gambaran penelitian awal mahasiswa sehingga dosen pembimbing dapat menindaklanjuti tugas akhir.

### 6. Modul Bimbingan
Mahasiswa dan dosen dapat berinteraksi untuk bimbingan melalui:
- Chatting
- Unggah file untuk kedua belah pihak

### 7. Modul Manajemen Dokumen
Menyediakan fungsi pengelolaan dokumen berbagai format seperti:
- DOCX
- PDF
- Audio untuk rekaman bimbingan

### 8. Modul Tracking Progress
Mencatat setiap tahapan yang dilalui mahasiswa untuk memastikan kesesuaian dengan timeline, termasuk deadline setiap tahapan yang dibuat oleh sistem.

### 9. Modul Profil dan Akun
Fungsi pengelolaan akun pengguna masing-masing role seperti:
- Foto profil
- Ubah nama
- Data diri
- Password

## User Flow

### Dosen
**Menu**
- Dashboard  
  - Melihat dashboard mahasiswa bimbingan
- Bimbingan  
  - Melihat detail semua mahasiswa bimbingan

### Mahasiswa
**Menu**
- Dashboard  
  - Timeline bimbingan sesuai dengan timeline yang ada di pengajuan  
  - Setiap bimbingan memiliki upload dokumen yang diperlukan  
  - Ada interaksi virtual antara mahasiswa dan dosen melalui fitur chat pada setiap timeline bimbingan
- Referensi  
  - Melihat semua buku referensi yang sudah di-upload  
  - Bisa diunduh

### Admin
**Menu**
- Manajemen Dosen  
  - Mencocokkan dosen dengan anak bimbingannya  
  - Mendaftarkan dosen
- Dashboard  
  - Melihat list dosen dan anak bimbingannya  
  - Melihat progress bimbingan dalam bentuk progress bar
- Referensi  
  - Meng-upload referensi dengan form:
    - Judul
    - Deskripsi singkat
    - Dokumen

### Super Admin
**Menu**
- Dashboard  
  - Melihat jumlah dosen dan mahasiswa
- Manajemen Pengguna  
  - Menambahkan admin

## Catatan Implementasi
- Dokumen asli masih memiliki beberapa bagian yang belum lengkap, khususnya pada bagian akhir struktur PRD.
- Struktur di atas dipertahankan agar tetap sesuai dengan isi sumber, tetapi sudah dirapikan untuk kebutuhan agent pengembangan aplikasi.
