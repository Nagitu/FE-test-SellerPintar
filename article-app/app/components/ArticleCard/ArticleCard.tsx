import Image from "next/image";
import CategoryChip from "./CategoryChip";

export default function ArticleCard() {
  return (
    <div>
      <div className="relative h-[240px] rounded-lg overflow-hidden">
        <Image src="/sample-1.jpg" layout="fill" objectFit="cover" alt="card" />
      </div>
      <p className="mt-3 text-sm text-gray-500">April 13, 25</p>
      <h2 className="text-[#0F172A] text-[18px] font-semibold mt-1">
        Cybersecurity Essentials Every Developer Should Know
      </h2>
      <h2 className="text-[#475569] text-[16px]">
        Protect your apps and users with these fundamental cybersecurity
        practices for developers.
      </h2>
      <div className="flex gap-2">
        {Array.from({ length: 2 }).map((item, i) => (
          <CategoryChip key={i} />
        ))}
      </div>
    </div>
  );
}
