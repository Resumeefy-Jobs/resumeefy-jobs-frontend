const SnapshotCard = ({ count, label }) => {
  return (
    <div className="flex justify-center items-center gap-2 border border-blue-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
      <h2 className="text-2xl font-semibold text-black">{count}</h2>
      <p className="text-black text-sm">{label}</p>
    </div>
  );
};

export default SnapshotCard;
