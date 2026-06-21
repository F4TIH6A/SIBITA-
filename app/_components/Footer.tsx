export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <span className="footer-brand-mark">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 6.5C4 5.12 5.12 4 6.5 4H17a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 17.5v-11Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round"/>
                <path d="M4 17.5C4 16.12 5.12 15 6.5 15H18" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            SIBITA
          </div>
          <p className="footer-tagline">Sistem Bimbingan Tugas Akhir — membantu mahasiswa menyelesaikan skripsi lebih cepat dan terstruktur.</p>
        </div>
        <div className="footer-info">
          <p>📍 Jl. Colombo No.1 Karangmalang Yogyakarta 55281</p>
          <p>📞 0274-586168 &nbsp;|&nbsp; +62 274 542185</p>
          <p>✉️ humas@uin-mataram.ac.id</p>
        </div>
      </div>
      <div className="footer-bottom">&copy; 2026 SIBITA &middot; Sistem Bimbingan Tugas Akhir</div>
    </footer>
  );
}
