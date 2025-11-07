const SnapshotCard = ({ count, label }) => {
  return (
    <div className="flex justify-center items-center gap-2 border border-blue-300 rounded-[20px] p-4 bg-white shadow-sm hover:shadow-md transition">
      <h2 className="text-[40px] font-semibold leading-[100%] tracking-[-2%] text-black">{count}</h2>
      <p className="text-black text-medium text-2xl leading-[100%] tracking-[-2%]">{label}</p>
    </div>
  );
};

export default SnapshotCard;
