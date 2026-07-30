import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import CourseOutline from "@/components/CourseOutline";
import Instructor from "@/components/Instructor";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Dx09Page() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Hero />
        <PainPoints />
        <CourseOutline />
        <Instructor />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
