// import ApplicantLayout from "../../../layouts/ApplicantLayout";
// import { useState } from "react";
import { Search, Bell, ChevronDown, Bookmark, LogOut, Home, Briefcase, FileText, User, Settings } from "lucide-react";

export default function FindJobs() {
  const filters = [
    "Past 24 hours", "Lagos, Nigeria", "Remote", "Telecommunications",
    "Entry Level", "Under 10 applicants", "Has Verifications"
  ];

  const jobs = [
    {
      title: "Data Analyst",
      company: "Burosu Stats Ltd.",
      tags: ["Full-time", "Entry-level", "58 applicants", "Remote"],
      location: "Lagos, Nigeria",
    },
    {
      title: "Software Engineer",
      company: "TechLounge",
      tags: ["Full-time", "Entry-level", "9 applicants", "Remote"],
      location: "Lagos, Nigeria",
    },
    {
      title: "Financial Manager",
      company: "Adewale Holdings",
      tags: ["Full-time", "Mid-level", "100+ applicants", "Hybrid"],
      location: "Abuja, Nigeria",
    },
    {
      title: "Forex Analyst",
      company: "Emaski Specialities Ltd.",
      tags: ["Contract", "Mid-level", "2 applicants", "On-site"],
      location: "Lagos, Nigeria",
    },
    {
      title: "Customer Service Representative",
      company: "Resumefy Ltd.",
      tags: ["Full-time", "Entry-level", "79 applicants", "Remote"],
      location: "Paris, France",
    },
    {
      title: "Virtual Assistant",
      company: "Cooca-cola PLC",
      tags: ["Part-time", "Entry-level", "24 applicants", "Hybrid"],
      location: "United Kingdom",
    },
    {
      title: "UI / UX Developer",
      company: "Makosoft Ltd.",
      tags: ["Full-time", "Entry-level", "41 applicants", "Remote"],
      location: "Lagos, Nigeria",
    },
    {
      title: "Legal Officer",
      company: "H.A. Legal Consults",
      tags: ["Full-time", "Entry-level", "7 applicants", "Remote"],
      location: "Lagos, Nigeria",
    }
  ];

  return (
    // <ApplicantLayout>
        <div className="w-full min-h-screen bg-[#D9D9D9] flex">

        {/* --------------------- Main Content --------------------- */}
        <main className="flex-1">
            {/* ------------------ Page Content ------------------ */}
            <div className="p-10 text-black">
              <h1 className="text-3xl text-start font-semibold">Discover New Jobs</h1>

              {/* Search Bar */}
              <div className="w-full mt-6 relative flex items-center">
                  <Search size={20} className="absolute left-4 text-gray-500" />
                  <input
                  type="text"
                  placeholder="Search for job titles or keywords"
                  className="w-full text-[#00000099] text-2xl bg-white py-3 pl-12 pr-4 rounded-xl border border-[#014CCC]  focus:outline-none"
                  />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3 mt-6">
                  {filters.map((f, i) => (
                  <span
                      key={i}
                      className="bg-[#CCDFFF] px-4 py-2 rounded-full border border-[#014CCC] text-sm cursor-pointer flex items-center justify-center hover:bg-gray-100"
                  >
                      {f} <ChevronDown className="w-4 h-4"/>
                  </span>
                  ))}
              </div>

              {/* Job Cards Grid */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                  {jobs.slice(0, 6).map((job, i) => (
                  <JobCard key={i} job={job} />
                  ))}

                  {/* Advert Section */}
                  <div className="col-span-2 bg-[#4AA8FF] text-white rounded-xl p-8 text-center">
                  <h2 className="text-lg font-semibold">Company Advert Section</h2>
                  <p className="text-sm max-w-2xl mx-auto mt-1">
                      Note: This section is meant to be an image card even though it looks like a UI component.
                      This ad section is to randomly display any image from a given array of images.
                  </p>
                  </div>

                  {jobs.slice(6).map((job, i) => (
                  <JobCard key={i} job={job} />
                  ))}
              </div>

              {/* Footer */}
              <footer className="text-center text-sm mt-20 flex gap-4 justify-center">
                © 2025 ResumeeFy Jobs <a href="#" className="hover:underline">About</a> {" "}
                <a href="#" className="hover:underline">Terms</a> {" "}
                <a href="#" className="hover:underline">Privacy Policy</a>
              </footer>
            </div>
        </main>
        </div>
    // </ApplicantLayout>
  );
}

/* ------------------- Components ------------------- */

function NavItem({ icon, label, active }) {
  return (
    <button
      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
        active ? "bg-[#4AA8FF] text-white" : "hover:bg-gray-800"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function JobCard({ job }) {
  return (
    <div style={{ boxShadow: " 0px 10px 20px 0px #00000040" }} className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex justify-between">
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-sm ">{job.company}</p>
        </div>
        <Bookmark size={20} className="cursor-pointer text-gray-500" />
      </div>

      <div className="flex items-center flex-wrap gap-2 mt-4 text-[16px] font-medium">
        {job.tags.map((t, idx) => (
          <span key={idx} className="bg-[#CCDFFF] px-3 py-1 rounded-full ">
            {t}
          </span>
        ))}
        <span className="bg-[#CCDFFF] px-3 py-1 rounded-full">{job.location}</span>
      </div>

    </div>
  );
}
