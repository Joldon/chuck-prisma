import QuoteContent from "@/components/QuoteContent/QuoteContent";
import FooterSection from "@/components/footer/Footer";
import NavbarSection from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="container max-w-4xl mx-auto px-4 py-8 bg-slate-800 rounded-lg shadow">
        <NavbarSection />
        <main className="flex-1 overflow-y-auto px-4 ">
          <QuoteContent />
        </main>
        <FooterSection />
      </div>
    </div>
  );
}
