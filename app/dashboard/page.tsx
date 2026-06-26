import { redirect } from "next/navigation";

export default function DashboardIndex() {
  // Secara default arahkan ke dashboard mahasiswa
  // Jika sudah ada backend session, bisa diarahkan sesuai role masing-masing
  redirect("/dashboard/mahasiswa");
}
