import React, { useEffect, useRef, useState } from "react";
import { GoRepoForked } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { FaCircleChevronDown } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { GoHash } from "react-icons/go";

import { FaBriefcase } from "react-icons/fa";
import {
  Link2,
  RefreshCw,
  IndianRupee,
  Ellipsis,
  ChevronDown,
} from "lucide-react";
import { FaGlobe } from "react-icons/fa";
import { IoHandLeft } from "react-icons/io5";

const columns = [
  { header: "#", width: "2.5%" },
  { header: "Job Request", width: "21%" },
  { header: "Submitted", width: "10%" },
  { header: "Status", width: "9%" },
  { header: "Submitter", width: "10%" },
  { header: "URL", width: "10%" },
  { header: "Assigned", width: "10.5%" },
  { header: "Priority", width: "8%" },
  { header: "Due Date", width: "8%" },
  { header: "Est. Value", width: "8%" },
  { header: "", width: "10%" },
];

// ✅ Real Data
const rows = [
  {
    job: "Launch social media campaign for pro...",
    submitted: "15-11-2024",
    status: { label: "In-process", color: "bg-[#FFF3D6] text-[#85640B]" },
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: { label: "Medium", color: "text-[#C29210]" },
    due: "20-11-2024",
    value: "6,200,000",
  },
  {
    job: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: { label: "Need to start", color: "bg-[#E2E8F0] text-[#475569]" },
    submitter: "Irfan Khan",
    url: "www.irfankhanpress.com",
    assigned: "Tejas Pandey",
    priority: { label: "High", color: "text-[#EF4D44]" },
    due: "30-10-2024",
    value: "3,500,000",
  },
  {
    job: "Finalize user testing feedback for app...",
    submitted: "05-12-2024",
    status: { label: "In-process", color: "bg-[#FFF3D6] text-[#85640B]" },
    submitter: "Mark Johnson",
    url: "www.markjohnson.dev",
    assigned: "Rachel Lee",
    priority: { label: "Medium", color: "text-[#C29210]" },
    due: "10-12-2024",
    value: "4,750,000",
  },
  {
    job: "Design new features for the website",
    submitted: "10-01-2025",
    status: { label: "Complete", color: "bg-[#D3F2E3] text-[#0A6E3D]" },
    submitter: "Emily Green",
    url: "www.emilygreenweb.com",
    assigned: "Tom Wright",
    priority: { label: "Low", color: "text-[#1A8CFF]" },
    due: "15-01-2025",
    value: "5,900,000",
  },
  {
    job: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: { label: "Blocked", color: "bg-[#FFE1DE] text-[#C22219]" },
    submitter: "Jessica Brown",
    url: "www.jessicabrownfinance.com",
    assigned: "Kevin Smith",
    priority: { label: "Low", color: "text-[#1A8CFF]" },
    due: "30-01-2025",
    value: "2,800,000",
  },
];

