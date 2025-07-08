import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

const TitleRow: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All Orders");
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab !== "All Orders") {
      setPopupMessage(`${tab} tab clicked`);
    }
  };

  useEffect(() => {
    if (popupMessage) {
      const timer = setTimeout(() => {
        setPopupMessage(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [popupMessage]);

  return (
    <>
      <tr>
        <td
          colSpan={10}
          className="bg-white px-8 py-2 border-b border-gray-200"
        >
          <div className="flex items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-2 text-sm font-medium 
                ${
                  activeTab === tab
                    ? "bg-[#E8F0E9] text-[#3E5741] border-t-3 border-[#3E5741]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
            <button className="flex items-center justify-center w-7 h-7 ml-2 bg-white text-gray-400 hover:bg-gray-100 transition-all duration-150">
              <Plus />
            </button>
          </div>
        </td>
      </tr>

      {/* Popup */}
      {popupMessage && (
        <div className="fixed top-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded shadow-lg transition transform animate-slide-in">
          {popupMessage}
        </div>
      )}
    </>
  );
};

export default TitleRow;
