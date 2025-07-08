import React, { useState } from "react";
import { Bell, Search, Ellipsis, ChevronRight } from "lucide-react";
import profile from "../assets/profile.png";
import panel from "../assets/Panel.jpg";

const Topbar: React.FC = () => {
  const [popupContent, setPopupContent] = useState<string | null>(null);

  const handlePopup = (content: string) => {
    setPopupContent(content);
    setTimeout(() => {
      setPopupContent(null); // auto-close after 2s (optional)
    }, 2000);
  };

  return (
    <div className="relative">
      {/* Topbar */}
      <div className="w-full flex items-center justify-between px-8 py-2 bg-[#f8f9fb] border-b border-gray-200 rounded-t-xl">
        {/* Left: Icon + Breadcrumb */}
        <div className="flex items-center gap-1">
          <img src={panel} alt="Icon" className="w-6 h-6 mr-2.5" />

          <div className="flex items-center text-base text-gray-600">
            <span className="text-m font-small leading-3 text-gray-400">
              Workspace
            </span>
            <ChevronRight className="mx-1 text-gray-400" strokeWidth={1} />
            <span className="text-m font-small leading-3 text-gray-400">
              Folder 2
            </span>
            <ChevronRight className="mx-1 text-gray-400" strokeWidth={1} />
            <span className="text-m font-semibold leading-3 text-gray-800">
              Spreadsheet 3
            </span>
          </div>

          <Ellipsis
            className="text-gray-400 cursor-pointer"
            onClick={() => handlePopup("Ellipsis clicked")}
          />
        </div>

        {/* Right: Search + Bell + Profile */}
        <div className="flex items-center gap-5">
          {/* Search Box with Icon */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              onClick={() => handlePopup("Search clicked")}
            />
            <input
              type="text"
              placeholder="Search within sheet"
              className="pl-10 pr-3 bg-[#eceff3] py-3 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 min-w-[220px]"
            />
          </div>

          {/* Notification Bell with badge */}
          <div className="relative" onClick={() => handlePopup("Bell clicked")}>
            <Bell className="text-gray-500 cursor-pointer w-6 h-6" />
            <span className="absolute -top-1 -right-1 text-[10px] bg-[#4B6A4F] text-white rounded-full px-1.5 border border-white shadow">
              2
            </span>
          </div>

          {/* Profile */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handlePopup("Profile clicked")}
          >
            <img
              src={profile}
              alt="profile"
              className="w-9 h-9 rounded-full border border-gray-200 shadow-sm"
            />
            <div className="text-sm leading-tight text-left">
              <p className="font-semibold text-gray-800">John Doe</p>
              <p className="text-gray-400 text-xs">john.doe...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popup on Right */}
      {popupContent && (
        <div className="absolute top-14 right-5 bg-white px-4 py-2 border border-gray-300 rounded shadow animate-slide-in">
          {popupContent}
        </div>
      )}
    </div>
  );
};

export default Topbar;
