"use client";

import React, { useState } from "react";
import { AKSARA_CHARS } from "@/data/projectsData";

// Exact vector stroke traced from Figma for HA (ꦲ)
const HA_STROKE_PATH =
  "M 5 19 L 4 22 L 4 90 L 6 90 L 6 25 L 7 20 L 16 11 L 26 10 L 30 8 L 35 9 L 38 17 L 38 21 L 40 24 L 43 50 L 42 71 L 44 81 L 50 87 L 56 89 L 65 89 L 71 83 L 75 69 L 74 33 L 75 17 L 79 13 L 84 11 L 96 11 L 99 14 L 99 37 L 101 41 L 102 50 L 102 78 L 104 86 L 105 64 L 104 48 L 102 44 L 102 16 L 104 14 L 118 13 L 120 11 L 129 10 L 131 12 L 132 34 L 134 43 L 138 89 L 136 38 L 134 30 L 133 10 L 131 8 L 122 8 L 116 11 L 102 12 L 97 9 L 92 8 L 76 11 L 72 19 L 73 66 L 70 79 L 64 87 L 56 87 L 54 85 L 50 84 L 46 80 L 45 75 L 45 38 L 43 34 L 42 22 L 40 19 L 40 15 L 37 10 L 37 7 L 29 6 L 24 8 L 15 9 L 10 12 Z";

