import Tabs from "@/components/Tabs";
import Gallery from "@/components/Gallary";
import Line from "@/components/Line";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1114] text-gray-200 flex flex-col md:flex-row gap-1 p-6 md:p-2">
      <div className="hidden md:block md:w-1/2"></div>
      <div className="flex flex-col md:w-[54%] space-y-6">
        <Tabs />
        <Line />
        <Gallery />
        <Line />
      </div>
    </main>
  );
}
