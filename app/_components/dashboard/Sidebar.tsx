"use client";

import Link from "next/link";

interface SidebarProps {
  activePage: string;
}

export default function Sidebar({ activePage }: SidebarProps) {
  return (
    <aside className="sidebar">
      <button className={`sidebar-link ${activePage === "dashboard" ? "active" : ""}`}>
        <span className="icon">🏠</span> Dashboard
      </button>
      <button className={`sidebar-link ${activePage === "referensi" ? "active" : ""}`}>
        <span className="icon">📖</span> Referensi
      </button>

      <div className="sidebar-spacer" />

      <Link href="/" className="sidebar-link sidebar-logout">
        <span className="icon">🚪</span> Logout
      </Link>
    </aside>
  );
}
