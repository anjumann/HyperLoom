import Banner from "@/components/Home/Banner";
import Hero from "@/components/Home/Hero";
import ProjectSection from "@/components/Home/ProjectSection";
import QuickLinks from "@/components/Home/QuickLinks";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <ProjectSection/>
      <Banner/>
    </>
  )
}
