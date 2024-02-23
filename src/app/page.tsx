import FooterSection from "@/components/footer/Footer";
import NavbarSection from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <NavbarSection />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Home
      </main>
      <FooterSection />
    </div>
  );
}