const Table: React.FC = () => {
  const [focusRow, setFocusRow] = useState(0);
  const [focusCol, setFocusCol] = useState(0);
  const tableRefs = useRef<(HTMLTableCellElement | null | undefined)[][]>([]);

  useEffect(() => {
    const cell = tableRefs.current[focusRow]?.[focusCol];
    cell?.focus();
  }, [focusRow, focusCol]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTableCellElement>) => {
    e.preventDefault();
    let newRow = focusRow;
    let newCol = focusCol;

    if (e.key === "ArrowRight")
      newCol = Math.min(columns.length - 1, focusCol + 1);
    else if (e.key === "ArrowLeft") newCol = Math.max(0, focusCol - 1);
    else if (e.key === "ArrowDown")
      newRow = Math.min(rows.length + 20 - 1, focusRow + 1);
    else if (e.key === "ArrowUp") newRow = Math.max(0, focusRow - 1);

    setFocusRow(newRow);
    setFocusCol(newCol);
  };

  return (
    <div>
      {/* ✅ Upper Section (Header bar) */}
      <div className="w-full flex border border-[#e3e6ea] rounded overflow-hidden sticky top-0 z-20 bg-white">
        <div className="w-[2.3%]"></div>

        <div className=" w-[46.8%] flex items-center h-10 bg-[#e2e2e2] border border-white px-3 text-xs font-medium text-gray-700 ">
          <div className="flex items-center gap-2 bg-[#EEEEEE] px-2 py-1 rounded-lg">
            <Link2 className="text-blue-400" strokeWidth={1} />
            Q3 Financial Overview
          </div>

          <RefreshCw
            className="text-orange-600 ml-3 rotate-[110deg]"
            strokeWidth={2}
            size={16}
          />
        </div>

        <div className=" w-[9.35%]"></div>

        <div className="w-[9.83%] flex justify-around items-center h-10 bg-[#D2E0D4] border-r border-[#e3e6ea] px-6 text-xs font-medium text-green-700">
          <div className="flex items-center text-[#505450] gap-2 text-base">
            <GoRepoForked className=" rotate-180" />
            <span>ABC</span>
          </div>
          <Ellipsis className="text-[#A3ACA3]" />
        </div>

        <div className="w-[14.87%] flex justify-around items-center h-10 bg-[#DCCFFC] border-r border-[#e3e6ea] px-6 text-xs font-medium text-green-700">
          <div className="flex items-center text-[#463E59] gap-2 text-base">
            <GoRepoForked className="text-[#FFFFFF] rotate-180" />
            <span>Ask a question</span>
          </div>
          <Ellipsis className="text-[#A3ACA3]" />
        </div>

        <div className="w-[7.5%] flex justify-around items-center h-10 bg-[#FAC2AF] border-r border-[#e3e6ea] px-2 text-xs font-medium text-green-700">
          <div className="flex items-center text-[#695149] gap-1 text-base">
            <GoRepoForked className="text-[#FFFFFF] rotate-180" />
            <span>Extract</span>
          </div>
          <Ellipsis className="text-[#A3ACA3] px-1" />
        </div>

        <div className=" w-[9.2%] flex pb-5 h-10 bg-[#EEEEEE] px-3 text-3xl font-normal text-black  justify-center">
          +
        </div>
      </div>

      <div className="relative">
        <table className="table-fixed border-collapse border border-gray-300 w-full text-sm">
          <colgroup>
            {columns.map((col, idx) => (
              <col key={idx} style={{ width: col.width }} />
            ))}
          </colgroup>

          <thead>
            <tr>
              <th className="border border-white bg-[#EEEEEE] px-2 py-2 text-center font-bold">
                <GoHash className="w-4 h-4 opacity-60" />
              </th>

              <th className="border border-white bg-[#EEEEEE] px-2 py-2 ">
                <div className="flex items-center justify-between text-[#757575]">
                  <div className="flex items-center gap-2 text-left font-bold">
                    <FaBriefcase className="w-4 h-4 opacity-60" />
                    Job Request
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </th>

              <th className="border border-white bg-[#EEEEEE] px-2 py-2 ">
                <div className="flex items-center justify-between text-[#757575]">
                  <div className="flex items-center gap-2 text-left font-bold">
                    <FaCalendarAlt className="w-4 h-4 opacity-60" />
                    Submitted
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </th>

              <th className="border border-white bg-[#EEEEEE] px-2 py-2 ">
                <div className="flex items-center justify-between text-[#757575]">
                  <div className="flex items-center gap-2 text-left font-bold">
                    <FaCircleChevronDown className="w-4 h-4 opacity-60" />
                    Status
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </th>

              <th className="border border-white bg-[#EEEEEE] px-2 py-2 ">
                <div className="flex items-center justify-between text-[#757575]">
                  <div className="flex items-center gap-2 text-left font-bold">
                    <FaUser className="w-4 h-4 opacity-60" />
                    Submitter
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </th>

              <th className="border border-white bg-[#EEEEEE] px-2 py-2 ">
                <div className="flex items-center justify-between text-[#757575]">
                  <div className="flex items-center gap-2 text-left font-bold">
                    <FaGlobe className="w-4 h-4 opacity-60" />
                    URL
                  </div>
                  <ChevronDown className="w-4 h-4 " />
                </div>
              </th>

              <th className="border border-white bg-[#E8F0E9] text-[#666C66] px-2 py-2 text-left font-bold">
                <div className="flex items-center gap-2">
                  <IoHandLeft className="w-4 h-4 opacity-60" />
                  Assigned
                </div>
              </th>

              <th className="border border-white bg-[#EAE3FC] text-[#655C80] px-2 py-2 text-left font-bold">
                Priority
              </th>
              <th className="border border-white bg-[#EAE3FC] text-[#655C80] px-2 py-2 text-left font-bold">
                Due Date
              </th>
              <th className="border border-white bg-[#FFE9E0] text-[#8C6C62] px-2 py-2 text-left font-bold">
                Est. Value
              </th>
              <th className=" bg-white px-2 py-2 text-left font-semibold"></th>
            </tr>
          </thead>

          <tbody>
            {[...rows, ...Array.from({ length: 20 })].map((_, rowIndex) => {
              if (!tableRefs.current[rowIndex]) {
                tableRefs.current[rowIndex] = [];
              }

              return (
                <tr key={rowIndex}>
                  {columns.map((_, colIndex) => {
                    let content: React.ReactNode = "";
                    if (rowIndex < rows.length) {
                      const r = rows[rowIndex];
                      switch (colIndex) {
                        case 0:
                          content = (
                            <div className="">{rowIndex + 1}</div>
                          );
                          break;
                        case 1:
                          content = (
                            <div className="px-2  text-left text-base">
                              {r.job}
                            </div>
                          );
                          break;
                        case 2:
                          content = (
                            <div className="px-2  text-right text-base">
                              {r.submitted}
                            </div>
                          );
                          break;
                        case 3:
                          content = (
                            <span
                              className={`flex justify-center items-center  py-1 rounded-full  text-sm font-semibold ${r.status?.color}`}
                            >
                              {r.status?.label}
                            </span>
                          );
                          break;
                        case 4:
                          content = (
                            <div className=" px-2 text-left text-base">
                              {r.submitter}
                            </div>
                          );
                          break;
                        case 5:
                          content = (
                            <div className="text-[1.1rem] underline truncate overflow-hidden whitespace-nowrap max-w-[160px]">
                              {r.url}
                            </div>
                          );
                          break;
                        case 6:
                          content = (
                            <div className="px-2  text-left text-base">
                              {r.assigned}
                            </div>
                          );
                          break;
                        case 7:
                          content = (
                            <div
                              className={`px-2 py-0.5 rounded-full text-s text-center font-bold ${r.priority.color}`}
                            >
                              {r.priority.label}
                            </div>
                          );
                          break;
                        case 8:
                          content = (
                            <div className=" px-2 py-1 text-right font-normal">
                              {r.due}
                            </div>
                          );
                          break;
                        case 9:
                          content = (
                            <div className="flex items-center justify-end gap-1">
                              <span>{r.value}</span>
                              <IndianRupee className="w-4 h-4 opacity-40" />
                            </div>
                          );
                          break;
                        default:
                          break;
                      }
                    } else {
                      if (colIndex === 0)
                        content = `${rows.length + (rowIndex - rows.length) + 1}`;
                    }

                    return (
                      <td
                        key={colIndex}
                        ref={(el) =>
                          void (tableRefs.current[rowIndex][colIndex] = el)
                        }
                        tabIndex={0}
                        onKeyDown={handleKeyDown}
                        onFocus={() => {
                          setFocusRow(rowIndex);
                          setFocusCol(colIndex);
                        }}
                        className={`border border-gray-300 px-2 py-2 text-left focus:outline-2 focus:outline-blue-500`}
                      >
                        {content}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div
          className="absolute top-0 bottom-0 w-0.3 border-l-2 border-dashed border-gray-400"
          style={{ left: "90.59999999%" }}
        ></div>
      </div>
    </div>
  );
};

export default Table;
//
