export default function Navbar() {
  return (
    <nav className="h-[64px] md:h-10 w-full bg-transparent border-b-[0.5px] flex justify-between items-center px-[20px] md:px-[60px]  py-[20px] md:py-[32px]">
      <img src="next.svg" alt="Logo" className="h-5" />
      <div className="flex flex-row items-center gap-4">
        <div className="bg-[#BFDBFE] h-[32px] w-[32px] rounded-full text-lg font-bold text-center text-[#1E3A8A]">
          J
        </div>
        <a className="underline text-black hidden md:flex">James Dean</a>
      </div>
    </nav>
  );
}
