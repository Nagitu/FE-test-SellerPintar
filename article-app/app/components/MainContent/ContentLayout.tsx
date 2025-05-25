import ArticleCard from "../ArticleCard/ArticleCard";

export default function ContentLayout() {
  return (
    <div className="pt-[40px] pb-[100px] pr-[100px] pl-[100px]">
      <h1 className="text-[#475569] text-base">Showing : 20 of 240 articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
        {Array.from({ length: 9 }).map((item, i) => (
          <ArticleCard key={i} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-4">
        <button className="w-[102px] h-10 flex items-center justify-center gap-1 rounded-md pr-4 pl-[10px] text-[#0F172A]">
          Prev
        </button>
        <span className="text-gray-800 font-medium text-sm px-1 py-1">1</span>
        <span className="text-gray-800 font-medium text-sm px-1 py-1">1</span>
        <span className="text-gray-800 font-medium text-sm px-1 py-1">1</span>

        <button className="w-[102px] h-10 flex items-center justify-center gap-1 rounded-md pr-4 pl-[10px]  text-[#0F172A]">
          Next
        </button>
      </div>
    </div>
  );
}
