export default function StatsSection() {
  return (
    <section className="stats">
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none"><path d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M19 8v6M22 11h-6M11 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="#2B3BAF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span className="stat-value">2.500+</span>
          <div className="stat-label">Mahasiswa Aktif</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none"><path d="M22 10 12 5 2 10l10 5 10-5Z" stroke="#2B3BAF" strokeWidth="1.7" strokeLinejoin="round"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" stroke="#2B3BAF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span className="stat-value">100%</span>
          <div className="stat-label">Tingkat Kelulusan</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#2B3BAF" strokeWidth="1.7"/><path d="M12 7v5l3.5 2" stroke="#2B3BAF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span className="stat-value">140</span>
          <div className="stat-label">Hari Rata-rata Selesai</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 2.5 14.7 8 21 9l-4.5 4.4 1 6.1-5.5-3-5.5 3 1-6.1L3 9l6.3-1L12 2.5Z" stroke="#2B3BAF" strokeWidth="1.6" strokeLinejoin="round"/></svg>
          </div>
          <span className="stat-value">4.9/5</span>
          <div className="stat-label">Rating Pengguna</div>
        </div>
      </div>
    </section>
  );
}