export const ArutalaBrowserMockup: React.FC = () => {
  const [selectedAksara, setSelectedAksara] = useState<string>("HA");
  const [isCanvasCleared, setIsCanvasCleared] = useState<boolean>(false);
  const [checkStatus, setCheckStatus] = useState<string | null>(null);

  const currentChar = AKSARA_CHARS.find((c) => c.label === selectedAksara) || AKSARA_CHARS[0];

  const handleClear = () => {
    setIsCanvasCleared(true);
    setCheckStatus(null);
  };

  const handleSelectAksara = (label: string) => {
    setSelectedAksara(label);
    setIsCanvasCleared(false);
    setCheckStatus(null);
  };

  const handleCheck = () => {
    if (isCanvasCleared) {
      setCheckStatus("Kanvas kosong!");
    } else {
      setCheckStatus("Akurasi: 99.2% ✓");
    }
    setTimeout(() => {
      setCheckStatus(null);
    }, 2500);
  };

  return (
    <div className="w-full rounded-t-[24px] sm:rounded-t-[28px] overflow-hidden bg-white shadow-2xl border-b border-white/10 select-none">
      {/* 1. macOS Window Header */}
      <div className="h-9 sm:h-10 bg-[#FAFAFA] border-b border-gray-200/80 px-3.5 flex items-center justify-between">
        {/* Left: Traffic lights & Navigation */}
        <div className="flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 shadow-xs inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 shadow-xs inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 shadow-xs inline-block" />
          </div>

          {/* Safari sidebar and navigation controls */}
          <div className="hidden sm:flex items-center gap-1 text-gray-400 pl-1">
            <button
              type="button"
              className="p-1 hover:text-gray-600 rounded transition-colors"
              aria-label="Sidebar"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3zm4 1H3v8h3V4zm1 0v8h6V4H7z" />
              </svg>
            </button>
            <button
              type="button"
              className="p-0.5 hover:text-gray-600 rounded transition-colors"
              aria-label="Back"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              className="p-0.5 hover:text-gray-600 rounded transition-colors opacity-50"
              aria-label="Forward"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Center: Address Bar (arutalaaksara.com) */}
        <div className="flex-1 max-w-[210px] sm:max-w-[270px] mx-2">
          <div className="h-6 sm:h-6.5 bg-[#EBECEF] hover:bg-[#E5E6EA] transition-colors rounded-md px-2.5 flex items-center justify-between text-gray-600 border border-gray-300/40">
            {/* Lock icon */}
            <div className="flex items-center gap-1.5 truncate">
              <svg className="w-2.5 h-2.5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 1a3 3 0 0 0-3 3v2H4a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 4 15h8a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 12 6h-1V4a3 3 0 0 0-3-3zm2 5H6V4a2 2 0 1 1 4 0v2z" />
              </svg>
              <span className="text-[10px] sm:text-[11px] font-sans font-medium text-gray-700 tracking-tight select-all">
                arutalaaksara.com
              </span>
            </div>
            {/* Refresh icon */}
            <svg
              className="w-2.5 h-2.5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors flex-shrink-0 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        </div>

        {/* Right: Action icons */}
        <div className="flex items-center gap-2 text-gray-400">
          <svg className="w-3.5 h-3.5 hidden sm:block hover:text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <svg className="w-3.5 h-3.5 hover:text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <svg className="w-3.5 h-3.5 hidden sm:block hover:text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
      </div>

      {/* 2. Blue Hero Banner ("Write") */}
      <div className="relative w-full h-24 sm:h-28 bg-gradient-to-r from-[#1752C3] via-[#1E65E2] to-[#2B77F4] flex items-center justify-center overflow-hidden">
        {/* Subtle geometric and sparkles in background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-2 left-6 w-8 h-8 rounded-full border border-white/40" />
          <div className="absolute bottom-3 right-8 w-14 h-14 rounded-full border border-white/30" />
          <div className="absolute top-4 right-1/4 w-3 h-3 rotate-45 bg-white/40" />
          <div className="absolute bottom-4 left-1/4 w-2 h-2 rotate-45 bg-white/40" />
        </div>

        {/* Central Title */}
        <h3 className="relative text-white font-sans font-bold text-2xl sm:text-3xl tracking-wide drop-shadow-md">
          Write
        </h3>
      </div>

      {/* 3. Main Workspace Canvas (5x4 Aksara Grid + Handwriting Canvas) */}
      <div className="bg-[#EAEDF1] p-3.5 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-between">
        {/* Left Column: 5x4 Aksara Grid (20 characters) */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2 flex-1 w-full max-w-[320px]">
          {AKSARA_CHARS.map((item) => {
            const isSelected = selectedAksara === item.label;
            return (
              <button
                key={item.code}
                type="button"
                onClick={() => handleSelectAksara(item.label)}
                aria-pressed={isSelected}
                className={`relative aspect-[1/1] sm:h-12 flex flex-col items-center justify-center rounded-xl transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "bg-blue-50/90 border-2 border-[#2563EB] text-[#2563EB] shadow-sm shadow-blue-500/20 scale-[1.03]"
                    : "bg-white/85 border border-gray-300/60 text-gray-800 hover:bg-white hover:border-gray-400 shadow-2xs"
                }`}
              >
                {/* Javanese Glyph */}
                <span
                  className="text-base sm:text-lg font-bold leading-none select-none"
                  style={{ fontFamily: "'Noto Sans Javanese', sans-serif" }}
                >
                  {item.unicode}
                </span>
                {/* Romanized Latin Label */}
                <span
                  className={`text-[8px] sm:text-[9px] font-bold tracking-tight mt-0.5 leading-none ${
                    isSelected ? "text-[#2563EB]" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Column: Handwriting Canvas & Periksa Button */}
        <div className="flex flex-col items-center gap-2.5 w-full sm:w-[160px] max-w-[200px]">
          {/* Drawing Canvas Box */}
          <div className="w-full aspect-square bg-white rounded-2xl border-2 border-blue-400/40 p-3 shadow-xs relative flex items-center justify-center overflow-hidden">
            {/* Clear (x) button */}
            <button
              type="button"
              onClick={handleClear}
              title="Clear Canvas"
              aria-label="Clear handwriting canvas"
              className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white flex items-center justify-center text-[10px] font-bold shadow transition-transform active:scale-90"
            >
              ✕
            </button>

            {/* Canvas Stroke content */}
            {!isCanvasCleared ? (
              selectedAksara === "HA" ? (
                // Traced exact Figma vector stroke for HA
                <svg
                  viewBox="0 0 145 100"
                  className="w-4/5 h-4/5 max-h-[90px] drop-shadow-xs transition-opacity duration-200"
                  fill="#1E2022"
                >
                  <path d={HA_STROKE_PATH} />
                </svg>
              ) : (
                // Interactive dynamic glyph for other selected characters
                <div className="flex flex-col items-center justify-center animate-in fade-in duration-200">
                  <span
                    className="text-5xl font-bold text-[#1E2022] select-none"
                    style={{ fontFamily: "'Noto Sans Javanese', sans-serif" }}
                  >
                    {currentChar.unicode}
                  </span>
                  <span className="text-[10px] font-semibold text-gray-400 mt-1 uppercase tracking-widest">
                    {currentChar.label}
                  </span>
                </div>
              )
            ) : (
              <span className="text-[11px] text-gray-400 font-medium italic select-none">
                Goreskan aksara...
              </span>
            )}
          </div>

          {/* "Periksa" Action Button */}
          <button
            type="button"
            onClick={handleCheck}
            className="w-full py-1.5 px-4 rounded-full bg-[#2B8CEE] hover:bg-[#1C76D2] text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all duration-150 active:scale-95 flex items-center justify-center gap-1.5"
          >
            {checkStatus ? (
              <span className="animate-in fade-in text-[11px] font-medium text-white">
                {checkStatus}
              </span>
            ) : (
              <span>Periksa</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
