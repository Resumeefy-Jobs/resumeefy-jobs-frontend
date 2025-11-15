import { Bookmark } from "lucide-react";

const JobCard = ({ job }) => {
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

export default JobCard;