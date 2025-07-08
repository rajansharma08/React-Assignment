import React, { useState } from "react";
import {
  ChevronsRight,
  ListFilter,
  ArrowUpDown,
  EyeOff,
  ArrowDownToLine,
  ArrowUpToLine,
} from "lucide-react";
import cellview from "../assets/cellView.png";
import share from "../assets/Share.jpg";
import ArrowSplit from "../assets/Arrow Split.png";

const Row: React.FC = () => {
  const [popupContent, setPopupContent] = useState<string | null>(null);

  const handlePopup = (content: string) => {
    setPopupContent(content);
    setTimeout(() => setPopupContent(null), 2000); // auto-hide after 2s
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between bg-[#f8f9fb] px-8 py-1 border-b border-gray-200 w-full">
        {/* Left side buttons */}
        <div className="flex items-center space-x-4 text-[#121212] text-sm font-normal">
          {/* Toolbar label */}
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => handlePopup("Toolbar clicked")}
          >
            <span>Tool bar</span>
            <ChevronsRight className="h-4 w-4" strokeWidth={1.2} />
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-gray-300" />

          {/* Hide fields */}
          <button
            className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded text-[#121212]"
            onClick={() => handlePopup("Hide fields clicked")}
          >
            <EyeOff className="h-4 w-4" />
            <span>Hide fields</span>
          </button>

          {/* Sort */}
          <button
            className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded text-[#121212]"
            onClick={() => handlePopup("Sort clicked")}
          >
            <ArrowUpDown className="h-4 w-4" />
            <span>Sort</span>
          </button>

          {/* Filter */}
          <button
            className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded text-[#121212]"
            onClick={() => handlePopup("Filter clicked")}
          >
            <ListFilter className="h-4 w-4" />
            <span>Filter</span>
          </button>

          {/* Cell view */}
          <button
            className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded text-[#121212]"
            onClick={() => handlePopup("Cell view clicked")}
          >
            <img src={cellview} alt="Icon" className="w-4 h-4" />
            <span>Cell view</span>
          </button>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-1 px-3 py-2 border border-gray-200 rounded bg-white text-gray-700 text-sm font-normal hover:bg-gray-50"
            onClick={() => handlePopup("Import clicked")}
          >
            <ArrowDownToLine className="h-5 w-5" />
            Import
          </button>

          <button
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded bg-white text-gray-700 text-sm font-normal hover:bg-gray-50"
            onClick={() => handlePopup("Export clicked")}
          >
            <ArrowUpToLine className="h-5 w-5" />
            Export
          </button>

          <button
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded bg-white text-gray-700 text-sm font-normal hover:bg-gray-50"
            onClick={() => handlePopup("Share clicked")}
          >
            <img src={share} alt="Icon" className="w-5 h-5" />
            Share
          </button>

          <button
            className="flex items-center gap-2 px-4 py-2 rounded bg-[#324935] text-white text-sm font-medium"
            onClick={() => handlePopup("New Action clicked")}
          >
            <img src={ArrowSplit} alt="Icon" className="w-5 h-5" />
            New Action
          </button>
        </div>
      </div>

      {/* Popup */}
      {popupContent && (
        <div className="absolute top-12 right-5 bg-white px-4 py-2 border border-gray-300 rounded shadow animate-slide-in z-50">
          {popupContent}
        </div>
      )}
    </div>
  );
};

export default Row;
