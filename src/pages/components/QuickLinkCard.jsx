const QuickLinkCard = ({ label }) => {
  return (
    <button className="w-full border border-blue-400 text-black rounded-lg px-4 py-3 font-medium hover:bg-blue-600 hover:text-white transition">
      {label}
    </button>
  );
};

export default QuickLinkCard;
