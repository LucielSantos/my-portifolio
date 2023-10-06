import { ChevronDown } from "lucide-react";

export const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col relative">
      <h1 className="text-5xl mb-4 text-shadow">Luciel Santos</h1>
      <h2 className="text-2xl text-purple-500">Desenvolvedor Frontend</h2>

      <div className="animate-[bounce_1.8s_ease-in-out_infinite] absolute cursor-pointer bottom-4 backdrop-filter backdrop-blur-sm bg-white/10 rounded-full flex justify-center items-center border-white/50 border-1 shadow-xl">
        <ChevronDown size={48} strokeWidth={1} />
      </div>
    </div>
  );
};
