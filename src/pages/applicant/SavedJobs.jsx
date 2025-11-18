import JobCard from "../components/JobCard";

const jobs = [
  {
    title: "Data Analyst",
    company: "Bureau Stats Ltd.",
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
    company: "Emaski Speculations Ltd.",
    tags: ["Contract", "Mid-level", "2 applicants", "On-site"],
    location: "Lagos, Nigeria",
  },
  {
    title: "Customer Service Representative",
    company: "Resumeefy Ltd.",
    tags: ["Full-time", "Entry-level", "79 applicants", "Remote"],
    location: "Paris, France",
  },
  {
    title: "Virtual Assistant",
    company: "Coca-cola PLC",
    tags: ["Part-time", "Entry-level", "24 applicants", "Hybrid"],
    location: "United Kingdom",
  },
  {
    title: "UI / UX Developer",
    company: "Makzosoft Ltd.",
    tags: ["Full-time", "Entry-level", "42 applicants", "Remote"],
    location: "Lagos Nigeria",
  },
  {
    title: "Legal Officer",
    company: "H.A. Legal Consults",
    tags: ["Full-time", "Entry-level", "7 applicants", "Remote"],
    location: "Lagos Nigeria",
  },
];

const SavedJobs = () => {
  return (
    <div className="text-black flex flex-col min-h-screen p-8 bg-[#D9D9D9]">
        <h1 className="text-2xl text-start font-bold mb-6">Jobs Saved for Later</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, i) => (
            <JobCard key={i} job={job} />
            ))}
        </div>

        <footer className="text-center text-sm mt-20 flex gap-4 justify-center">
            © 2025 ResumeeFy Jobs <a href="#" className="hover:underline">About</a> {" "}
            <a href="#" className="hover:underline">Terms</a> {" "}
            <a href="#" className="hover:underline">Privacy Policy</a>
        </footer>
    </div>
  );
};

export default SavedJobs;
