import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { KakaoFab } from "@/components/layout/KakaoFab";
import { Hero } from "@/components/sections/Hero";
import { Empathy } from "@/components/sections/Empathy";
import { Features } from "@/components/sections/Features";
import { Classroom } from "@/components/sections/Classroom";
import { Reviews } from "@/components/sections/Reviews";
import { Philosophy } from "@/components/sections/Philosophy";
import { Consult } from "@/components/sections/Consult";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Empathy />
        <Features />
        <Classroom />
        <Reviews />
        <Philosophy />
        <Consult />
      </main>
      <Footer />
      <KakaoFab />
    </>
  );
}
