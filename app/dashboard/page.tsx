"use client";

import { useState, useCallback } from "react";
import Sidebar from "../_components/dashboard/Sidebar";
import ProfileCard from "../_components/dashboard/ProfileCard";
import SimControl from "../_components/dashboard/SimControl";
import ProgressTable from "../_components/dashboard/ProgressTable";
import StageForm from "../_components/dashboard/StageForm";
import TaskPanel from "../_components/dashboard/TaskPanel";
import ChatPanel from "../_components/dashboard/ChatPanel";

const STAGES = [
  { n: 1,  name: "Diskusi Konsep dan Judul Penelitian", days: 7 },
  { n: 2,  name: "Penyusunan Proposal Penelitian", days: 14 },
  { n: 3,  name: "Konsultasi Dosen Pembimbing (ke-1)", days: 7 },
  { n: 4,  name: "Revisi Proposal Penelitian", days: 7 },
  { n: 5,  name: "Persiapan dan Ujian Proposal", days: 7 },
  { n: 6,  name: "Penyusunan Instrumen Penelitian", days: 7 },
  { n: 7,  name: "Konsultasi Dosen Pembimbing (ke-2)", days: 7 },
  { n: 8,  name: "Pengambilan Data Penelitian", days: 21 },
  { n: 9,  name: "Pengolahan Data Penelitian", days: 7 },
  { n: 10, name: "Penyusunan BAB IV", days: 14 },
  { n: 11, name: "Konsultasi Dosen Pembimbing (ke-3)", days: 7 },
  { n: 12, name: "Revisi BAB IV", days: 7 },
  { n: 13, name: "Penyusunan BAB V", days: 7 },
  { n: 14, name: "Penyusunan BAB I sd BAB V", days: 7 },
  { n: 15, name: "Konsultasi Dosen Pembimbing (ke-4)", days: 7 },
  { n: 16, name: "Persiapan Ujian Akhir & Revisi Naskah Akhir", days: 7 },
];

function computeStageWindows() {
  const windows: Record<number, { startDay: number; deadlineDay: number }> = {};
  let cursor = 0;
  STAGES.forEach((s) => {
    windows[s.n] = { startDay: cursor, deadlineDay: cursor + s.days };
    cursor += s.days;
  });
  return windows;
}

export default function DashboardPage() {
  const [view, setView] = useState<"overview" | "detail">("overview");
  const [currentStage, setCurrentStage] = useState(1);
  const [completedStages, setCompletedStages] = useState<Record<number, number | null>>(() => {
    const state: Record<number, number | null> = {};
    STAGES.forEach((s) => { state[s.n] = null; });
    return state;
  });
  const [simulatedDay, setSimulatedDay] = useState(0);

  const handleAdvanceDay = useCallback((delta: number) => {
    setSimulatedDay((prev) => Math.max(0, prev + delta));
  }, []);

  const handleOpenStage = useCallback((n: number) => {
    setCurrentStage(n);
    setView("detail");
  }, []);

  const handleBackToOverview = useCallback(() => {
    setView("overview");
  }, []);

  const handleComplete = useCallback((stage: number) => {
    setCompletedStages((prev) => ({
      ...prev,
      [stage]: simulatedDay,
    }));
    if (stage < 16) {
      setCurrentStage(stage + 1);
    } else {
      setView("overview");
    }
  }, [simulatedDay]);

  // Compute status for each stage
  const windows = computeStageWindows();
  const stageStatuses: Record<number, { pct: number; colorKey: string; label: string; startDay: number; deadlineDay: number }> = {};

  let totalPct = 0;
  STAGES.forEach((s) => {
    const win = windows[s.n];
    const completedDay = completedStages[s.n];
    const hasStarted = simulatedDay >= win.startDay;

    let pct: number;
    let colorKey: string;
    let label: string;

    if (completedDay !== null) {
      pct = 100;
      if (completedDay <= win.deadlineDay - 3) {
        colorKey = "green"; label = "Selesai Tepat Waktu";
      } else if (completedDay <= win.deadlineDay - 1) {
        colorKey = "yellow"; label = "Selesai (Mendekati Tenggat)";
      } else {
        colorKey = "red"; label = "Selesai (Melebihi Tenggat)";
      }
    } else if (!hasStarted) {
      pct = 0; colorKey = "grey"; label = "Belum Mulai";
    } else {
      pct = 0; colorKey = "blue"; label = "Sedang Berjalan";
    }

    totalPct += pct;
    stageStatuses[s.n] = { pct, colorKey, label, startDay: win.startDay, deadlineDay: win.deadlineDay };
  });

  const overallProgress = Math.round(totalPct / STAGES.length);

  const stageData = STAGES.find((s) => s.n === currentStage);

  return (
    <div className="dashboard-layout">
      <Sidebar activePage="dashboard" />

      <main className="dash-main">
        {view === "overview" ? (
          <>
            <ProfileCard overallProgress={overallProgress} />
            <SimControl simulatedDay={simulatedDay} onAdvance={handleAdvanceDay} />
            <ProgressTable
              stages={STAGES}
              stageStatuses={stageStatuses}
              onOpenStage={handleOpenStage}
            />
          </>
        ) : (
          <>
            <button className="back-to-progress" onClick={handleBackToOverview}>
              ‹ Kembali ke Progress Skripsi
            </button>

            <div className="stage-header-simple">
              <span className="stage-header-badge">Tahap {currentStage}</span>
              <h1 className="stage-header-title">{stageData?.name}</h1>
            </div>

            <div className="dash-grid">
              <StageForm currentStage={currentStage} onComplete={handleComplete} />

              <div className="dash-right">
                <TaskPanel currentStage={currentStage} />
                <ChatPanel />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
